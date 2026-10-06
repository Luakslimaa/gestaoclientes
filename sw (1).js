// Service Worker do Painel Divert Flix
// Recebe as push notifications e, ao tocar, abre o painel na tela certa:
//   acao "cobrar"          -> cobrança de vencimento (#cobrar=ID)
//   acao "lembrete_anual"  -> lembrete antecipado do plano anual (#lembrete=ID)
//   acao "fila_indicacao"  -> fila do dia de pedidos de indicação (#fila-indicacao)
// O painel confirma a ação com um botão (o iOS bloqueia abrir o WhatsApp sem toque).

const SW_VERSION = '2026-10-06-1';
const VAPID_PUBLIC_KEY = 'BFHtYiV9zOWnGVs150XRqRFWfWum_iAGJa1SInfsoX_BJTeqwUjzphjrJ5oAV7PeY5p7WkGTxraEWj3Gx1jejqk';

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(base64);
  const out = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; ++i) out[i] = raw.charCodeAt(i);
  return out;
}

self.addEventListener('install', () => { self.skipWaiting(); });
self.addEventListener('activate', (event) => { event.waitUntil(self.clients.claim()); });

self.addEventListener('push', (event) => {
  let data = { title: 'Divert Flix', body: 'Você tem uma nova notificação.', url: './index.html' };
  try {
    if (event.data) data = { ...data, ...event.data.json() };
  } catch (e) {
    if (event.data) data.body = event.data.text();
  }

  // Tag: um aviso por assinatura (cobrança/lembrete) ou um por tipo (fila de indicação).
  // Assim a 2ª chamada substitui a 1ª em vez de empilhar.
  let tag;
  if (data.assinaturaId) tag = `${data.tipo || 'push'}-${data.assinaturaId}`;
  else if (data.tipo && data.tipo !== 'teste') tag = data.tipo;

  const options = {
    body: data.body,
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    data: data,
    vibrate: data.urgente ? [150, 80, 150, 80, 150] : [100, 50, 100], // ignorado no iOS
    tag,
    renotify: !!tag,
    requireInteraction: !!data.urgente, // ignorado no iOS
  };

  // O iOS exige que TODA push resulte em uma notificação visível; sem isso ele
  // passa a descartar as próximas. Por isso o showNotification nunca é pulado.
  event.waitUntil(self.registration.showNotification(data.title || 'Divert Flix', options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const data = event.notification.data || {};
  const id = data.assinaturaId || null;
  const acao = data.acao || (id ? 'cobrar' : null);

  let hash = '';
  if (acao === 'cobrar' && id) hash = `#cobrar=${encodeURIComponent(id)}`;
  else if (acao === 'lembrete_anual' && id) hash = `#lembrete=${encodeURIComponent(id)}`;
  else if (acao === 'fila_indicacao') hash = '#fila-indicacao';
  const urlDestino = './index.html' + hash;

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes('index.html') && 'focus' in client) {
          // App já aberto: manda a ordem por postMessage em vez de recarregar
          if (acao && acao !== 'teste' && 'postMessage' in client) {
            client.postMessage({ tipo: 'acao-notificacao', acao, assinaturaId: id });
          }
          return client.focus();
        }
      }
      // App fechado: abre com o hash, que o index.html lê quando terminar de carregar/logar
      if (self.clients.openWindow) return self.clients.openWindow(urlDestino);
    })
  );
});

// O iOS pode trocar/expirar a inscrição de push sem avisar. Aqui renovamos e
// pedimos ao painel (se estiver aberto) para salvar a nova inscrição; se não
// estiver, o painel sincroniza sozinho na próxima vez que for aberto.
self.addEventListener('pushsubscriptionchange', (event) => {
  event.waitUntil((async () => {
    try {
      const opcoes = (event.oldSubscription && event.oldSubscription.options) || {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY),
      };
      await self.registration.pushManager.subscribe(opcoes);
      const lista = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
      lista.forEach((c) => c.postMessage({ tipo: 'push-resincronizar' }));
    } catch (e) { /* a próxima abertura do painel resolve */ }
  })());
});
