<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dashboard Gestão de Clientes 2026</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#0d0d1a;--surface:#13132a;--card:#1a1a35;--border:#2a2a50;
  --gold:#f0c040;--gold2:#c89a20;
  --green:#3dd68c;--green-bg:#0d2a1c;
  --red:#ff5c5c;--red-bg:#2a0d0d;
  --blue:#5bb8ff;--blue-bg:#0d1e2a;
  --gray:#7070a0;--white:#e8e8ff;--text:#b0b0d0;
  --pago-fg:#3dd68c;--pago-bg:#0d2a1c;
  --cortesia-fg:#5bb8ff;--cortesia-bg:#0d1e2a;
  --atrasado-fg:#ff5c5c;--atrasado-bg:#2a0d0d;
  --pendente-fg:#f0c040;--pendente-bg:#2a200d;
  --vazio-bg:#111128;
  --r:10px;--rs:6px;
}
*{margin:0;padding:0;box-sizing:border-box;}
body{font-family:'JetBrains Mono',monospace;background:var(--bg);color:var(--white);min-height:100vh;}
body::before{content:'';position:fixed;inset:0;background-image:linear-gradient(rgba(240,192,64,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(240,192,64,.022) 1px,transparent 1px);background-size:44px 44px;pointer-events:none;z-index:0;}
.wrap{position:relative;z-index:1;padding:22px 26px;max-width:1700px;margin:0 auto;}

/* HEADER */
header{display:flex;align-items:center;justify-content:space-between;margin-bottom:22px;padding-bottom:16px;border-bottom:1px solid var(--border);}
.h1{font-family:'Syne',sans-serif;font-size:1.6rem;font-weight:800;color:var(--gold);letter-spacing:-.5px;}
.hsub{color:var(--gray);font-size:.7rem;margin-top:2px;}
.live{display:flex;align-items:center;gap:7px;background:var(--surface);border:1px solid var(--border);padding:7px 14px;border-radius:100px;font-size:.68rem;color:var(--green);}
.ldot{width:7px;height:7px;border-radius:50%;background:var(--green);animation:p 1.6s ease-in-out infinite;}
@keyframes p{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.3;transform:scale(.6)}}

