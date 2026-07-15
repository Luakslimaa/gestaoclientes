// Service Worker do Painel Divert Flix
// Responsável por receber push notifications e, ao clicar, abrir a cobrança
// via WhatsApp da mesma forma que o botão "💬 Cobrar via WhatsApp" do painel.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
  let data = { title: 'Divert Flix', body: 'Você tem uma nova notificação.', url: './index.html' };
  try {
    if (event.data) data = { ...data, ...event.data.json() };
  } catch (e) {
    if (event.data) data.body = event.data.text();
  }

  // Uma notificação por assinatura, identificada por tipo+id, para não
  // empilhar avisos repetidos do mesmo cliente (a 2ª chamada substitui a 1ª).
  const tag = data.assinaturaId ? `${data.tipo || 'push'}-${data.assinaturaId}` : undefined;

  const options = {
    body: data.body,
    icon: 'icon-192.png',
    badge: 'icon-192.png',
    data: data, // guarda tudo (url, assinaturaId, tipo) para usar no clique
    vibrate: data.urgente ? [150, 80, 150, 80, 150] : [100, 50, 100],
    tag,
    renotify: !!tag,
    requireInteraction: !!data.urgente, // atraso de 3 dias fica na tela até o usuário agir
  };

  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const data = event.notification.data || {};
  const assinaturaId = data.assinaturaId || null;
  const urlDestino = assinaturaId ? `./index.html#cobrar=${assinaturaId}` : (data.url || './index.html');

  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes('index.html') && 'focus' in client) {
          // App já está aberto: manda a ordem direto por postMessage em vez
          // de recarregar a página.
          if (assinaturaId && 'postMessage' in client) {
            client.postMessage({ tipo: 'cobrar-whatsapp', assinaturaId });
          }
          return client.focus();
        }
      }
      // App fechado: abre com o hash #cobrar=ID, que o index.html lê assim
      // que terminar de carregar/logar e dispara a cobrança automaticamente.
      if (self.clients.openWindow) return self.clients.openWindow(urlDestino);
    })
  );
});
