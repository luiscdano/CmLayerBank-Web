var ea=Object.defineProperty;var ta=(a,e)=>()=>(a&&(e=a(a=0)),e);var sa=(a,e)=>{for(var t in e)ea(a,t,{get:e[t],enumerable:!0})};var U={};sa(U,{LoginPage:()=>ca});var ca,G=ta(()=>{ca=()=>`
  <section class="grid two hero">
    <div>
      <p class="eyebrow">Acceso seguro</p>
      <h1>Entra a tu experiencia CmLayerBank</h1>
      <p class="subhead">Login minimal, sin conexi\xF3n a backend en esta fase.</p>
      <div class="chips">
        <button class="chip primary" data-view="home">Volver a la landing</button>
      </div>
    </div>
    <form class="card form" id="login-form">
      <p class="tag">Login demo</p>
      <label>Email
        <input type="email" name="email" placeholder="tu@email.com" required />
      </label>
      <label>Contrase\xF1a
        <input type="password" name="password" placeholder="********" required />
      </label>
      <button class="btn primary" type="submit">Continuar</button>
      <p class="muted">Sin backend en esta fase. Pr\xF3ximamente autenticaci\xF3n real.</p>
    </form>
  </section>
`});var q=({nav:a,content:e})=>`
  <div class="app-shell">
    <header class="app-top">
      <div>
        <p class="eyebrow">CmLayerBank</p>
        <h2>Experiencia CmLayer</h2>
        <p class="subhead">Visual base \xB7 Paso a paso</p>
      </div>
    </header>
    ${a}
    <main class="app-body">
      ${e}
    </main>
  </div>
`;var I=({current:a,views:e})=>`
  <nav class="tabs">
    ${e.map(t=>`
      <button class="tab ${a===t?"active":""}" data-view="${t}">
        ${t.replace(/-/g," ")}
      </button>`).join("")}
  </nav>
`;var R=()=>`
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
`;var F=(a={})=>{let e=a.score?.score?.score??"\u2014",t=a.aiRate?.annualRate?`${(a.aiRate.annualRate*100).toFixed(2)}%`:"\u2014",s=a.insights;return`
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
      <h2>${t}</h2>
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
      ${s?`
        <ul class="bullets">
          <li>Net 30d: ${s.summary?s.summary.net:"\u2014"}</li>
          ${(s.alerts||[]).map(i=>`<li>${i}</li>`).join("")}
        </ul>
        <p class="tag">Sugerencias</p>
        <ul class="bullets">
          ${(s.suggestions||[]).map(i=>`<li>${i}</li>`).join("")}
        </ul>
      `:'<p class="muted">Sin insights a\xFAn.</p>'}
    </div>
  </section>
`};var h=a=>`RD$ ${Number(a||0).toFixed(2)}`,T=(a,e)=>{let t=(a.installments||[]).reduce((m,g)=>m+Number(g.amount||0),0),s=e?.annualRate||null,i=s?Number(((a.amount||0)*(s/12)).toFixed(2)):0,n=Number((t+i).toFixed(2));return{installmentTotal:t,rate:s,estimatedFee:i,total:n}},ra=(a=[],e)=>{if(!a.length)return`
      <div class="card highlight">
        <p class="tag">Desglose transparente</p>
        <p class="muted">Crea un BNPL para ver el calendario de cuotas.</p>
      </div>
    `;let t=a[0],s=T(t,e);return`
    <div class="card highlight">
      <p class="tag">Desglose transparente</p>
      <div class="grid two">
        <div>
          <p class="muted">Monto</p>
          <p class="label">${h(t.amount)} \xB7 ${t.installments?.length||0} cuotas</p>
          <p class="muted">Total cuotas: ${h(s.installmentTotal)}</p>
        </div>
        <div>
          <p class="muted">IA Rate aplicada</p>
          <p class="label">${s.rate?`${(s.rate*100).toFixed(2)}%`:"Pendiente"}</p>
          <p class="muted">Fee estimado: ${h(s.estimatedFee)}</p>
        </div>
      </div>
      <ul class="bullets">
        ${(t.installments||[]).map(i=>`<li>Cuota ${i.number} \xB7 vence ${i.dueDate} \xB7 RD$ ${Number(i.amount).toFixed(2)} (${i.status})</li>`).join("")}
        <li class="muted">Impacto en score: <span class="positive">paga a tiempo (+5)</span> \xB7 <span class="negative">atrasos (-8)</span></li>
        <li class="muted">Total estimado con fee: ${h(s.total)}</li>
      </ul>
    </div>
  `},oa=()=>`
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
`,B=(a={})=>{let e=a.bnplOrders||[],t=a.merchants||[],s=a.aiRate;return`
    <section class="grid two">
      <div class="card">
        <p class="tag">Pay in 3 / Pay in 4</p>
        <form class="form grid two" id="bnpl-form">
          <label>Comercio
            <select name="merchantId">${t.map(n=>`<option value="${n.id}">${n.name} \xB7 ${n.category}</option>`).join("")}</select>
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
        ${ra(e,s)}
      </div>
      ${oa()}
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
        ${e.length?e.map(n=>{let m=T(n,s),g=n.metadata?.source==="qr";return`
            <div class="goal">
              <div class="goal-head">
                <p>${n.metadata?.merchantName||"Comercio"}</p>
                <p class="goal-amount">RD$ ${Number(n.amount).toFixed(2)}</p>
              </div>
              <p class="muted">${n.installments} cuotas \xB7 ${n.status} ${g?'<span class="pill">Desde QR</span>':""}</p>
              <p class="muted">IA rate: ${m.rate?`${(m.rate*100).toFixed(2)}%`:"Pendiente"} \xB7 Fee estimado ${h(m.estimatedFee)} \xB7 Total ${h(m.total)}</p>
              <ul class="bullets">
                ${(n.installments||[]).map(b=>`<li>Cuota ${b.number} \xB7 vence ${b.dueDate} \xB7 RD$ ${Number(b.amount).toFixed(2)} (${b.status})</li>`).join("")}
                <li class="muted">Impacto score: <span class="positive">on-time +5</span> \xB7 <span class="negative">late -8</span></li>
              </ul>
            </div>
          `}).join(""):'<p class="muted">A\xFAn no tienes \xF3rdenes BNPL.</p>'}
      </div>
    </section>
  `};var E=(a={})=>{let e=a.qrResult;return`
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
  `};var j=(a={})=>{let t=(a.kids||{accounts:[]}).accounts||[];return`
    <section class="grid two">
      <div class="card">
        <p class="tag">Kids & Teens \u2014 Cuentas</p>
        ${t.length?t.map(s=>`
          <div class="goal">
            <div class="goal-head">
              <p>${s.childName} (${s.nickname||""})</p>
              <p class="goal-amount">RD$ ${Number(s.balance||0).toFixed(2)}</p>
            </div>
            <p class="muted">Reglas: max RD$ ${(s.spendingRules?.maxAmount||0).toFixed(0)}, bloqueadas: ${(s.spendingRules?.blockedCategories||[]).join(", ")||"ninguna"}</p>
          </div>
        `).join(""):'<p class="muted">No hay cuentas Kids a\xFAn.</p>'}
      </div>
      <div class="card">
        <p class="tag">Registrar movimiento</p>
        <form class="form" id="kid-movement-form">
          <label>Cuenta
            <select name="childId">
              ${t.map(s=>`<option value="${s.id}">${s.childName} (${s.nickname||""})</option>`).join("")}
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
  `};var M=()=>`
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
`;var Q=(a={})=>{let t=(a.kids||{accounts:[]}).accounts||[];return`
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
        ${t.length?t.map(s=>`
          <form class="form kid-rules-form" data-child-id="${s.id}">
            <p class="muted">${s.childName} (${s.nickname||""})</p>
            <label>Monto m\xE1ximo por operaci\xF3n
              <input type="number" name="maxAmount" value="${s.spendingRules?.maxAmount||500}" />
            </label>
            <label>Categor\xEDas permitidas (coma)
              <input type="text" name="allowedCategories" value="${(s.spendingRules?.allowedCategories||[]).join(",")}" />
            </label>
            <label>Categor\xEDas bloqueadas (coma)
              <input type="text" name="blockedCategories" value="${(s.spendingRules?.blockedCategories||[]).join(",")}" />
            </label>
            <button class="btn secondary" type="submit">Guardar reglas</button>
          </form>
        `).join(""):'<p class="muted">Crea una cuenta para configurar reglas.</p>'}
      </div>
    </section>
  `};var J=(a={})=>{let e=a.cards?.[0];return`
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
  `};var x=(a={})=>`
    <section class="hero">
      <div>
        <p class="eyebrow">CMLAYERBANK</p>
        <h1>Tu dinero, con inteligencia.</h1>
        <p class="subhead">Neobanco dominicano en construcci\xF3n. Preparing...</p>
        ${!!a.access?'<div style="margin-top:16px;"><button class="btn primary" id="btn-access-login">Iniciar Sesi\xF3n</button></div>':""}
      </div>
    </section>
    <section class="card" style="margin-top:20px;">
      <p class="tag">Contacto</p>
      <form class="form" id="contact-form">
        <label>Nombre completo
          <input type="text" name="name" required />
        </label>
        <label>Correo electr\xF3nico
          <input type="email" name="email" required />
        </label>
        <label>Mensaje
          <textarea name="message" rows="4" required></textarea>
        </label>
        <button class="btn primary" type="submit">Enviar mensaje</button>
        <p class="muted" id="contact-status"></p>
      </form>
    </section>
  `;var K={background:"#050b18",card:"rgba(255,255,255,0.03)",accent:"#4fd1ff",accent2:"#1a6bff",text:"#eaf1ff",muted:"#9ab3d5"};var ia=window.API_BASE||"",k=null,w=a=>{k=a||null},na=(a={})=>{let e={"Content-Type":"application/json",...a};return k&&(e.Authorization=`Bearer ${k}`),e},o=async(a,e={})=>{let t=await fetch(`${ia}${a}`,{...e,headers:na(e.headers||{})}),s=await t.text(),i=s?JSON.parse(s):null;if(!t.ok){let n=new Error(i?.message||"Error en la API");throw n.status=t.status,n.data=i,n}return i},S={login:(a,e)=>o("/api/auth/login",{method:"POST",body:JSON.stringify({email:a,password:e})}),me:()=>o("/api/auth/me")},z={get:()=>o("/api/credit/score")},V={get:a=>o(`/api/ai/interest-rate${a?`?accountId=${a}`:""}`)},_={get:()=>o("/api/ai/insights")};var A={issue:a=>o("/api/cards/protect/issue",{method:"POST",body:JSON.stringify({accountId:a})}),freeze:a=>o(`/api/cards/protect/${a}/freeze`,{method:"POST"}),unfreeze:a=>o(`/api/cards/protect/${a}/unfreeze`,{method:"POST"})};var $={listMerchants:()=>o("/api/bnpl/merchants"),listOrders:()=>o("/api/bnpl/orders"),createOrder:({merchantId:a,amount:e,installments:t,description:s,qrData:i})=>o("/api/bnpl/orders",{method:"POST",body:JSON.stringify({merchantId:a||void 0,amount:e,installments:t,description:s,qrData:i})})};var P={request:()=>o("/api/layershield/mfa/request",{method:"POST"}),verify:a=>o("/api/layershield/mfa/verify",{method:"POST",body:JSON.stringify({code:a})}),bindDevice:a=>o("/api/layershield/mfa/bind-device",{method:"POST",body:JSON.stringify({deviceName:a})})};var D={scan:a=>o("/api/qr/scan",{method:"POST",body:JSON.stringify(a)}),createBnpl:a=>o("/api/qr/create-bnpl",{method:"POST",body:JSON.stringify(a)})};var f={listAccounts:()=>o("/api/kids/accounts"),createAccount:a=>o("/api/kids/accounts",{method:"POST",body:JSON.stringify(a)}),updateRules:(a,e)=>o(`/api/kids/accounts/${a}/rules`,{method:"PATCH",body:JSON.stringify(e)}),recordMovement:(a,e)=>o(`/api/kids/accounts/${a}/movements`,{method:"POST",body:JSON.stringify(e)})};var H={send:a=>o("/api/contact",{method:"POST",body:JSON.stringify({...a,source:"landing"})})};var Y=document.getElementById("app"),Z={landing:x,home:R,login:()=>Promise.resolve().then(()=>(G(),U)).then(a=>a.LoginPage()),dashboard:F,bnpl:B,qr:E,kids:j,"kids-missions":M,"kids-tutor":Q,cards:J},r={view:"landing",access:!1,session:null,score:null,aiRate:null,cards:[],insights:null,bnplOrders:[],merchants:[],qrResult:null,kids:{guardian:null,accounts:[]}},p=()=>{if(!Y)return;let a=r.access?I({current:r.view,views:Object.keys(Z).filter(t=>t!=="landing")}):"";(async()=>{let t=Z[r.view]||x,s=typeof t=="function"&&t.constructor.name==="AsyncFunction"?await t(r):typeof t=="function"?t(r):R(r);Y.innerHTML=q({nav:a,content:s,palette:K}),r.access&&document.querySelectorAll("[data-view]").forEach(l=>{l.addEventListener("click",()=>{r.view=l.dataset.view,p()})});let i=document.getElementById("login-form");i&&i.addEventListener("submit",async l=>{l.preventDefault();let c=new FormData(i),d=c.get("email"),v=c.get("password");try{let u=await S.login(d,v),y=u?.tokens?.accessToken,L=u?.user;y?(w(y),r.session={token:y,user:L},localStorage.setItem("cmlayer_token",y),localStorage.setItem("cmlayer_user",JSON.stringify(L)),r.view="dashboard",await aa(),p()):alert("No se recibi\xF3 token")}catch(u){alert(u.message||"No se pudo iniciar sesi\xF3n")}});let n=document.getElementById("create-kid-form");n&&n.addEventListener("submit",async l=>{l.preventDefault();let c=new FormData(n);try{await f.createAccount({childName:c.get("childName"),nickname:c.get("nickname"),currency:c.get("currency")||"DOP"}),await N(),p()}catch(d){alert(d.message||"No se pudo crear la cuenta Kids")}}),document.querySelectorAll(".kid-rules-form").forEach(l=>{l.addEventListener("submit",async c=>{c.preventDefault();let d=new FormData(l),v=l.dataset.childId;try{await f.updateRules(v,{maxAmount:Number(d.get("maxAmount")||0),allowedCategories:d.get("allowedCategories")?.split(",").map(u=>u.trim()).filter(Boolean)||[],blockedCategories:d.get("blockedCategories")?.split(",").map(u=>u.trim()).filter(Boolean)||[]}),await N(),p()}catch(u){alert(u.message||"No se pudo actualizar reglas")}})});let m=document.getElementById("kid-movement-form");m&&m.addEventListener("submit",async l=>{l.preventDefault();let c=new FormData(m),d=c.get("childId");try{await f.recordMovement(d,{amount:Number(c.get("amount")||0),category:c.get("category")||"",description:c.get("description")||""}),await N(),p()}catch(v){alert(v.message||"No se pudo registrar movimiento")}});let g=document.getElementById("contact-form");g&&g.addEventListener("submit",async l=>{l.preventDefault();let c=new FormData(g),d=document.getElementById("contact-status");d.textContent="Enviando...";try{await H.send({name:c.get("name"),email:c.get("email"),message:c.get("message")}),d.textContent="Mensaje enviado. Gracias por contactarnos.",g.reset()}catch(v){d.textContent=v.message||"No se pudo enviar. Intenta m\xE1s tarde."}});let b=document.getElementById("btn-access-login");b&&b.addEventListener("click",()=>{r.view="login",p()})})()},aa=async()=>{if(r.session?.token)try{let a=await S.me();r.session.user=a?.user||r.session.user,await la(),await da(),await C(),await pa(),await O(),await N()}catch{localStorage.removeItem("cmlayer_token"),localStorage.removeItem("cmlayer_user"),r.session=null,w(null),r.view="login"}},la=async()=>{if(r.session?.token)try{let a=await z.get();r.score=a}catch{r.score=null}},da=async()=>{if(r.session?.token)try{let a=await V.get();r.aiRate=a}catch{r.aiRate=null}},C=async()=>{if(r.session?.token)try{let a=await o("/api/cards");r.cards=a||[]}catch{r.cards=[]}},pa=async()=>{if(r.session?.token)try{let a=await _.get();r.insights=a}catch{r.insights=null}},O=async()=>{if(r.session?.token)try{let[a,e]=await Promise.all([$.listOrders(),$.listMerchants()]);r.bnplOrders=a||[],r.merchants=e||[]}catch{r.bnplOrders=[],r.merchants=[]}},N=async()=>{if(r.session?.token)try{let a=await f.listAccounts();r.kids=a||{guardian:null,accounts:[]}}catch{r.kids={guardian:null,accounts:[]}}},W=async a=>{if(r.session?.token)try{let e=await D.scan(a);r.qrResult=e}catch(e){throw r.qrResult={error:e.message||"QR inv\xE1lido"},e}},X=async a=>{if(!r.session?.token)return;let e=await D.createBnpl(a);return await O(),e},ma=async()=>{let e=new URLSearchParams(window.location.search).get("access")==="true";r.access=e,r.view=e?"login":"landing";let t=localStorage.getItem("cmlayer_token"),s=localStorage.getItem("cmlayer_user");t&&(w(t),r.session={token:t,user:s?JSON.parse(s):null},await aa(),r.view=e?"dashboard":"landing"),p()};ma();document.addEventListener("click",async a=>{let e=a.target?.dataset?.action;if(e){if(e==="mfa")try{await P.request();let t=prompt("Ingresa el c\xF3digo MFA (mock 6 d\xEDgitos)");t&&(await P.verify(t),alert("MFA verificado"))}catch(t){alert(t.message||"Error MFA")}if(e==="bind-device")try{let t=prompt("Nombre del dispositivo");await P.bindDevice(t||"device"),alert("Dispositivo vinculado (mock)")}catch(t){alert(t.message||"Error vinculando dispositivo")}if(e==="freeze-card"){let t=a.target.dataset.cardId;if(!t)return;try{await A.freeze(t),await C(),alert("Tarjeta congelada"),p()}catch(s){alert(s.message||"No se pudo congelar la tarjeta")}}if(e==="unfreeze-card"){let t=a.target.dataset.cardId;if(!t)return;try{await A.unfreeze(t),await C(),alert("Tarjeta activada"),p()}catch(s){alert(s.message||"No se pudo activar la tarjeta")}}}});document.addEventListener("submit",async a=>{if(a.target?.id==="bnpl-form"){a.preventDefault();let e=new FormData(a.target),t={merchantId:e.get("merchantId")||void 0,amount:Number(e.get("amount")||0),installments:e.get("installments"),description:e.get("description")};try{await $.createOrder(t),await O(),alert("BNPL creado"),p()}catch(s){alert(s.message||"Error creando BNPL")}}if(a.target?.id==="bnpl-qr-form"){a.preventDefault();let t=new FormData(a.target).get("qrData");try{let s=JSON.parse(t);await W(s),await X(s),alert("BNPL v\xEDa QR creado"),p()}catch(s){alert(s.message||"Error con QR BNPL")}}if(a.target?.id==="qr-scan-form"){a.preventDefault();let t=new FormData(a.target).get("qrData");try{let s=JSON.parse(t);await W(s),alert("QR v\xE1lido"),p()}catch(s){alert(s.message||"QR inv\xE1lido")}}if(a.target?.id==="qr-create-bnpl-form"){a.preventDefault();let t=new FormData(a.target).get("qrData");try{let s=JSON.parse(t);await X(s),alert("BNPL creado desde QR"),p()}catch(s){alert(s.message||"Error creando BNPL desde QR")}}});
