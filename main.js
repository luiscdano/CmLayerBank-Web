var ia=Object.defineProperty;var na=(a,e)=>()=>(a&&(e=a(a=0)),e);var ca=(a,e)=>{for(var s in e)ia(a,s,{get:e[s],enumerable:!0})};var X={};ca(X,{LoginPage:()=>ua});var ua,aa=na(()=>{ua=()=>`
  <section class="grid two hero">
    <div>
      <p class="eyebrow">Acceso privado</p>
      <h1>Ingreso seguro CmLayerBank</h1>
      <p class="subhead">Solo administrador seed. El registro p\xFAblico est\xE1 bloqueado.</p>
      <div class="chips">
        <button class="chip primary" data-view="landing">Volver a la landing</button>
      </div>
    </div>
    <form class="card form" id="login-form">
      <p class="tag">Log In</p>
      <label>Email
        <input type="email" name="email" placeholder="tu@email.com" required />
      </label>
      <label>Contrase\xF1a
        <input type="password" name="password" placeholder="********" required />
      </label>
      <button class="btn primary" type="submit">Continuar</button>
      <p class="muted">Usa las credenciales provistas al owner.</p>
    </form>
  </section>
`});var T=({nav:a,content:e,actions:s="",bare:t=!1,brand:i="CmLayerBank"})=>t?`
      <div class="app-bare">
        <header class="nav-premium">
          <div class="brand-premium">${i}</div>
          <div class="nav-actions">
            ${s}
          </div>
        </header>
        <main class="app-body bare-body">
          ${e}
        </main>
      </div>
    `:`
    <div class="shell app-shell">
      <header class="topbar">
        <div class="brand">
          <p class="eyebrow">CmLayerBank</p>
          <h2>Experiencia CmLayer</h2>
        </div>
        <div class="top-actions">
          ${s}
        </div>
      </header>
      ${a||""}
      <main class="app-body">
        ${e}
      </main>
    </div>
  `;var j=({current:a,views:e})=>`
  <nav class="tabs">
    ${e.map(s=>`
      <button class="tab ${a===s?"active":""}" data-view="${s}">
        ${s.replace(/-/g," ")}
      </button>`).join("")}
  </nav>
`;var A=()=>`
  <section class="hero grid two">
    <div>
      <p class="eyebrow">Neobanco dominicano</p>
      <h1>Finanzas inteligentes con IA y BNPL transparente.</h1>
      <p class="subhead">Dise\xF1o tipo Revolut/Klarna, listo para Pay in 3/4 y QR-Pay Later.</p>
      <div class="chips">
        <button class="chip primary" data-view="login">Ir a login</button>
        <button class="chip secondary" data-view="dashboard">Ver dashboard visual</button>
      </div>
    </div>
    <div class="card highlight">
      <p class="tag">Lo esencial</p>
      <ul class="bullets">
        <li>Arquitectura modular</li>
        <li>BNPL y QR-Pay Later</li>
        <li>Kids & Teens + Tarjeta virtual</li>
        <li>LayerShield\u2122 y seguridad visual</li>
      </ul>
    </div>
  </section>
`;var M=(a={})=>{let e=a.score?.score?.score??"\u2014",s=a.aiRate?.annualRate?`${(a.aiRate.annualRate*100).toFixed(2)}%`:"\u2014",t=a.insights;return`
  <section class="grid two">
    <div class="card metric-card">
      <p class="tag">Saldo</p>
      <h1>RD$ 0</h1>
      <p class="muted">Visual inicial (sin l\xF3gica)</p>
    </div>
    <div class="card metric-card">
      <p class="tag">CmLayerScore\u2122</p>
      <div class="score-chip">${e}</div>
      <p class="muted">Score por comportamiento (placeholder)</p>
    </div>
  </section>

  <section class="grid two">
    <div class="card">
      <div class="section-header">
        <p class="tag">IA Interest Rate\u2122</p>
        <span class="pill">Din\xE1mico</span>
      </div>
      <h2>${s}</h2>
      <p class="muted">Rango IA seg\xFAn comportamiento y score.</p>
    </div>
    <div class="card">
      <p class="tag">Acciones r\xE1pidas</p>
      <div class="chips">
        <button class="chip primary" data-view="bnpl">Pay in 3/4</button>
        <button class="chip secondary" data-view="qr">Escanear QR</button>
        <button class="chip ghost" data-view="kids">Kids & Teens</button>
        <button class="chip ghost" data-view="kids-tutor">Tutor Kids</button>
        <button class="chip secondary" data-view="cards">Tarjeta virtual</button>
        <button class="chip ghost" data-action="mfa">MFA</button>
        <button class="chip secondary" data-action="bind-device">Vincular dispositivo</button>
      </div>
    </div>
  </section>

  <section class="grid two">
    <div class="card">
      <p class="tag">Seguimiento BNPL</p>
      <p class="muted">Lista de cuotas y calendario (sin datos a\xFAn).</p>
    </div>
    <div class="card">
      <p class="tag">Alertas</p>
      ${t?`
        <ul class="bullets">
          <li>Net 30d: ${t.summary?t.summary.net:"\u2014"}</li>
          ${(t.alerts||[]).map(i=>`<li>${i}</li>`).join("")}
        </ul>
        <p class="tag">Sugerencias</p>
        <ul class="bullets">
          ${(t.suggestions||[]).map(i=>`<li>${i}</li>`).join("")}
        </ul>
      `:'<p class="muted">Sin insights a\xFAn.</p>'}
    </div>
  </section>
`};var b=a=>`RD$ ${Number(a||0).toFixed(2)}`,Q=(a,e)=>{let s=(a.installments||[]).reduce((d,f)=>d+Number(f.amount||0),0),t=e?.annualRate||null,i=t?Number(((a.amount||0)*(t/12)).toFixed(2)):0,n=Number((s+i).toFixed(2));return{installmentTotal:s,rate:t,estimatedFee:i,total:n}},la=(a=[],e)=>{if(!a.length)return`
      <div class="card highlight">
        <p class="tag">Desglose transparente</p>
        <p class="muted">Crea un BNPL para ver el calendario de cuotas.</p>
      </div>
    `;let s=a[0],t=Q(s,e);return`
    <div class="card highlight">
      <p class="tag">Desglose transparente</p>
      <div class="grid two">
        <div>
          <p class="muted">Monto</p>
          <p class="label">${b(s.amount)} \xB7 ${s.installments?.length||0} cuotas</p>
          <p class="muted">Total cuotas: ${b(t.installmentTotal)}</p>
        </div>
        <div>
          <p class="muted">IA Rate aplicada</p>
          <p class="label">${t.rate?`${(t.rate*100).toFixed(2)}%`:"Pendiente"}</p>
          <p class="muted">Fee estimado: ${b(t.estimatedFee)}</p>
        </div>
      </div>
      <ul class="bullets">
        ${(s.installments||[]).map(i=>`<li>Cuota ${i.number} \xB7 vence ${i.dueDate} \xB7 RD$ ${Number(i.amount).toFixed(2)} (${i.status})</li>`).join("")}
        <li class="muted">Impacto en score: <span class="positive">paga a tiempo (+5)</span> \xB7 <span class="negative">atrasos (-8)</span></li>
        <li class="muted">Total estimado con fee: ${b(t.total)}</li>
      </ul>
    </div>
  `},da=()=>`
  <div class="card">
    <p class="tag">Seguimiento de cuotas</p>
    <div class="timeline">
      <div class="step active">
        <span class="dot"></span>
        <div>
          <p class="label">Orden creada</p>
          <p class="muted">Se gener\xF3 el calendario Pay in 3/4</p>
        </div>
      </div>
      <div class="step">
        <span class="dot"></span>
        <div>
          <p class="label">Pr\xF3xima cuota</p>
          <p class="muted">Recordatorios activados</p>
        </div>
      </div>
      <div class="step">
        <span class="dot"></span>
        <div>
          <p class="label">Score</p>
          <p class="muted">Puntualidad suma al CmLayerScore\u2122</p>
        </div>
      </div>
    </div>
  </div>
`,J=(a={})=>{let e=a.bnplOrders||[],s=a.merchants||[],t=a.aiRate;return`
    <section class="grid two">
      <div class="card">
        <p class="tag">Pay in 3 / Pay in 4</p>
        <form class="form grid two" id="bnpl-form">
          <label>Comercio
            <select name="merchantId">${s.map(n=>`<option value="${n.id}">${n.name} \xB7 ${n.category}</option>`).join("")}</select>
          </label>
          <label>Monto
            <input type="number" name="amount" placeholder="RD$" required />
          </label>
          <label>Cuotas
            <select name="installments">
              <option value="3">3 cuotas</option>
              <option value="4">4 cuotas</option>
            </select>
          </label>
          <label>Descripci\xF3n
            <input type="text" name="description" placeholder="Compra BNPL" />
          </label>
          <button class="btn primary" type="submit">Crear BNPL</button>
        </form>
        ${la(e,t)}
      </div>
      ${da()}
    </section>
  
    <section class="grid two">
      <div class="card">
        <p class="tag">QR-Pay Later</p>
        <form class="form" id="bnpl-qr-form">
          <label>Payload QR (JSON)
            <input type="text" name="qrData" placeholder='{"merchantId":"...","amount":1200}' />
          </label>
          <button class="btn secondary" type="submit">Pagar con QR</button>
        </form>
      </div>
      <div class="card">
        <p class="tag">\xD3rdenes BNPL</p>
        ${e.length?e.map(n=>{let d=Q(n,t),f=n.metadata?.source==="qr";return`
            <div class="goal">
              <div class="goal-head">
                <p>${n.metadata?.merchantName||"Comercio"}</p>
                <p class="goal-amount">RD$ ${Number(n.amount).toFixed(2)}</p>
              </div>
              <p class="muted">${n.installments} cuotas \xB7 ${n.status} ${f?'<span class="pill">Desde QR</span>':""}</p>
              <p class="muted">IA rate: ${d.rate?`${(d.rate*100).toFixed(2)}%`:"Pendiente"} \xB7 Fee estimado ${b(d.estimatedFee)} \xB7 Total ${b(d.total)}</p>
              <ul class="bullets">
                ${(n.installments||[]).map(g=>`<li>Cuota ${g.number} \xB7 vence ${g.dueDate} \xB7 RD$ ${Number(g.amount).toFixed(2)} (${g.status})</li>`).join("")}
                <li class="muted">Impacto score: <span class="positive">on-time +5</span> \xB7 <span class="negative">late -8</span></li>
              </ul>
            </div>
          `}).join(""):'<p class="muted">A\xFAn no tienes \xF3rdenes BNPL.</p>'}
      </div>
    </section>
  `};var K=(a={})=>{let e=a.qrResult;return`
    <section class="grid two">
      <div class="card">
        <p class="tag">Escanear QR</p>
        <div class="scanner">
          <div class="scanner-frame">
            <div class="scan-line"></div>
          </div>
          <p class="muted">Placeholder de c\xE1mara. Ingresa payload QR para validar.</p>
        </div>
        <form class="form" id="qr-scan-form">
          <label>Payload QR (JSON)
            <input type="text" name="qrData" placeholder='{"merchantId":"...","amount":1200,"currency":"DOP","description":"Compra","expiresAt":"2025-12-31T00:00:00Z","checksum":"..."}' />
          </label>
          <button class="btn primary" type="submit">Validar QR</button>
        </form>
      </div>
      <div class="card">
        <p class="tag">Detalle del comercio</p>
        ${e&&!e.error?`
          <p class="label">${e.merchant?.name||"Comercio"}</p>
          <p class="value">RD$ ${Number(e.amount).toFixed(2)} (${e.currency})</p>
          <p class="muted">${e.description}</p>
          <p class="muted">Expira: ${e.expiresAt}</p>
          <form class="form" id="qr-create-bnpl-form">
            <input type="hidden" name="qrData" value='${JSON.stringify(e)}' />
            <button class="btn secondary" type="submit">Crear BNPL desde QR</button>
          </form>
        `:`<p class="muted">${e?.error||"Valida un QR para ver detalles."}</p>`}
      </div>
    </section>
  `};var z=(a={})=>{let s=(a.kids||{accounts:[]}).accounts||[];return`
    <section class="grid two">
      <div class="card">
        <p class="tag">Kids & Teens \u2014 Cuentas</p>
        ${s.length?s.map(t=>`
          <div class="goal">
            <div class="goal-head">
              <p>${t.childName} (${t.nickname||""})</p>
              <p class="goal-amount">RD$ ${Number(t.balance||0).toFixed(2)}</p>
            </div>
            <p class="muted">Reglas: max RD$ ${(t.spendingRules?.maxAmount||0).toFixed(0)}, bloqueadas: ${(t.spendingRules?.blockedCategories||[]).join(", ")||"ninguna"}</p>
          </div>
        `).join(""):'<p class="muted">No hay cuentas Kids a\xFAn.</p>'}
      </div>
      <div class="card">
        <p class="tag">Registrar movimiento</p>
        <form class="form" id="kid-movement-form">
          <label>Cuenta
            <select name="childId">
              ${s.map(t=>`<option value="${t.id}">${t.childName} (${t.nickname||""})</option>`).join("")}
            </select>
          </label>
          <label>Monto
            <input type="number" step="0.01" name="amount" required />
          </label>
          <label>Categor\xEDa
            <input type="text" name="category" placeholder="ej: food, tech" />
          </label>
          <label>Descripci\xF3n
            <input type="text" name="description" placeholder="Compra peque\xF1a" />
          </label>
          <button class="btn primary" type="submit">Registrar</button>
        </form>
      </div>
    </section>
  `};var V=()=>`
  <section class="grid two">
    <div class="card">
      <p class="tag">Misiones</p>
      <ul class="bullets">
        <li>Ahorra RD$100 esta semana \u2192 badge \u201CStarter\u201D</li>
        <li>Registra 3 compras responsables \u2192 badge \u201CSmart Spender\u201D</li>
        <li>Mant\xE9n el gasto diario < RD$200 \u2192 recompensa mini</li>
      </ul>
    </div>
    <div class="card">
      <p class="tag">Metas</p>
      <ul class="bullets">
        <li>Meta laptop: RD$10,000 \xB7 progreso 20%</li>
        <li>Meta libros: RD$2,000 \xB7 progreso 60%</li>
      </ul>
      <p class="muted">Visual placeholder; conectar a ChildGoal en siguientes fases.</p>
    </div>
  </section>
`;var _=(a={})=>{let s=(a.kids||{accounts:[]}).accounts||[];return`
    <section class="grid two">
      <div class="card">
        <p class="tag">Crear cuenta Kids</p>
        <form class="form" id="create-kid-form">
          <label>Nombre del menor
            <input type="text" name="childName" required />
          </label>
          <label>Nickname
            <input type="text" name="nickname" placeholder="Opcional" />
          </label>
          <label>Moneda
            <select name="currency">
              <option value="DOP">DOP</option>
              <option value="USD">USD</option>
            </select>
          </label>
          <button class="btn primary" type="submit">Crear cuenta Kids</button>
        </form>
      </div>
      <div class="card">
        <p class="tag">L\xEDmites y categor\xEDas</p>
        ${s.length?s.map(t=>`
          <form class="form kid-rules-form" data-child-id="${t.id}">
            <p class="muted">${t.childName} (${t.nickname||""})</p>
            <label>Monto m\xE1ximo por operaci\xF3n
              <input type="number" name="maxAmount" value="${t.spendingRules?.maxAmount||500}" />
            </label>
            <label>Categor\xEDas permitidas (coma)
              <input type="text" name="allowedCategories" value="${(t.spendingRules?.allowedCategories||[]).join(",")}" />
            </label>
            <label>Categor\xEDas bloqueadas (coma)
              <input type="text" name="blockedCategories" value="${(t.spendingRules?.blockedCategories||[]).join(",")}" />
            </label>
            <button class="btn secondary" type="submit">Guardar reglas</button>
          </form>
        `).join(""):'<p class="muted">Crea una cuenta para configurar reglas.</p>'}
      </div>
    </section>
  `};var H=(a={})=>{let e=a.cards?.[0];return`
    <section class="card">
      <p class="tag">Tarjeta virtual Protect</p>
      ${e?`
        <div class="card highlight">
          <p class="label">CmLayer Protect</p>
          <p class="value">**** **** **** ${e.last4}</p>
          <p class="muted">CVV din\xE1mico: ${e.metadata?.cvvPreview||"***"}</p>
          <div class="chips">
            <button class="chip secondary" data-action="freeze-card" data-card-id="${e.id}">Freeze</button>
            <button class="chip primary" data-action="unfreeze-card" data-card-id="${e.id}">Unfreeze</button>
          </div>
        </div>
      `:'<p class="muted">No tienes tarjeta Protect. Emite una desde dashboard o configuraci\xF3n.</p>'}
    </section>
  `};var D=()=>`
  <section class="landing-hero premium-full fade-in">
    <div class="hero-stack">
      <img src="/assets/logo-neon.png" alt="CmLayerBank" class="hero-logo-top soft-float" />
      <span class="hero-badge">CMLAYERBANK</span>
      <h1 class="hero-title-premium soft-float">CmLayerBank</h1>
      <p class="hero-slogan-premium">Tu dinero, con inteligencia.</p>
      <p class="hero-subtext">Neobanco dominicano dise\xF1ado con IA, seguridad y transparencia.</p>
      <p class="hero-launch neon">LAUNCHING SOON</p>
    </div>
    <div class="contact-float">
      <div class="contact-card-premium soft-float">
        <h3>Contact Us</h3>
        <form class="form contact-form" id="contact-form">
          <label>Name *
            <input type="text" name="name" required />
          </label>
          <label>Email *
            <input type="email" name="email" required />
          </label>
          <label>Message *
            <textarea name="message" rows="4" required></textarea>
          </label>
          <button class="btn primary wide" type="submit">SEND</button>
          <p class="muted" id="contact-status"></p>
        </form>
      </div>
    </div>
    <footer class="landing-footer premium-footer">
      <span>\xA9 2025 CmLayerBank. All rights reserved</span>
      <span>Powered by CmLayer</span>
    </footer>
  </section>
`;var U={background:"#050b18",card:"rgba(255,255,255,0.03)",accent:"#4fd1ff",accent2:"#1a6bff",text:"#eaf1ff",muted:"#9ab3d5"};var pa=window.API_BASE||"",C=null,h=a=>{C=a||null},ma=(a={})=>{let e={"Content-Type":"application/json",...a};return C&&(e.Authorization=`Bearer ${C}`),e},r=async(a,e={})=>{let s=await fetch(`${pa}${a}`,{...e,headers:ma(e.headers||{})}),t=await s.text(),i=t?JSON.parse(t):null;if(!s.ok){let n=new Error(i?.message||"Error en la API");throw n.status=s.status,n.data=i,n}return i},L={login:(a,e)=>r("/api/auth/login",{method:"POST",body:JSON.stringify({email:a,password:e})}),me:()=>r("/api/auth/me")},G={get:()=>r("/api/credit/score")},Y={get:a=>r(`/api/ai/interest-rate${a?`?accountId=${a}`:""}`)},Z={get:()=>r("/api/ai/insights")};var O={issue:a=>r("/api/cards/protect/issue",{method:"POST",body:JSON.stringify({accountId:a})}),freeze:a=>r(`/api/cards/protect/${a}/freeze`,{method:"POST"}),unfreeze:a=>r(`/api/cards/protect/${a}/unfreeze`,{method:"POST"})};var P={listMerchants:()=>r("/api/bnpl/merchants"),listOrders:()=>r("/api/bnpl/orders"),createOrder:({merchantId:a,amount:e,installments:s,description:t,qrData:i})=>r("/api/bnpl/orders",{method:"POST",body:JSON.stringify({merchantId:a||void 0,amount:e,installments:s,description:t,qrData:i})})};var N={request:()=>r("/api/layershield/mfa/request",{method:"POST"}),verify:a=>r("/api/layershield/mfa/verify",{method:"POST",body:JSON.stringify({code:a})}),bindDevice:a=>r("/api/layershield/mfa/bind-device",{method:"POST",body:JSON.stringify({deviceName:a})})};var I={scan:a=>r("/api/qr/scan",{method:"POST",body:JSON.stringify(a)}),createBnpl:a=>r("/api/qr/create-bnpl",{method:"POST",body:JSON.stringify(a)})};var y={listAccounts:()=>r("/api/kids/accounts"),createAccount:a=>r("/api/kids/accounts",{method:"POST",body:JSON.stringify(a)}),updateRules:(a,e)=>r(`/api/kids/accounts/${a}/rules`,{method:"PATCH",body:JSON.stringify(e)}),recordMovement:(a,e)=>r(`/api/kids/accounts/${a}/movements`,{method:"POST",body:JSON.stringify(e)})};var W={send:a=>r("/api/contact",{method:"POST",body:JSON.stringify({...a,source:"landing"})})};var ea=document.getElementById("app"),ta={landing:D,home:A,login:()=>Promise.resolve().then(()=>(aa(),X)).then(a=>a.LoginPage()),dashboard:M,bnpl:J,qr:K,kids:z,"kids-missions":V,"kids-tutor":_,cards:H},o={view:"landing",session:null,score:null,aiRate:null,cards:[],insights:null,bnplOrders:[],merchants:[],qrResult:null,kids:{guardian:null,accounts:[]}},m=()=>{if(!ea)return;let a=!!o.session?.token;!a&&o.view!=="landing"&&o.view!=="login"&&(o.view="landing",window.history.replaceState({},"","/"));let e=o.view==="landing",s=Object.keys(ta).filter(d=>!["landing","login"].includes(d)),t=a?j({current:o.view,views:s}):"",i=a?`<div class="top-actions">
        <span class="pill">${o.session?.user?.email||"Admin"}</span>
        <button class="btn ghost" id="btn-logout">Cerrar sesi\xF3n</button>
      </div>`:'<div class="top-actions"><button class="btn pill-button" id="btn-top-login">Log In</button></div>';(async()=>{let d=ta[o.view]||D,f=typeof d=="function"&&d.constructor.name==="AsyncFunction"?await d(o):typeof d=="function"?d(o):A(o);ea.innerHTML=T({nav:t,content:f,palette:U,actions:i,bare:e,brand:"CMLAYERBANK"}),a&&document.querySelectorAll("[data-view]").forEach(p=>{p.addEventListener("click",()=>{o.view=p.dataset.view,m()})});let g=document.getElementById("btn-top-login");g&&g.addEventListener("click",()=>{o.view="login",window.history.pushState({},"","/login"),m()});let E=document.getElementById("btn-logout");E&&E.addEventListener("click",()=>{localStorage.removeItem("cmlayer_token"),localStorage.removeItem("cmlayer_user"),o.session=null,h(null),o.view="landing",window.history.replaceState({},"","/"),m()});let R=document.getElementById("login-form");R&&R.addEventListener("submit",async p=>{p.preventDefault();let c=new FormData(R),l=c.get("email"),v=c.get("password");try{let u=await L.login(l,v),$=u?.tokens?.accessToken,F=u?.user;$?(h($),o.session={token:$,user:F},localStorage.setItem("cmlayer_token",$),localStorage.setItem("cmlayer_user",JSON.stringify(F)),o.view="dashboard",window.history.replaceState({},"","/"),await ra(),m()):alert("No se recibi\xF3 token")}catch(u){alert(u.message||"No se pudo iniciar sesi\xF3n")}});let S=document.getElementById("create-kid-form");S&&S.addEventListener("submit",async p=>{p.preventDefault();let c=new FormData(S);try{await y.createAccount({childName:c.get("childName"),nickname:c.get("nickname"),currency:c.get("currency")||"DOP"}),await k(),m()}catch(l){alert(l.message||"No se pudo crear la cuenta Kids")}}),document.querySelectorAll(".kid-rules-form").forEach(p=>{p.addEventListener("submit",async c=>{c.preventDefault();let l=new FormData(p),v=p.dataset.childId;try{await y.updateRules(v,{maxAmount:Number(l.get("maxAmount")||0),allowedCategories:l.get("allowedCategories")?.split(",").map(u=>u.trim()).filter(Boolean)||[],blockedCategories:l.get("blockedCategories")?.split(",").map(u=>u.trim()).filter(Boolean)||[]}),await k(),m()}catch(u){alert(u.message||"No se pudo actualizar reglas")}})});let x=document.getElementById("kid-movement-form");x&&x.addEventListener("submit",async p=>{p.preventDefault();let c=new FormData(x),l=c.get("childId");try{await y.recordMovement(l,{amount:Number(c.get("amount")||0),category:c.get("category")||"",description:c.get("description")||""}),await k(),m()}catch(v){alert(v.message||"No se pudo registrar movimiento")}});let w=document.getElementById("contact-form");w&&w.addEventListener("submit",async p=>{p.preventDefault();let c=new FormData(w),l=document.getElementById("contact-status");l&&(l.textContent="Enviando...");try{await W.send({name:c.get("name"),email:c.get("email"),message:c.get("message"),device:navigator?.userAgent||"web",language:navigator?.language||navigator?.userLanguage||"es"}),l&&(l.textContent="Mensaje enviado"),w.reset()}catch{l&&(l.textContent="No se pudo enviar el mensaje")}})})()},ra=async()=>{if(o.session?.token)try{let a=await L.me();o.session.user=a?.user||o.session.user,await ga(),await va(),await q(),await ba(),await B(),await k()}catch{localStorage.removeItem("cmlayer_token"),localStorage.removeItem("cmlayer_user"),o.session=null,h(null),o.view="landing"}},ga=async()=>{if(o.session?.token)try{let a=await G.get();o.score=a}catch{o.score=null}},va=async()=>{if(o.session?.token)try{let a=await Y.get();o.aiRate=a}catch{o.aiRate=null}},q=async()=>{if(o.session?.token)try{let a=await r("/api/cards");o.cards=a||[]}catch{o.cards=[]}},ba=async()=>{if(o.session?.token)try{let a=await Z.get();o.insights=a}catch{o.insights=null}},B=async()=>{if(o.session?.token)try{let[a,e]=await Promise.all([P.listOrders(),P.listMerchants()]);o.bnplOrders=a||[],o.merchants=e||[]}catch{o.bnplOrders=[],o.merchants=[]}},k=async()=>{if(o.session?.token)try{let a=await y.listAccounts();o.kids=a||{guardian:null,accounts:[]}}catch{o.kids={guardian:null,accounts:[]}}},sa=async a=>{if(o.session?.token)try{let e=await I.scan(a);o.qrResult=e}catch(e){throw o.qrResult={error:e.message||"QR inv\xE1lido"},e}},oa=async a=>{if(!o.session?.token)return;let e=await I.createBnpl(a);return await B(),e},fa=async()=>{o.view=window.location.pathname==="/login"?"login":"landing";let a=localStorage.getItem("cmlayer_token"),e=localStorage.getItem("cmlayer_user");a&&(h(a),o.session={token:a,user:e?JSON.parse(e):null},await ra(),o.view="dashboard",window.history.replaceState({},"","/")),m()};fa();document.addEventListener("click",async a=>{let e=a.target?.dataset?.action;if(e){if(e==="mfa")try{await N.request();let s=prompt("Ingresa el c\xF3digo MFA (mock 6 d\xEDgitos)");s&&(await N.verify(s),alert("MFA verificado"))}catch(s){alert(s.message||"Error MFA")}if(e==="bind-device")try{let s=prompt("Nombre del dispositivo");await N.bindDevice(s||"device"),alert("Dispositivo vinculado (mock)")}catch(s){alert(s.message||"Error vinculando dispositivo")}if(e==="freeze-card"){let s=a.target.dataset.cardId;if(!s)return;try{await O.freeze(s),await q(),alert("Tarjeta congelada"),m()}catch(t){alert(t.message||"No se pudo congelar la tarjeta")}}if(e==="unfreeze-card"){let s=a.target.dataset.cardId;if(!s)return;try{await O.unfreeze(s),await q(),alert("Tarjeta activada"),m()}catch(t){alert(t.message||"No se pudo activar la tarjeta")}}}});document.addEventListener("submit",async a=>{if(a.target?.id==="bnpl-form"){a.preventDefault();let e=new FormData(a.target),s={merchantId:e.get("merchantId")||void 0,amount:Number(e.get("amount")||0),installments:e.get("installments"),description:e.get("description")};try{await P.createOrder(s),await B(),alert("BNPL creado"),m()}catch(t){alert(t.message||"Error creando BNPL")}}if(a.target?.id==="bnpl-qr-form"){a.preventDefault();let s=new FormData(a.target).get("qrData");try{let t=JSON.parse(s);await sa(t),await oa(t),alert("BNPL v\xEDa QR creado"),m()}catch(t){alert(t.message||"Error con QR BNPL")}}if(a.target?.id==="qr-scan-form"){a.preventDefault();let s=new FormData(a.target).get("qrData");try{let t=JSON.parse(s);await sa(t),alert("QR v\xE1lido"),m()}catch(t){alert(t.message||"QR inv\xE1lido")}}if(a.target?.id==="qr-create-bnpl-form"){a.preventDefault();let s=new FormData(a.target).get("qrData");try{let t=JSON.parse(s);await oa(t),alert("BNPL creado desde QR"),m()}catch(t){alert(t.message||"Error creando BNPL desde QR")}}});
