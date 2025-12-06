var re=Object.defineProperty;var ie=(e,a)=>()=>(e&&(a=e(e=0)),a);var ne=(e,a)=>{for(var s in a)re(e,s,{get:a[s],enumerable:!0})};var X={};ne(X,{LoginPage:()=>me});var me,Y=ie(()=>{me=()=>`
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
`});var F=({nav:e,content:a,actions:s=""})=>`
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
    ${e||""}
    <main class="app-body">
      ${a}
    </main>
  </div>
`;var T=({current:e,views:a})=>`
  <nav class="tabs">
    ${a.map(s=>`
      <button class="tab ${e===s?"active":""}" data-view="${s}">
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
`;var j=(e={})=>{let a=e.score?.score?.score??"\u2014",s=e.aiRate?.annualRate?`${(e.aiRate.annualRate*100).toFixed(2)}%`:"\u2014",t=e.insights;return`
  <section class="grid two">
    <div class="card metric-card">
      <p class="tag">Saldo</p>
      <h1>RD$ 0</h1>
      <p class="muted">Visual inicial (sin l\xF3gica)</p>
    </div>
    <div class="card metric-card">
      <p class="tag">CmLayerScore\u2122</p>
      <div class="score-chip">${a}</div>
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
          ${(t.alerts||[]).map(n=>`<li>${n}</li>`).join("")}
        </ul>
        <p class="tag">Sugerencias</p>
        <ul class="bullets">
          ${(t.suggestions||[]).map(n=>`<li>${n}</li>`).join("")}
        </ul>
      `:'<p class="muted">Sin insights a\xFAn.</p>'}
    </div>
  </section>
`};var h=e=>`RD$ ${Number(e||0).toFixed(2)}`,Q=(e,a)=>{let s=(e.installments||[]).reduce((u,b)=>u+Number(b.amount||0),0),t=a?.annualRate||null,n=t?Number(((e.amount||0)*(t/12)).toFixed(2)):0,i=Number((s+n).toFixed(2));return{installmentTotal:s,rate:t,estimatedFee:n,total:i}},ce=(e=[],a)=>{if(!e.length)return`
      <div class="card highlight">
        <p class="tag">Desglose transparente</p>
        <p class="muted">Crea un BNPL para ver el calendario de cuotas.</p>
      </div>
    `;let s=e[0],t=Q(s,a);return`
    <div class="card highlight">
      <p class="tag">Desglose transparente</p>
      <div class="grid two">
        <div>
          <p class="muted">Monto</p>
          <p class="label">${h(s.amount)} \xB7 ${s.installments?.length||0} cuotas</p>
          <p class="muted">Total cuotas: ${h(t.installmentTotal)}</p>
        </div>
        <div>
          <p class="muted">IA Rate aplicada</p>
          <p class="label">${t.rate?`${(t.rate*100).toFixed(2)}%`:"Pendiente"}</p>
          <p class="muted">Fee estimado: ${h(t.estimatedFee)}</p>
        </div>
      </div>
      <ul class="bullets">
        ${(s.installments||[]).map(n=>`<li>Cuota ${n.number} \xB7 vence ${n.dueDate} \xB7 RD$ ${Number(n.amount).toFixed(2)} (${n.status})</li>`).join("")}
        <li class="muted">Impacto en score: <span class="positive">paga a tiempo (+5)</span> \xB7 <span class="negative">atrasos (-8)</span></li>
        <li class="muted">Total estimado con fee: ${h(t.total)}</li>
      </ul>
    </div>
  `},le=()=>`
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
`,M=(e={})=>{let a=e.bnplOrders||[],s=e.merchants||[],t=e.aiRate;return`
    <section class="grid two">
      <div class="card">
        <p class="tag">Pay in 3 / Pay in 4</p>
        <form class="form grid two" id="bnpl-form">
          <label>Comercio
            <select name="merchantId">${s.map(i=>`<option value="${i.id}">${i.name} \xB7 ${i.category}</option>`).join("")}</select>
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
        ${ce(a,t)}
      </div>
      ${le()}
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
        ${a.length?a.map(i=>{let u=Q(i,t),b=i.metadata?.source==="qr";return`
            <div class="goal">
              <div class="goal-head">
                <p>${i.metadata?.merchantName||"Comercio"}</p>
                <p class="goal-amount">RD$ ${Number(i.amount).toFixed(2)}</p>
              </div>
              <p class="muted">${i.installments} cuotas \xB7 ${i.status} ${b?'<span class="pill">Desde QR</span>':""}</p>
              <p class="muted">IA rate: ${u.rate?`${(u.rate*100).toFixed(2)}%`:"Pendiente"} \xB7 Fee estimado ${h(u.estimatedFee)} \xB7 Total ${h(u.total)}</p>
              <ul class="bullets">
                ${(i.installments||[]).map(g=>`<li>Cuota ${g.number} \xB7 vence ${g.dueDate} \xB7 RD$ ${Number(g.amount).toFixed(2)} (${g.status})</li>`).join("")}
                <li class="muted">Impacto score: <span class="positive">on-time +5</span> \xB7 <span class="negative">late -8</span></li>
              </ul>
            </div>
          `}).join(""):'<p class="muted">A\xFAn no tienes \xF3rdenes BNPL.</p>'}
      </div>
    </section>
  `};var J=(e={})=>{let a=e.qrResult;return`
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
        ${a&&!a.error?`
          <p class="label">${a.merchant?.name||"Comercio"}</p>
          <p class="value">RD$ ${Number(a.amount).toFixed(2)} (${a.currency})</p>
          <p class="muted">${a.description}</p>
          <p class="muted">Expira: ${a.expiresAt}</p>
          <form class="form" id="qr-create-bnpl-form">
            <input type="hidden" name="qrData" value='${JSON.stringify(a)}' />
            <button class="btn secondary" type="submit">Crear BNPL desde QR</button>
          </form>
        `:`<p class="muted">${a?.error||"Valida un QR para ver detalles."}</p>`}
      </div>
    </section>
  `};var K=(e={})=>{let s=(e.kids||{accounts:[]}).accounts||[];return`
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
  `};var z=()=>`
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
`;var V=(e={})=>{let s=(e.kids||{accounts:[]}).accounts||[];return`
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
  `};var _=(e={})=>{let a=e.cards?.[0];return`
    <section class="card">
      <p class="tag">Tarjeta virtual Protect</p>
      ${a?`
        <div class="card highlight">
          <p class="label">CmLayer Protect</p>
          <p class="value">**** **** **** ${a.last4}</p>
          <p class="muted">CVV din\xE1mico: ${a.metadata?.cvvPreview||"***"}</p>
          <div class="chips">
            <button class="chip secondary" data-action="freeze-card" data-card-id="${a.id}">Freeze</button>
            <button class="chip primary" data-action="unfreeze-card" data-card-id="${a.id}">Unfreeze</button>
          </div>
        </div>
      `:'<p class="muted">No tienes tarjeta Protect. Emite una desde dashboard o configuraci\xF3n.</p>'}
    </section>
  `};var D=()=>`
  <section class="landing-pro">
    <div class="landing-center">
      <p class="landing-brand">CmLayerBank</p>
      <p class="landing-sub">Tu dinero, con inteligencia.</p>
      <h1 class="landing-title">Launching Soon</h1>
    </div>

    <div class="contact-block">
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

    <footer class="landing-footer">
      <span>\xA9 2025 CmLayerBank. All rights reserved</span>
      <span>Powered by CmLayer</span>
    </footer>
  </section>
`;var H={background:"#050b18",card:"rgba(255,255,255,0.03)",accent:"#4fd1ff",accent2:"#1a6bff",text:"#eaf1ff",muted:"#9ab3d5"};var de=window.API_BASE||"",C=null,f=e=>{C=e||null},pe=(e={})=>{let a={"Content-Type":"application/json",...e};return C&&(a.Authorization=`Bearer ${C}`),a},r=async(e,a={})=>{let s=await fetch(`${de}${e}`,{...a,headers:pe(a.headers||{})}),t=await s.text(),n=t?JSON.parse(t):null;if(!s.ok){let i=new Error(n?.message||"Error en la API");throw i.status=s.status,i.data=n,i}return n},L={login:(e,a)=>r("/api/auth/login",{method:"POST",body:JSON.stringify({email:e,password:a})}),me:()=>r("/api/auth/me")},U={get:()=>r("/api/credit/score")},G={get:e=>r(`/api/ai/interest-rate${e?`?accountId=${e}`:""}`)},Z={get:()=>r("/api/ai/insights")};var O={issue:e=>r("/api/cards/protect/issue",{method:"POST",body:JSON.stringify({accountId:e})}),freeze:e=>r(`/api/cards/protect/${e}/freeze`,{method:"POST"}),unfreeze:e=>r(`/api/cards/protect/${e}/unfreeze`,{method:"POST"})};var P={listMerchants:()=>r("/api/bnpl/merchants"),listOrders:()=>r("/api/bnpl/orders"),createOrder:({merchantId:e,amount:a,installments:s,description:t,qrData:n})=>r("/api/bnpl/orders",{method:"POST",body:JSON.stringify({merchantId:e||void 0,amount:a,installments:s,description:t,qrData:n})})};var k={request:()=>r("/api/layershield/mfa/request",{method:"POST"}),verify:e=>r("/api/layershield/mfa/verify",{method:"POST",body:JSON.stringify({code:e})}),bindDevice:e=>r("/api/layershield/mfa/bind-device",{method:"POST",body:JSON.stringify({deviceName:e})})};var I={scan:e=>r("/api/qr/scan",{method:"POST",body:JSON.stringify(e)}),createBnpl:e=>r("/api/qr/create-bnpl",{method:"POST",body:JSON.stringify(e)})};var y={listAccounts:()=>r("/api/kids/accounts"),createAccount:e=>r("/api/kids/accounts",{method:"POST",body:JSON.stringify(e)}),updateRules:(e,a)=>r(`/api/kids/accounts/${e}/rules`,{method:"PATCH",body:JSON.stringify(a)}),recordMovement:(e,a)=>r(`/api/kids/accounts/${e}/movements`,{method:"POST",body:JSON.stringify(a)})};var W={send:e=>r("/api/contact",{method:"POST",body:JSON.stringify({...e,source:"landing"})})};var ee=document.getElementById("app"),ae={landing:D,home:A,login:()=>Promise.resolve().then(()=>(Y(),X)).then(e=>e.LoginPage()),dashboard:j,bnpl:M,qr:J,kids:K,"kids-missions":z,"kids-tutor":V,cards:_},o={view:"landing",session:null,score:null,aiRate:null,cards:[],insights:null,bnplOrders:[],merchants:[],qrResult:null,kids:{guardian:null,accounts:[]}},p=()=>{if(!ee)return;let e=!!o.session?.token;!e&&o.view!=="landing"&&o.view!=="login"&&(o.view="landing",window.history.replaceState({},"","/"));let a=Object.keys(ae).filter(i=>!["landing","login"].includes(i)),s=e?T({current:o.view,views:a}):"",t=e?`<div class="top-actions">
        <span class="pill">${o.session?.user?.email||"Admin"}</span>
        <button class="btn ghost" id="btn-logout">Cerrar sesi\xF3n</button>
      </div>`:'<div class="top-actions"><button class="btn ghost" id="btn-top-login">Log In</button></div>';(async()=>{let i=ae[o.view]||D,u=typeof i=="function"&&i.constructor.name==="AsyncFunction"?await i(o):typeof i=="function"?i(o):A(o);ee.innerHTML=F({nav:s,content:u,palette:H,actions:t}),e&&document.querySelectorAll("[data-view]").forEach(d=>{d.addEventListener("click",()=>{o.view=d.dataset.view,p()})});let b=document.getElementById("btn-top-login");b&&b.addEventListener("click",()=>{o.view="login",window.history.pushState({},"","/login"),p()});let g=document.getElementById("btn-logout");g&&g.addEventListener("click",()=>{localStorage.removeItem("cmlayer_token"),localStorage.removeItem("cmlayer_user"),o.session=null,f(null),o.view="landing",window.history.replaceState({},"","/"),p()});let R=document.getElementById("login-form");R&&R.addEventListener("submit",async d=>{d.preventDefault();let c=new FormData(R),l=c.get("email"),v=c.get("password");try{let m=await L.login(l,v),$=m?.tokens?.accessToken,E=m?.user;$?(f($),o.session={token:$,user:E},localStorage.setItem("cmlayer_token",$),localStorage.setItem("cmlayer_user",JSON.stringify(E)),o.view="dashboard",window.history.replaceState({},"","/"),await oe(),p()):alert("No se recibi\xF3 token")}catch(m){alert(m.message||"No se pudo iniciar sesi\xF3n")}});let S=document.getElementById("create-kid-form");S&&S.addEventListener("submit",async d=>{d.preventDefault();let c=new FormData(S);try{await y.createAccount({childName:c.get("childName"),nickname:c.get("nickname"),currency:c.get("currency")||"DOP"}),await N(),p()}catch(l){alert(l.message||"No se pudo crear la cuenta Kids")}}),document.querySelectorAll(".kid-rules-form").forEach(d=>{d.addEventListener("submit",async c=>{c.preventDefault();let l=new FormData(d),v=d.dataset.childId;try{await y.updateRules(v,{maxAmount:Number(l.get("maxAmount")||0),allowedCategories:l.get("allowedCategories")?.split(",").map(m=>m.trim()).filter(Boolean)||[],blockedCategories:l.get("blockedCategories")?.split(",").map(m=>m.trim()).filter(Boolean)||[]}),await N(),p()}catch(m){alert(m.message||"No se pudo actualizar reglas")}})});let x=document.getElementById("kid-movement-form");x&&x.addEventListener("submit",async d=>{d.preventDefault();let c=new FormData(x),l=c.get("childId");try{await y.recordMovement(l,{amount:Number(c.get("amount")||0),category:c.get("category")||"",description:c.get("description")||""}),await N(),p()}catch(v){alert(v.message||"No se pudo registrar movimiento")}});let w=document.getElementById("contact-form");w&&w.addEventListener("submit",async d=>{d.preventDefault();let c=new FormData(w),l=document.getElementById("contact-status");l&&(l.textContent="Enviando...");try{await W.send({name:c.get("name"),email:c.get("email"),message:c.get("message"),device:navigator?.userAgent||"web",language:navigator?.language||navigator?.userLanguage||"es"}),l&&(l.textContent="Mensaje enviado"),w.reset()}catch{l&&(l.textContent="No se pudo enviar el mensaje")}})})()},oe=async()=>{if(o.session?.token)try{let e=await L.me();o.session.user=e?.user||o.session.user,await ue(),await ge(),await q(),await be(),await B(),await N()}catch{localStorage.removeItem("cmlayer_token"),localStorage.removeItem("cmlayer_user"),o.session=null,f(null),o.view="landing"}},ue=async()=>{if(o.session?.token)try{let e=await U.get();o.score=e}catch{o.score=null}},ge=async()=>{if(o.session?.token)try{let e=await G.get();o.aiRate=e}catch{o.aiRate=null}},q=async()=>{if(o.session?.token)try{let e=await r("/api/cards");o.cards=e||[]}catch{o.cards=[]}},be=async()=>{if(o.session?.token)try{let e=await Z.get();o.insights=e}catch{o.insights=null}},B=async()=>{if(o.session?.token)try{let[e,a]=await Promise.all([P.listOrders(),P.listMerchants()]);o.bnplOrders=e||[],o.merchants=a||[]}catch{o.bnplOrders=[],o.merchants=[]}},N=async()=>{if(o.session?.token)try{let e=await y.listAccounts();o.kids=e||{guardian:null,accounts:[]}}catch{o.kids={guardian:null,accounts:[]}}},te=async e=>{if(o.session?.token)try{let a=await I.scan(e);o.qrResult=a}catch(a){throw o.qrResult={error:a.message||"QR inv\xE1lido"},a}},se=async e=>{if(!o.session?.token)return;let a=await I.createBnpl(e);return await B(),a},ve=async()=>{o.view=window.location.pathname==="/login"?"login":"landing";let e=localStorage.getItem("cmlayer_token"),a=localStorage.getItem("cmlayer_user");e&&(f(e),o.session={token:e,user:a?JSON.parse(a):null},await oe(),o.view="dashboard",window.history.replaceState({},"","/")),p()};ve();document.addEventListener("click",async e=>{let a=e.target?.dataset?.action;if(a){if(a==="mfa")try{await k.request();let s=prompt("Ingresa el c\xF3digo MFA (mock 6 d\xEDgitos)");s&&(await k.verify(s),alert("MFA verificado"))}catch(s){alert(s.message||"Error MFA")}if(a==="bind-device")try{let s=prompt("Nombre del dispositivo");await k.bindDevice(s||"device"),alert("Dispositivo vinculado (mock)")}catch(s){alert(s.message||"Error vinculando dispositivo")}if(a==="freeze-card"){let s=e.target.dataset.cardId;if(!s)return;try{await O.freeze(s),await q(),alert("Tarjeta congelada"),p()}catch(t){alert(t.message||"No se pudo congelar la tarjeta")}}if(a==="unfreeze-card"){let s=e.target.dataset.cardId;if(!s)return;try{await O.unfreeze(s),await q(),alert("Tarjeta activada"),p()}catch(t){alert(t.message||"No se pudo activar la tarjeta")}}}});document.addEventListener("submit",async e=>{if(e.target?.id==="bnpl-form"){e.preventDefault();let a=new FormData(e.target),s={merchantId:a.get("merchantId")||void 0,amount:Number(a.get("amount")||0),installments:a.get("installments"),description:a.get("description")};try{await P.createOrder(s),await B(),alert("BNPL creado"),p()}catch(t){alert(t.message||"Error creando BNPL")}}if(e.target?.id==="bnpl-qr-form"){e.preventDefault();let s=new FormData(e.target).get("qrData");try{let t=JSON.parse(s);await te(t),await se(t),alert("BNPL v\xEDa QR creado"),p()}catch(t){alert(t.message||"Error con QR BNPL")}}if(e.target?.id==="qr-scan-form"){e.preventDefault();let s=new FormData(e.target).get("qrData");try{let t=JSON.parse(s);await te(t),alert("QR v\xE1lido"),p()}catch(t){alert(t.message||"QR inv\xE1lido")}}if(e.target?.id==="qr-create-bnpl-form"){e.preventDefault();let s=new FormData(e.target).get("qrData");try{let t=JSON.parse(s);await se(t),alert("BNPL creado desde QR"),p()}catch(t){alert(t.message||"Error creando BNPL desde QR")}}});