/* TABS */
.tabs{display:flex;gap:4px;margin-bottom:20px;}
.tab{padding:9px 20px;border-radius:8px;cursor:pointer;font-family:'Syne',sans-serif;font-size:.82rem;font-weight:600;background:var(--surface);border:1px solid var(--border);color:var(--gray);transition:all .2s;}
.tab:hover{border-color:var(--gold2);color:var(--gold);}
.tab.active{background:var(--gold);color:#0d0d1a;border-color:var(--gold);}

/* KPI */
.kpi-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:13px;margin-bottom:20px;}
.kpi{background:var(--card);border:1px solid var(--border);border-radius:var(--r);padding:15px 17px;position:relative;overflow:hidden;transition:transform .2s,border-color .2s;}
.kpi:hover{transform:translateY(-2px);border-color:var(--gold2);}
.kpi::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;}
.kpi.gn::before{background:var(--green);}
.kpi.rd::before{background:var(--red);}
.kpi.gd::before{background:var(--gold);}
.kpi.bl::before{background:var(--blue);}
.kpi.pp::before{background:#a78bfa;}
.kl{font-size:.63rem;color:var(--gray);text-transform:uppercase;letter-spacing:1.2px;margin-bottom:6px;}
.kv{font-family:'Syne',sans-serif;font-size:1.38rem;font-weight:800;}
.kv.gn{color:var(--green);}.kv.rd{color:var(--red);}
.kv.gd{color:var(--gold);}.kv.bl{color:var(--blue);}.kv.pp{color:#a78bfa;}
.ks{font-size:.63rem;color:var(--gray);margin-top:5px;}
.ki{position:absolute;right:13px;top:13px;font-size:1.15rem;opacity:.22;}

/* CONTROLS */
.ctrl{display:flex;align-items:center;gap:10px;margin-bottom:16px;flex-wrap:wrap;}
.mlbl{font-size:.65rem;color:var(--gray);text-transform:uppercase;letter-spacing:1px;}
.pills{display:flex;gap:4px;flex-wrap:wrap;}
.pill{padding:5px 12px;border-radius:100px;cursor:pointer;font-size:.68rem;font-weight:600;background:var(--surface);border:1px solid var(--border);color:var(--gray);transition:all .2s;}
.pill:hover{border-color:var(--gold2);color:var(--gold);}
.pill.active{background:var(--gold);color:#0d0d1a;border-color:var(--gold);}
.cright{display:flex;align-items:center;gap:8px;margin-left:auto;flex-wrap:wrap;}
.sbox{background:var(--surface);border:1px solid var(--border);border-radius:var(--rs);padding:7px 12px;color:var(--white);font-family:'JetBrains Mono',monospace;font-size:.73rem;width:190px;outline:none;transition:border-color .2s;}
.sbox::placeholder{color:var(--gray);}
.sbox:focus{border-color:var(--gold2);}
.fsel{background:var(--surface);border:1px solid var(--border);border-radius:var(--rs);padding:7px 10px;color:var(--text);font-family:'JetBrains Mono',monospace;font-size:.71rem;cursor:pointer;outline:none;}
.badd{display:flex;align-items:center;gap:5px;padding:8px 15px;border-radius:var(--rs);background:var(--gold);color:#0d0d1a;border:none;cursor:pointer;font-family:'Syne',sans-serif;font-weight:700;font-size:.76rem;transition:all .2s;white-space:nowrap;}
.badd:hover{background:var(--gold2);}

/* TABLE */
.twrap{background:var(--card);border:1px solid var(--border);border-radius:var(--r);overflow:hidden;}
.thead2{display:flex;align-items:center;justify-content:space-between;padding:13px 17px;border-bottom:1px solid var(--border);background:var(--surface);}
.ttitle{font-family:'Syne',sans-serif;font-weight:700;font-size:.86rem;color:var(--gold);}
.tmeta{font-size:.66rem;color:var(--gray);}
.tbl{width:100%;border-collapse:collapse;}
.tbl th{padding:8px 12px;font-size:.63rem;text-transform:uppercase;letter-spacing:1px;color:var(--gray);background:var(--surface);border-bottom:1px solid var(--border);text-align:left;font-weight:600;}
.tbl th.r{text-align:right;}
.tbl td{padding:8px 12px;font-size:.77rem;border-bottom:1px solid rgba(42,42,80,.4);color:var(--text);vertical-align:middle;}
.tbl tr:last-child td{border-bottom:none;}
.tbl tr:hover td{background:rgba(240,192,64,.022);}
.tbl td.r{text-align:right;font-weight:600;color:var(--gold);}
.tbl td.gr{color:var(--gray);font-size:.68rem;}
.tbl td.nm{font-weight:600;color:var(--white);}

/* STATUS SELECT */
.ssel{appearance:none;-webkit-appearance:none;border:1px solid var(--border);border-radius:var(--rs);padding:5px 26px 5px 9px;font-size:.7rem;font-family:'JetBrains Mono',monospace;font-weight:600;cursor:pointer;outline:none;width:118px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%237070a0'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 7px center;transition:border-color .2s;}
.ssel:hover{border-color:var(--gold2);}
.ssel:focus{border-color:var(--gold);}
.ssel.pago{background-color:var(--pago-bg);color:var(--pago-fg);}
.ssel.cortesia{background-color:var(--cortesia-bg);color:var(--cortesia-fg);}
.ssel.atrasado{background-color:var(--atrasado-bg);color:var(--atrasado-fg);}
.ssel.pendente{background-color:var(--pendente-bg);color:var(--pendente-fg);}
.ssel.vazio{background-color:var(--vazio-bg);color:var(--gray);}

/* ACTION BUTTONS */
.ab{display:inline-flex;align-items:center;justify-content:center;width:29px;height:29px;border-radius:var(--rs);border:1px solid var(--border);background:var(--surface);cursor:pointer;transition:all .2s;text-decoration:none;font-size:.85rem;}
.ab.w{color:#25d366;border-color:#25d36625;}
.ab.w:hover{background:#0d2a1c;border-color:#25d366;}
.ab.e{color:var(--blue);}
.ab.e:hover{background:var(--blue-bg);border-color:var(--blue);}
.ab.d{color:var(--red);}
.ab.d:hover{background:var(--red-bg);border-color:var(--red);}

/* FOOT */
.tbl tr.fr td{font-family:'Syne',sans-serif;font-weight:700;font-size:.78rem;border-top:2px solid var(--border);background:var(--surface);border-bottom:none;padding:11px 12px;}
.tbl tr.fr td.lb{color:var(--gold);}
.tbl tr.fr td.vg{color:var(--green);text-align:right;font-size:.86rem;}
.tbl tr.fr td.vr{color:var(--red);text-align:right;font-size:.86rem;}

/* CHART */
.csec{margin-top:22px;}
.ctitle{font-family:'Syne',sans-serif;font-weight:700;color:var(--gold);font-size:.86rem;margin-bottom:10px;}
.bchart{display:flex;gap:7px;align-items:flex-end;height:105px;padding:0 2px;}
.bcol{display:flex;flex-direction:column;align-items:center;gap:5px;flex:1;cursor:pointer;}
.bwrap{width:100%;display:flex;flex-direction:column;justify-content:flex-end;height:78px;gap:2px;}
.bar{width:100%;border-radius:3px 3px 0 0;transition:height .4s cubic-bezier(.4,0,.2,1);min-height:2px;}
.bar.pg{background:linear-gradient(180deg,var(--green),#1a7050);}
.bar.pd{background:linear-gradient(180deg,var(--red),#701a1a);}
.blbl{font-size:.58rem;color:var(--gray);text-align:center;white-space:nowrap;}

/* MODAL */
.mover{display:none;position:fixed;inset:0;background:rgba(0,0,0,.78);z-index:999;align-items:center;justify-content:center;}
.mover.open{display:flex;}
.modal{background:var(--card);border:1px solid var(--border);border-radius:14px;width:510px;max-width:96vw;max-height:92vh;overflow-y:auto;animation:su .22s ease;}
@keyframes su{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
.mh{display:flex;align-items:center;justify-content:space-between;padding:18px 22px 14px;border-bottom:1px solid var(--border);}
.mh h2{font-family:'Syne',sans-serif;font-size:.96rem;font-weight:700;color:var(--gold);}
.mcl{width:28px;height:28px;border-radius:var(--rs);border:1px solid var(--border);background:var(--surface);color:var(--gray);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:.9rem;transition:all .2s;}
.mcl:hover{color:var(--red);border-color:var(--red);}
.mb{padding:18px 22px;}
.fr{margin-bottom:14px;}
.fr label{display:block;font-size:.65rem;color:var(--gray);text-transform:uppercase;letter-spacing:1px;margin-bottom:5px;}
.fr input,.fr select{width:100%;background:var(--surface);border:1px solid var(--border);border-radius:var(--rs);padding:8px 11px;color:var(--white);font-family:'JetBrains Mono',monospace;font-size:.78rem;outline:none;transition:border-color .2s;}
.fr input:focus,.fr select:focus{border-color:var(--gold2);}
.fr input::placeholder{color:var(--gray);}
.fr select option{background:var(--card);}
.fgrid{display:grid;grid-template-columns:1fr 1fr;gap:11px;}
.mf{padding:14px 22px;border-top:1px solid var(--border);display:flex;gap:9px;justify-content:flex-end;}
.bcan{padding:8px 16px;border-radius:var(--rs);background:var(--surface);border:1px solid var(--border);color:var(--gray);font-family:'Syne',sans-serif;font-weight:600;font-size:.76rem;cursor:pointer;transition:all .2s;}
.bcan:hover{border-color:var(--gray);color:var(--white);}
.bsv{padding:8px 18px;border-radius:var(--rs);background:var(--gold);border:none;color:#0d0d1a;font-family:'Syne',sans-serif;font-weight:700;font-size:.76rem;cursor:pointer;transition:all .2s;}
.bsv:hover{background:var(--gold2);}

/* CONFIRM */
.conf{background:var(--card);border:1px solid #6d1a1a;border-radius:14px;width:370px;max-width:94vw;padding:26px;text-align:center;animation:su .2s ease;}
.conf h3{font-family:'Syne',sans-serif;color:var(--red);font-size:.92rem;margin-bottom:9px;}
.conf p{color:var(--gray);font-size:.76rem;margin-bottom:20px;line-height:1.6;}
.cbtns{display:flex;gap:9px;justify-content:center;}
.bdng{padding:8px 18px;border-radius:var(--rs);background:var(--red-bg);border:1px solid var(--red);color:var(--red);font-family:'Syne',sans-serif;font-weight:700;font-size:.76rem;cursor:pointer;transition:all .2s;}
.bdng:hover{background:var(--red);color:#fff;}

/* TOAST */
.toast{position:fixed;bottom:26px;right:26px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:11px 16px;font-size:.75rem;color:var(--white);z-index:2000;transform:translateY(70px);opacity:0;transition:all .28s;display:flex;align-items:center;gap:7px;}
.toast.show{transform:translateY(0);opacity:1;}
.toast.s{border-color:var(--green);}
.toast.e{border-color:var(--red);}

/* EMPTY */
.empty{padding:36px;text-align:center;color:var(--gray);font-size:.78rem;}
.tc{display:none;}.tc.active{display:block;}

@media(max-width:1100px){.kpi-grid{grid-template-columns:repeat(3,1fr);}}
@media(max-width:720px){.kpi-grid{grid-template-columns:repeat(2,1fr);}.ctrl{flex-direction:column;align-items:flex-start;}.cright{width:100%;}}
</style>
</head>
<body>
<div class="wrap">

<header>
  <div>
    <div class="h1">🎯 Gestão de Clientes 2026</div>
    <div class="hsub">Dashboard de acompanhamento • Dados salvos localmente</div>
  </div>
  <div class="live"><div class="ldot"></div>TEMPO REAL</div>
</header>

<div class="tabs">
  <div class="tab active" onclick="switchTab('m')">📋 Clientes Mensais</div>
  <div class="tab" onclick="switchTab('a')">📅 Clientes Anuais</div>
</div>

<!-- ══ MENSAL ══ -->
<div class="tc active" id="tc-m">
  <div class="kpi-grid">
    <div class="kpi gn"><div class="kl">Total Pago</div><div class="kv gn" id="m-pago">R$ 0</div><div class="ks" id="m-pago-c">0 clientes</div><div class="ki">✅</div></div>
    <div class="kpi rd"><div class="kl">Pendente / Atrasado</div><div class="kv rd" id="m-pend">R$ 0</div><div class="ks" id="m-pend-c">0 clientes</div><div class="ki">⏳</div></div>
    <div class="kpi bl"><div class="kl">Cortesias</div><div class="kv bl" id="m-cort">0</div><div class="ks" id="m-cort-v">R$ 0</div><div class="ki">🎁</div></div>
    <div class="kpi gd"><div class="kl">Clientes Ativos</div><div class="kv gd" id="m-tot">0</div><div class="ks">Potencial: <span id="m-pot">R$ 0</span></div><div class="ki">👥</div></div>
    <div class="kpi pp"><div class="kl">Taxa de Pagamento</div><div class="kv pp" id="m-taxa">0%</div><div class="ks">no mês selecionado</div><div class="ki">📈</div></div>
  </div>
  <div class="ctrl">
    <span class="mlbl">Mês:</span>
    <div class="pills" id="pills-m"></div>
    <div class="cright">
      <input class="sbox" id="q-m" placeholder="🔍 Buscar cliente..." oninput="rend('m')">
      <select class="fsel" id="f-m" onchange="rend('m')">
        <option value="all">Todos os status</option>
        <option value="Pago">✅ Pago</option>
        <option value="Cortesia">🎁 Cortesia</option>
        <option value="Atrasado">⚠️ Atrasado</option>
        <option value="Pendente">⏳ Pendente</option>
        <option value="">— Sem status</option>
      </select>
      <button class="badd" onclick="openAdd('m')">➕ Novo Cliente</button>
    </div>
  </div>
  <div class="twrap">
    <div class="thead2">
      <div class="ttitle">📋 Clientes Mensais</div>
      <div class="tmeta" id="meta-m"></div>
    </div>
    <div style="overflow-x:auto">
      <table class="tbl">
        <thead><tr>
          <th>#</th><th>Cliente</th><th>Telefone</th>
          <th class="r">Vencimento</th><th class="r">Mensalidade</th>
          <th>Status</th><th style="text-align:center;width:110px">Ações</th>
        </tr></thead>
        <tbody id="tb-m"></tbody>
        <tfoot>
          <tr class="fr"><td colspan="4" class="lb">TOTAL PAGO</td><td></td><td class="vg" id="mfp">R$ 0</td><td></td></tr>
          <tr class="fr"><td colspan="4" class="lb" style="color:var(--red)">TOTAL PENDENTE</td><td></td><td class="vr" id="mfr">R$ 0</td><td></td></tr>
        </tfoot>
      </table>
    </div>
  </div>
  <div class="csec">
    <div class="ctitle">📊 Visão por Mês</div>
    <div class="bchart" id="bc-m"></div>
  </div>
</div>

<!-- ══ ANUAL ══ -->
<div class="tc" id="tc-a">
  <div class="kpi-grid">
    <div class="kpi gn"><div class="kl">Total Pago</div><div class="kv gn" id="a-pago">R$ 0</div><div class="ks" id="a-pago-c">0 clientes</div><div class="ki">✅</div></div>
    <div class="kpi rd"><div class="kl">Pendente / Atrasado</div><div class="kv rd" id="a-pend">R$ 0</div><div class="ks" id="a-pend-c">0 clientes</div><div class="ki">⏳</div></div>
    <div class="kpi bl"><div class="kl">Cortesias</div><div class="kv bl" id="a-cort">0</div><div class="ks" id="a-cort-v">R$ 0</div><div class="ki">🎁</div></div>
    <div class="kpi gd"><div class="kl">Clientes Ativos</div><div class="kv gd" id="a-tot">0</div><div class="ks">Potencial: <span id="a-pot">R$ 0</span></div><div class="ki">👥</div></div>
    <div class="kpi pp"><div class="kl">Taxa de Pagamento</div><div class="kv pp" id="a-taxa">0%</div><div class="ks">no mês selecionado</div><div class="ki">📈</div></div>
  </div>
  <div class="ctrl">
    <span class="mlbl">Mês:</span>
    <div class="pills" id="pills-a"></div>
    <div class="cright">
      <input class="sbox" id="q-a" placeholder="🔍 Buscar cliente..." oninput="rend('a')">
      <select class="fsel" id="f-a" onchange="rend('a')">
        <option value="all">Todos os status</option>
        <option value="Pago">✅ Pago</option>
        <option value="Cortesia">🎁 Cortesia</option>
        <option value="Atrasado">⚠️ Atrasado</option>
        <option value="Pendente">⏳ Pendente</option>
        <option value="">— Sem status</option>
      </select>
      <button class="badd" onclick="openAdd('a')">➕ Novo Cliente</button>
    </div>
  </div>
  <div class="twrap">
    <div class="thead2">
      <div class="ttitle">📅 Clientes Anuais</div>
      <div class="tmeta" id="meta-a"></div>
    </div>
    <div style="overflow-x:auto">
      <table class="tbl">
        <thead><tr>
          <th>#</th><th>Cliente</th><th>Telefone</th>
          <th>Vencimento</th><th class="r">Valor Anual</th>
          <th>Status</th><th style="text-align:center;width:110px">Ações</th>
        </tr></thead>
        <tbody id="tb-a"></tbody>
        <tfoot>
          <tr class="fr"><td colspan="4" class="lb">TOTAL PAGO</td><td></td><td class="vg" id="afp">R$ 0</td><td></td></tr>
          <tr class="fr"><td colspan="4" class="lb" style="color:var(--red)">TOTAL PENDENTE</td><td></td><td class="vr" id="afr">R$ 0</td><td></td></tr>
        </tfoot>
      </table>
    </div>
  </div>
  <div class="csec">
    <div class="ctitle">📊 Visão por Mês</div>
    <div class="bchart" id="bc-a"></div>
  </div>
</div>

</div><!-- /wrap -->

<!-- MODAL ADD/EDIT -->
<div class="mover" id="mov">
  <div class="modal">
    <div class="mh">
      <h2 id="mtitle">Novo Cliente</h2>
      <button class="mcl" onclick="closeMod()">✕</button>
    </div>
    <div class="mb">
      <input type="hidden" id="fi-key">
      <input type="hidden" id="fi-idx" value="-1">
      <div class="fr">
        <label>Nome Completo *</label>
        <input id="fi-nome" placeholder="Ex: João da Silva" maxlength="60">
      </div>
      <div class="fgrid">
        <div class="fr">
          <label>Telefone (WhatsApp)</label>
          <input id="fi-tel" placeholder="5521999999999" maxlength="20" title="Código do país + DDD + número. Ex: 5521999999999">
        </div>
        <div class="fr">
          <label id="fi-vl">Dia de Vencimento *</label>
          <input id="fi-venc" placeholder="Ex: 15">
        </div>
      </div>
      <div class="fgrid">
        <div class="fr">
          <label id="fi-varl">Mensalidade (R$) *</label>
          <input id="fi-valor" placeholder="20.00" type="number" min="0" step="0.01">
        </div>
        <div class="fr">
          <label>Tipo de Plano</label>
          <select id="fi-plano">
            <option value="m">Mensal</option>
            <option value="a">Anual</option>
          </select>
        </div>
      </div>
      <div class="fr">
        <label>Observação</label>
        <input id="fi-obs" placeholder="Anotação opcional..." maxlength="100">
      </div>
    </div>
    <div class="mf">
      <button class="bcan" onclick="closeMod()">Cancelar</button>
      <button class="bsv" onclick="saveC()">💾 Salvar</button>
    </div>
  </div>
</div>

<!-- CONFIRM DELETE -->
<div class="mover" id="cov">
  <div class="conf">
    <h3>⚠️ Remover Cliente</h3>
    <p id="cmsg">Tem certeza?</p>
    <div class="cbtns">
      <button class="bcan" onclick="closeCon()">Cancelar</button>
      <button class="bdng" onclick="delC()">🗑️ Remover</button>
    </div>
  </div>
</div>

<div class="toast" id="toast"></div>

<script>
const MO=['Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const SK='gcv4';

const DM=[
  {nome:"Adriely",venc:3,valor:35,tel:"",obs:""},{nome:"Crisan Santos",venc:3,valor:20,tel:"",obs:""},
  {nome:"Daniele",venc:5,valor:35,tel:"",obs:""},{nome:"Diego Petz",venc:6,valor:20,tel:"",obs:""},
  {nome:"Suellen",venc:10,valor:20,tel:"",obs:""},{nome:"Dinho",venc:10,valor:20,tel:"",obs:""},
  {nome:"Robson Moreira",venc:11,valor:35,tel:"",obs:""},{nome:"Edison Fonseca",venc:11,valor:20,tel:"",obs:""},
  {nome:"Ney",venc:14,valor:20,tel:"",obs:""},{nome:"Anderson de Oliveira",venc:15,valor:20,tel:"",obs:""},
  {nome:"Arileide",venc:15,valor:20,tel:"",obs:""},{nome:"Viviane",venc:15,valor:35,tel:"",obs:""},
  {nome:"Genivaldo",venc:15,valor:35,tel:"",obs:""},{nome:"Sogro Genivaldo",venc:15,valor:20,tel:"",obs:""},
  {nome:"Roselene Santos",venc:16,valor:20,tel:"",obs:""},{nome:"Alexandre Lecão",venc:17,valor:20,tel:"",obs:""},
  {nome:"Kelly",venc:20,valor:20,tel:"",obs:""},{nome:"Denis",venc:20,valor:20,tel:"",obs:""},
  {nome:"Caroline Ribeiro",venc:21,valor:20,tel:"",obs:""},{nome:"Anderson",venc:22,valor:20,tel:"",obs:""},
  {nome:"Patricia Silva",venc:24,valor:20,tel:"",obs:""},{nome:"Jesuino",venc:24,valor:20,tel:"",obs:""},
  {nome:"Thiago Personal",venc:24,valor:20,tel:"",obs:""},{nome:"Milena",venc:25,valor:20,tel:"",obs:""},
  {nome:"Leo SJM",venc:26,valor:20,tel:"",obs:""},{nome:"Diego",venc:26,valor:20,tel:"",obs:""},
  {nome:"Jaque",venc:28,valor:20,tel:"",obs:""},{nome:"Driele",venc:30,valor:20,tel:"",obs:""},
  {nome:"Andrielen",venc:30,valor:20,tel:"",obs:""},{nome:"Iris Santos",venc:31,valor:20,tel:"",obs:""}
];
const ISM=["Pago","Cortesia","Pago","Pago","Pago","Pago","Pago","Pago","Cortesia","Pago","Pago","Cortesia","Cortesia","Pago","Pago","Atrasado","Pago","Cortesia","Cortesia","Pago","Pago","Pago","Cortesia","Cortesia","Pago","Pago","Pago","","",""];

const DA=[
  {nome:"Isaias Conceição",venc:"10/03/2026",valor:120,tel:"",obs:""},{nome:"Ana Paula",venc:"10/03/2026",valor:120,tel:"",obs:""},
  {nome:"Vander",venc:"10/04/2026",valor:99.9,tel:"",obs:""},{nome:"João",venc:"01/06/2026",valor:99.9,tel:"",obs:""},
  {nome:"Lula Top Sports",venc:"01/07/2026",valor:99.9,tel:"",obs:""},{nome:"Odailton Nunes",venc:"10/07/2026",valor:100,tel:"",obs:""},
  {nome:"Victor C",venc:"16/07/2026",valor:100,tel:"",obs:""},{nome:"Fernando Frick",venc:"24/07/2026",valor:100,tel:"",obs:""},
  {nome:"André Ribeiro",venc:"07/08/2026",valor:99.9,tel:"",obs:""},{nome:"Luciana",venc:"16/08/2026",valor:100,tel:"",obs:""},
  {nome:"Transporte CF",venc:"18/08/2026",valor:100,tel:"",obs:""},{nome:"Eduardo Luis",venc:"20/08/2026",valor:100,tel:"",obs:""},
  {nome:"Alexasander Silva",venc:"05/09/2026",valor:100,tel:"",obs:""},{nome:"Anderson IPTV",venc:"07/09/2026",valor:140,tel:"",obs:""},
  {nome:"Ana Lucia",venc:"09/09/2026",valor:100,tel:"",obs:""},{nome:"Gabriel Santos",venc:"09/09/2026",valor:100,tel:"",obs:""},
  {nome:"Marcio",venc:"09/09/2026",valor:100,tel:"",obs:""},{nome:"Nathali",venc:"30/09/2026",valor:70,tel:"",obs:""},
  {nome:"Vania Lomenio",venc:"17/10/2026",valor:100,tel:"",obs:""},{nome:"Rodrigo Soares",venc:"08/11/2026",valor:100,tel:"",obs:""},
  {nome:"Priscila Freitas",venc:"11/11/2026",valor:80,tel:"",obs:""},{nome:"Mariano",venc:"11/11/2026",valor:100,tel:"",obs:""},
  {nome:"Wallace Ferreira",venc:"11/11/2026",valor:100,tel:"",obs:""},{nome:"Silvecia",venc:"12/11/2026",valor:100,tel:"",obs:""},
  {nome:"Jailton",venc:"13/11/2026",valor:100,tel:"",obs:""},{nome:"Marta Roberta",venc:"28/11/2026",valor:120,tel:"",obs:""},
  {nome:"Tchaime",venc:"06/12/2026",valor:100,tel:"",obs:""},{nome:"Scott Oliver",venc:"21/12/2026",valor:100,tel:"",obs:""},
  {nome:"João Oliveira Viz",venc:"30/12/2026",valor:100,tel:"",obs:""},{nome:"Caio IPTV",venc:"15/01/2027",valor:100,tel:"",obs:""},
  {nome:"Rodrigo Dos Santos",venc:"14/02/2027",valor:100,tel:"",obs:""},{nome:"Rafale Angelo",venc:"05/03/2027",valor:100,tel:"",obs:""},
  {nome:"Dai",venc:"06/03/2027",valor:100,tel:"",obs:""},{nome:"Ellen",venc:"09/03/2027",valor:100,tel:"",obs:""},
  {nome:"Cláudio Cassiano",venc:"09/09/2026",valor:100,tel:"",obs:""}
];
const ISA=["","","Pago","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

function defState(){
  return{
    m:{clients:DM.map(c=>({...c})),sts:MO.map((_,i)=>DM.map((_,ci)=>i===0?ISM[ci]:""))},
    a:{clients:DA.map(c=>({...c})),sts:MO.map((_,i)=>DA.map((_,ci)=>i===0?ISA[ci]:""))}
  };
}
let S=loadS();
let CM={m:0,a:0};
let PD=null;

function loadS(){
  try{const s=localStorage.getItem(SK);if(s)return JSON.parse(s);}catch(e){}
  return defState();
}
function saveS(){localStorage.setItem(SK,JSON.stringify(S));}

const fR=v=>'R$ '+Number(v).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
function sCls(v){
  if(v==="Pago")return"pago";if(v==="Cortesia")return"cortesia";
  if(v==="Atrasado")return"atrasado";if(v==="Pendente")return"pendente";
  return"vazio";
}

function wppTxt(k,c,st){
  const tipo=k==='m'?'mensalidade':'plano anual';
  const val=fR(c.valor);
  const v=k==='m'?`dia ${String(c.venc).padStart(2,'0')}`:c.venc;
  const nm=c.nome.split(' ')[0];
  if(st==="Atrasado")
    return`Olá ${nm}! 👋\n\nPassando para avisar que sua ${tipo} no valor de *${val}* está em atraso (venc: ${v}).\n\nPodem regularizar quando possível? Qualquer dúvida, só chamar! 😊`;
  return`Olá ${nm}! 👋\n\nPassando para lembrar que sua ${tipo} no valor de *${val}* vence em *${v}*.\n\nQualquer dúvida, estou à disposição! 😊`;
}

function rend(k){
  const mi=CM[k];
  const cl=S[k].clients;
  const sts=S[k].sts[mi];
  const q=document.getElementById(`q-${k}`).value.trim().toLowerCase();
  const f=document.getElementById(`f-${k}`).value;

  const rows=cl.map((c,ci)=>({c,ci,st:sts[ci]||""})).filter(({c,st})=>{
    if(q&&!c.nome.toLowerCase().includes(q))return false;
    if(f==='all')return true;
    return st===f;
  });

  const tb=document.getElementById(`tb-${k}`);
  tb.innerHTML='';
  if(!rows.length){
    tb.innerHTML=`<tr><td colspan="7" class="empty">Nenhum cliente encontrado.</td></tr>`;
  }else{
    rows.forEach(({c,ci,st})=>{
      const cls=sCls(st);
      const tn=c.tel?c.tel.replace(/\D/g,''):'';
      const wmsg=encodeURIComponent(wppTxt(k,c,st));
      const wh=tn?`https://wa.me/${tn}?text=${wmsg}`:'#';
      const ws=tn?'':'opacity:.3;cursor:not-allowed;pointer-events:none;';
      const wt=tn?'Cobrar via WhatsApp':'Adicione o telefone para usar o WhatsApp';
      const vs=k==='m'?`Dia ${String(c.venc).padStart(2,'0')}`:c.venc;

      const tr=document.createElement('tr');
      tr.innerHTML=`
        <td class="gr">${ci+1}</td>
        <td class="nm">${c.nome}${c.obs?`<br><span style="font-size:.62rem;color:var(--gray);font-weight:400">${c.obs}</span>`:''}</td>
        <td class="gr">${c.tel||'<span style="color:var(--border)">—</span>'}</td>
        <td class="${k==='m'?'r':'gr'}">${vs}</td>
        <td class="r">${fR(c.valor)}</td>
        <td>
          <select class="ssel ${cls}" data-k="${k}" data-ci="${ci}" data-mi="${mi}">
            <option value="" ${st===''?'selected':''}>— Sem status</option>
            <option value="Pago" ${st==='Pago'?'selected':''}>✅ Pago</option>
            <option value="Cortesia" ${st==='Cortesia'?'selected':''}>🎁 Cortesia</option>
            <option value="Atrasado" ${st==='Atrasado'?'selected':''}>⚠️ Atrasado</option>
            <option value="Pendente" ${st==='Pendente'?'selected':''}>⏳ Pendente</option>
          </select>
        </td>
        <td style="text-align:center;white-space:nowrap">
          <a class="ab w" href="${wh}" target="_blank" title="${wt}" style="${ws}">💬</a>
          <button class="ab e" onclick="openEdit('${k}',${ci})" title="Editar cliente">✏️</button>
          <button class="ab d" onclick="askDel('${k}',${ci})" title="Remover cliente">🗑️</button>
        </td>`;
      tb.appendChild(tr);

      tr.querySelector('select').addEventListener('change',function(){
        S[this.dataset.k].sts[+this.dataset.mi][+this.dataset.ci]=this.value;
        this.className='ssel '+sCls(this.value);
        saveS();kpis(k);chart(k);
        toast('Status atualizado','s');
      });
    });
  }

  document.getElementById(`meta-${k}`).textContent=`${cl.length} clientes · ${MO[mi]}`;
  kpis(k);chart(k);
}

function kpis(k){
  const mi=CM[k];
  const cl=S[k].clients;
  const sts=S[k].sts[mi];
  let pg=0,cpg=0,pd=0,cpd=0,ct=0,cct=0,pot=0;
  cl.forEach((c,ci)=>{
    pot+=+c.valor;
    const st=sts[ci]||"";
    if(st==="Pago"){pg+=+c.valor;cpg++;}
    else if(st==="Cortesia"){ct+=+c.valor;cct++;}
    else{pd+=+c.valor;cpd++;}
  });
  const tx=cl.length?Math.round(cpg/cl.length*100):0;
  set(`${k}-pago`,fR(pg));set(`${k}-pago-c`,`${cpg} cliente${cpg!==1?'s':''}`);
  set(`${k}-pend`,fR(pd));set(`${k}-pend-c`,`${cpd} cliente${cpd!==1?'s':''}`);
  set(`${k}-cort`,cct);set(`${k}-cort-v`,fR(ct)+' descontados');
  set(`${k}-tot`,cl.length);set(`${k}-pot`,fR(pot));
  set(`${k}-taxa`,tx+'%');
  set(k==='m'?'mfp':'afp',fR(pg));
  set(k==='m'?'mfr':'afr',fR(pd));
}

function chart(k){
  const el=document.getElementById(`bc-${k}`);
  el.innerHTML='';
  const cl=S[k].clients;
  const mi=CM[k];
  const tots=MO.map((_,i)=>{
    let pg=0,pd=0;
    cl.forEach((c,ci)=>{
      const st=S[k].sts[i][ci]||"";
      if(st==="Pago")pg+=+c.valor;
      else if(st!=="Cortesia")pd+=+c.valor;
    });
    return{pg,pd};
  });
  const mx=Math.max(...tots.map(t=>t.pg+t.pd),1);
  MO.forEach((m,i)=>{
    const{pg,pd}=tots[i];
    const ph=Math.max((pg/mx)*70,pg>0?2:0);
    const rh=Math.max((pd/mx)*70,pd>0?2:0);
    const col=document.createElement('div');
    col.className='bcol';col.style.opacity=i===mi?'1':'0.42';
    col.title=`${m}: Pago ${fR(pg)} | Pendente ${fR(pd)}`;
    col.innerHTML=`<div class="bwrap"><div class="bar pd" style="height:${rh}px"></div><div class="bar pg" style="height:${ph}px"></div></div><div class="blbl">${m.slice(0,3)}</div>`;
    col.onclick=()=>{CM[k]=i;buildPills(k);rend(k);};
    el.appendChild(col);
  });
}

function buildPills(k){
  const el=document.getElementById(`pills-${k}`);
  el.innerHTML='';
  MO.forEach((m,i)=>{
    const p=document.createElement('div');
    p.className='pill'+(i===CM[k]?' active':'');
    p.textContent=m;
    p.onclick=()=>{CM[k]=i;buildPills(k);rend(k);};
    el.appendChild(p);
  });
}

function switchTab(k){
  document.querySelectorAll('.tab').forEach((t,i)=>t.classList.toggle('active',(i===0&&k==='m')||(i===1&&k==='a')));
  document.getElementById('tc-m').classList.toggle('active',k==='m');
  document.getElementById('tc-a').classList.toggle('active',k==='a');
}

/* MODAL */
function openAdd(k){
  document.getElementById('fi-key').value=k;
  document.getElementById('fi-idx').value=-1;
  document.getElementById('mtitle').textContent='➕ Novo Cliente — '+(k==='m'?'Mensal':'Anual');
  ['fi-nome','fi-tel','fi-venc','fi-obs'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('fi-valor').value='';
  document.getElementById('fi-plano').value=k;
  document.getElementById('fi-vl').textContent=k==='a'?'Data de Vencimento *':'Dia de Vencimento *';
  document.getElementById('fi-venc').placeholder=k==='a'?'Ex: 10/04/2026':'Ex: 15';
  document.getElementById('fi-varl').textContent=k==='a'?'Valor Anual (R$) *':'Mensalidade (R$) *';
  document.getElementById('mov').classList.add('open');
  setTimeout(()=>document.getElementById('fi-nome').focus(),120);
}

function openEdit(k,ci){
  const c=S[k].clients[ci];
  document.getElementById('fi-key').value=k;
  document.getElementById('fi-idx').value=ci;
  document.getElementById('mtitle').textContent='✏️ Editar Cliente';
  document.getElementById('fi-nome').value=c.nome;
  document.getElementById('fi-tel').value=c.tel||'';
  document.getElementById('fi-venc').value=c.venc;
  document.getElementById('fi-valor').value=c.valor;
  document.getElementById('fi-obs').value=c.obs||'';
  document.getElementById('fi-plano').value=k;
  document.getElementById('fi-vl').textContent=k==='a'?'Data de Vencimento':'Dia de Vencimento';
  document.getElementById('fi-venc').placeholder=k==='a'?'Ex: 10/04/2026':'Ex: 15';
  document.getElementById('fi-varl').textContent=k==='a'?'Valor Anual (R$)':'Mensalidade (R$)';
  document.getElementById('mov').classList.add('open');
  setTimeout(()=>document.getElementById('fi-nome').focus(),120);
}

function closeMod(){document.getElementById('mov').classList.remove('open');}

function saveC(){
  const k=document.getElementById('fi-key').value;
  const idx=+document.getElementById('fi-idx').value;
  const nome=document.getElementById('fi-nome').value.trim();
  const tel=document.getElementById('fi-tel').value.trim();
  const venc=document.getElementById('fi-venc').value.trim();
  const valor=parseFloat(document.getElementById('fi-valor').value);
  const obs=document.getElementById('fi-obs').value.trim();
  const dk=document.getElementById('fi-plano').value;

  if(!nome){toast('Nome obrigatório','e');return;}
  if(!venc){toast('Vencimento obrigatório','e');return;}
  if(isNaN(valor)||valor<=0){toast('Valor inválido','e');return;}

  const nc={nome,tel,venc:k==='m'&&idx===-1?+venc:k==='a'&&idx===-1?venc:k==='m'?+venc:venc,valor,obs};

  if(idx===-1){
    S[dk].clients.push(nc);
    S[dk].sts.forEach(m=>m.push(""));
    toast(`${nome} adicionado!`,'s');
  }else{
    S[k].clients[idx]={...S[k].clients[idx],...nc};
    toast(`${nome} atualizado!`,'s');
  }
  saveS();closeMod();
  buildPills('m');buildPills('a');
  rend('m');rend('a');
}

/* DELETE */
function askDel(k,ci){
  PD={k,ci};
  const nm=S[k].clients[ci].nome;
  document.getElementById('cmsg').innerHTML=`Deseja remover <strong style="color:var(--white)">${nm}</strong>?<br><span style="color:var(--gray);font-size:.72rem">Esta ação não pode ser desfeita.</span>`;
  document.getElementById('cov').classList.add('open');
}
function closeCon(){document.getElementById('cov').classList.remove('open');PD=null;}
function delC(){
  if(!PD)return;
  const{k,ci}=PD;
  const nm=S[k].clients[ci].nome;
  S[k].clients.splice(ci,1);
  S[k].sts.forEach(m=>m.splice(ci,1));
  saveS();closeCon();
  rend('m');rend('a');
  toast(`${nm} removido`,'e');
}

/* TOAST */
let TT=null;
function toast(msg,t='s'){
  const el=document.getElementById('toast');
  el.textContent=(t==='s'?'✅ ':'❌ ')+msg;
  el.className='toast show '+t;
  clearTimeout(TT);TT=setTimeout(()=>el.classList.remove('show'),2800);
}

function set(id,v){const el=document.getElementById(id);if(el)el.textContent=v;}

/* CLOSE ON BG CLICK */
document.getElementById('mov').addEventListener('click',function(e){if(e.target===this)closeMod();});
document.getElementById('cov').addEventListener('click',function(e){if(e.target===this)closeCon();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMod();closeCon();}});

/* INIT */
buildPills('m');buildPills('a');
rend('m');rend('a');
</script>
</body>
</html>
