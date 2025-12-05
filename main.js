var W=Object.defineProperty;var X=(a,e)=>()=>(a&&(e=a(a=0)),e);var Y=(a,e)=>{for(var s in e)W(a,s,{get:e[s],enumerable:!0})};var z={};Y(z,{LoginPage:()=>ra});var ra,V=X(()=>{ra=()=>`
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
`});var O=({nav:a,content:e})=>`
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
`;var C=({current:a,views:e})=>`
  <nav class="tabs">
    ${e.map(s=>`
      <button class="tab ${a===s?"active":""}" data-view="${s}">
        ${s.replace(/-/g," ")}
      </button>`).join("")}
  </nav>
`;var f=()=>`
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
`;var q=(a={})=>{let e=a.score?.score?.score??"\u2014",s=a.aiRate?.annualRate?`${(a.aiRate.annualRate*100).toFixed(2)}%`:"\u2014",t=a.insights;return`
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
`};var g=a=>`RD$ ${Number(a||0).toFixed(2)}`,L=(a,e)=>{let s=(a.installments||[]).reduce((p,l)=>p+Number(l.amount||0),0),t=e?.annualRate||null,i=t?Number(((a.amount||0)*(t/12)).toFixed(2)):0,n=Number((s+i).toFixed(2));return{installmentTotal:s,rate:t,estimatedFee:i,total:n}},aa=(a=[],e)=>{if(!a.length)return`
      <div class="card highlight">
        <p class="tag">Desglose transparente</p>
        <p class="muted">Crea un BNPL para ver el calendario de cuotas.</p>
      </div>
    `;let s=a[0],t=L(s,e);return`
    <div class="card highlight">
      <p class="tag">Desglose transparente</p>
      <div class="grid two">
        <div>
          <p class="muted">Monto</p>
          <p class="label">${g(s.amount)} \xB7 ${s.installments?.length||0} cuotas</p>
          <p class="muted">Total cuotas: ${g(t.installmentTotal)}</p>
        </div>
        <div>
          <p class="muted">IA Rate aplicada</p>
          <p class="label">${t.rate?`${(t.rate*100).toFixed(2)}%`:"Pendiente"}</p>
          <p class="muted">Fee estimado: ${g(t.estimatedFee)}</p>
        </div>
      </div>
      <ul class="bullets">
        ${(s.installments||[]).map(i=>`<li>Cuota ${i.number} \xB7 vence ${i.dueDate} \xB7 RD$ ${Number(i.amount).toFixed(2)} (${i.status})</li>`).join("")}
        <li class="muted">Impacto en score: <span class="positive">paga a tiempo (+5)</span> \xB7 <span class="negative">atrasos (-8)</span></li>
        <li class="muted">Total estimado con fee: ${g(t.total)}</li>
      </ul>
    </div>
  `},ea=()=>`
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
`,I=(a={})=>{let e=a.bnplOrders||[],s=a.merchants||[],t=a.aiRate;return`
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
        ${aa(e,t)}
      </div>
      ${ea()}
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
        ${e.length?e.map(n=>{let p=L(n,t),l=n.metadata?.source==="qr";return`
            <div class="goal">
              <div class="goal-head">
                <p>${n.metadata?.merchantName||"Comercio"}</p>
                <p class="goal-amount">RD$ ${Number(n.amount).toFixed(2)}</p>
              </div>
              <p class="muted">${n.installments} cuotas \xB7 ${n.status} ${l?'<span class="pill">Desde QR</span>':""}</p>
              <p class="muted">IA rate: ${p.rate?`${(p.rate*100).toFixed(2)}%`:"Pendiente"} \xB7 Fee estimado ${g(p.estimatedFee)} \xB7 Total ${g(p.total)}</p>
              <ul class="bullets">
                ${(n.installments||[]).map(c=>`<li>Cuota ${c.number} \xB7 vence ${c.dueDate} \xB7 RD$ ${Number(c.amount).toFixed(2)} (${c.status})</li>`).join("")}
                <li class="muted">Impacto score: <span class="positive">on-time +5</span> \xB7 <span class="negative">late -8</span></li>
              </ul>
            </div>
          `}).join(""):'<p class="muted">A\xFAn no tienes \xF3rdenes BNPL.</p>'}
      </div>
    </section>
  `};var F=(a={})=>{let e=a.qrResult;return`
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
  `};var T=(a={})=>{let s=(a.kids||{accounts:[]}).accounts||[];return`
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
  `};var B=()=>`
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
`;var E=(a={})=>{let s=(a.kids||{accounts:[]}).accounts||[];return`
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
  `};var Q=(a={})=>{let e=a.cards?.[0];return`
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
  `};var j={background:"#050b18",card:"rgba(255,255,255,0.03)",accent:"#4fd1ff",accent2:"#1a6bff",text:"#eaf1ff",muted:"#9ab3d5"};var ta=window.API_BASE||"",R=null,y=a=>{R=a||null},sa=(a={})=>{let e={"Content-Type":"application/json",...a};return R&&(e.Authorization=`Bearer ${R}`),e},o=async(a,e={})=>{let s=await fetch(`${ta}${a}`,{...e,headers:sa(e.headers||{})}),t=await s.text(),i=t?JSON.parse(t):null;if(!s.ok){let n=new Error(i?.message||"Error en la API");throw n.status=s.status,n.data=i,n}return i},k={login:(a,e)=>o("/api/auth/login",{method:"POST",body:JSON.stringify({email:a,password:e})}),me:()=>o("/api/auth/me")},M={get:()=>o("/api/credit/score")},J={get:a=>o(`/api/ai/interest-rate${a?`?accountId=${a}`:""}`)},K={get:()=>o("/api/ai/insights")};var N={issue:a=>o("/api/cards/protect/issue",{method:"POST",body:JSON.stringify({accountId:a})}),freeze:a=>o(`/api/cards/protect/${a}/freeze`,{method:"POST"}),unfreeze:a=>o(`/api/cards/protect/${a}/unfreeze`,{method:"POST"})};var w={listMerchants:()=>o("/api/bnpl/merchants"),listOrders:()=>o("/api/bnpl/orders"),createOrder:({merchantId:a,amount:e,installments:s,description:t,qrData:i})=>o("/api/bnpl/orders",{method:"POST",body:JSON.stringify({merchantId:a||void 0,amount:e,installments:s,description:t,qrData:i})})};var $={request:()=>o("/api/layershield/mfa/request",{method:"POST"}),verify:a=>o("/api/layershield/mfa/verify",{method:"POST",body:JSON.stringify({code:a})}),bindDevice:a=>o("/api/layershield/mfa/bind-device",{method:"POST",body:JSON.stringify({deviceName:a})})};var x={scan:a=>o("/api/qr/scan",{method:"POST",body:JSON.stringify(a)}),createBnpl:a=>o("/api/qr/create-bnpl",{method:"POST",body:JSON.stringify(a)})};var v={listAccounts:()=>o("/api/kids/accounts"),createAccount:a=>o("/api/kids/accounts",{method:"POST",body:JSON.stringify(a)}),updateRules:(a,e)=>o(`/api/kids/accounts/${a}/rules`,{method:"PATCH",body:JSON.stringify(e)}),recordMovement:(a,e)=>o(`/api/kids/accounts/${a}/movements`,{method:"POST",body:JSON.stringify(e)})};var _=document.getElementById("app"),H={home:f,login:()=>Promise.resolve().then(()=>(V(),z)).then(a=>a.LoginPage()),dashboard:q,bnpl:I,qr:F,kids:T,"kids-missions":B,"kids-tutor":E,cards:Q},r={view:"home",session:null,score:null,aiRate:null,cards:[],insights:null,bnplOrders:[],merchants:[],qrResult:null,kids:{guardian:null,accounts:[]}},d=()=>{if(!_)return;let a=C({current:r.view,views:Object.keys(H)});(async()=>{let s=H[r.view]||f,t=typeof s=="function"&&s.constructor.name==="AsyncFunction"?await s(r):typeof s=="function"?s(r):f(r);_.innerHTML=O({nav:a,content:t,palette:j}),document.querySelectorAll("[data-view]").forEach(l=>{l.addEventListener("click",()=>{r.view=l.dataset.view,d()})});let i=document.getElementById("login-form");i&&i.addEventListener("submit",async l=>{l.preventDefault();let c=new FormData(i),u=c.get("email"),b=c.get("password");try{let m=await k.login(u,b),h=m?.tokens?.accessToken,A=m?.user;h?(y(h),r.session={token:h,user:A},localStorage.setItem("cmlayer_token",h),localStorage.setItem("cmlayer_user",JSON.stringify(A)),r.view="dashboard",await Z(),d()):alert("No se recibi\xF3 token")}catch(m){alert(m.message||"No se pudo iniciar sesi\xF3n")}});let n=document.getElementById("create-kid-form");n&&n.addEventListener("submit",async l=>{l.preventDefault();let c=new FormData(n);try{await v.createAccount({childName:c.get("childName"),nickname:c.get("nickname"),currency:c.get("currency")||"DOP"}),await P(),d()}catch(u){alert(u.message||"No se pudo crear la cuenta Kids")}}),document.querySelectorAll(".kid-rules-form").forEach(l=>{l.addEventListener("submit",async c=>{c.preventDefault();let u=new FormData(l),b=l.dataset.childId;try{await v.updateRules(b,{maxAmount:Number(u.get("maxAmount")||0),allowedCategories:u.get("allowedCategories")?.split(",").map(m=>m.trim()).filter(Boolean)||[],blockedCategories:u.get("blockedCategories")?.split(",").map(m=>m.trim()).filter(Boolean)||[]}),await P(),d()}catch(m){alert(m.message||"No se pudo actualizar reglas")}})});let p=document.getElementById("kid-movement-form");p&&p.addEventListener("submit",async l=>{l.preventDefault();let c=new FormData(p),u=c.get("childId");try{await v.recordMovement(u,{amount:Number(c.get("amount")||0),category:c.get("category")||"",description:c.get("description")||""}),await P(),d()}catch(b){alert(b.message||"No se pudo registrar movimiento")}})})()},Z=async()=>{if(r.session?.token)try{let a=await k.me();r.session.user=a?.user||r.session.user,await oa(),await ia(),await S(),await na(),await D(),await P()}catch{localStorage.removeItem("cmlayer_token"),localStorage.removeItem("cmlayer_user"),r.session=null,y(null),r.view="login"}},oa=async()=>{if(r.session?.token)try{let a=await M.get();r.score=a}catch{r.score=null}},ia=async()=>{if(r.session?.token)try{let a=await J.get();r.aiRate=a}catch{r.aiRate=null}},S=async()=>{if(r.session?.token)try{let a=await o("/api/cards");r.cards=a||[]}catch{r.cards=[]}},na=async()=>{if(r.session?.token)try{let a=await K.get();r.insights=a}catch{r.insights=null}},D=async()=>{if(r.session?.token)try{let[a,e]=await Promise.all([w.listOrders(),w.listMerchants()]);r.bnplOrders=a||[],r.merchants=e||[]}catch{r.bnplOrders=[],r.merchants=[]}},P=async()=>{if(r.session?.token)try{let a=await v.listAccounts();r.kids=a||{guardian:null,accounts:[]}}catch{r.kids={guardian:null,accounts:[]}}},U=async a=>{if(r.session?.token)try{let e=await x.scan(a);r.qrResult=e}catch(e){throw r.qrResult={error:e.message||"QR inv\xE1lido"},e}},G=async a=>{if(!r.session?.token)return;let e=await x.createBnpl(a);return await D(),e},ca=async()=>{let a=localStorage.getItem("cmlayer_token"),e=localStorage.getItem("cmlayer_user");a&&(y(a),r.session={token:a,user:e?JSON.parse(e):null},await Z(),r.view="dashboard"),d()};ca();document.addEventListener("click",async a=>{let e=a.target?.dataset?.action;if(e){if(e==="mfa")try{await $.request();let s=prompt("Ingresa el c\xF3digo MFA (mock 6 d\xEDgitos)");s&&(await $.verify(s),alert("MFA verificado"))}catch(s){alert(s.message||"Error MFA")}if(e==="bind-device")try{let s=prompt("Nombre del dispositivo");await $.bindDevice(s||"device"),alert("Dispositivo vinculado (mock)")}catch(s){alert(s.message||"Error vinculando dispositivo")}if(e==="freeze-card"){let s=a.target.dataset.cardId;if(!s)return;try{await N.freeze(s),await S(),alert("Tarjeta congelada"),d()}catch(t){alert(t.message||"No se pudo congelar la tarjeta")}}if(e==="unfreeze-card"){let s=a.target.dataset.cardId;if(!s)return;try{await N.unfreeze(s),await S(),alert("Tarjeta activada"),d()}catch(t){alert(t.message||"No se pudo activar la tarjeta")}}}});document.addEventListener("submit",async a=>{if(a.target?.id==="bnpl-form"){a.preventDefault();let e=new FormData(a.target),s={merchantId:e.get("merchantId")||void 0,amount:Number(e.get("amount")||0),installments:e.get("installments"),description:e.get("description")};try{await w.createOrder(s),await D(),alert("BNPL creado"),d()}catch(t){alert(t.message||"Error creando BNPL")}}if(a.target?.id==="bnpl-qr-form"){a.preventDefault();let s=new FormData(a.target).get("qrData");try{let t=JSON.parse(s);await U(t),await G(t),alert("BNPL v\xEDa QR creado"),d()}catch(t){alert(t.message||"Error con QR BNPL")}}if(a.target?.id==="qr-scan-form"){a.preventDefault();let s=new FormData(a.target).get("qrData");try{let t=JSON.parse(s);await U(t),alert("QR v\xE1lido"),d()}catch(t){alert(t.message||"QR inv\xE1lido")}}if(a.target?.id==="qr-create-bnpl-form"){a.preventDefault();let s=new FormData(a.target).get("qrData");try{let t=JSON.parse(s);await G(t),alert("BNPL creado desde QR"),d()}catch(t){alert(t.message||"Error creando BNPL desde QR")}}});
