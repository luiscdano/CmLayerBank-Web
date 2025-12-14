const mask = (state, value) => (state.ghostMode ? '••••' : `RD$ ${Number(value || 0).toFixed(2)}`);

export const DashboardPage = (state = {}) => {
  const accounts = state.accounts || [];
  const totalBalance = accounts.reduce((sum, a) => sum + Number(a.balance || 0), 0);
  const scoreValue = state.score?.score?.score ?? '—';
  const aiRate = state.aiRate?.annualRate
    ? `${(state.aiRate.annualRate * 100).toFixed(2)}%`
    : '—';
  const insights = state.insights;
  const deals = state.deals || [];
  return `
  <section class="grid two">
    <div class="card metric-card">
      <p class="tag">Saldo</p>
      <h1 class="sensitive">${mask(state, totalBalance)}</h1>
      <p class="muted">${accounts.length} cuentas</p>
      ${
        accounts.length
          ? `<ul class="bullets">${accounts
              .map((a) => `<li>${a.name}: <span class="sensitive">${mask(
                state,
                Number(a.balance || 0)
              )}</span></li>`)
              .join('')}</ul>`
          : '<p class="muted">Crea una cuenta para ver movimientos.</p>'
      }
    </div>
    <div class="card metric-card">
      <p class="tag">CmLayerScore™</p>
      <div class="score-chip">${scoreValue}</div>
      <p class="muted">Score por comportamiento (placeholder)</p>
    </div>
  </section>

  <section class="grid two">
    <div class="card">
      <div class="section-header">
        <p class="tag">IA Interest Rate™</p>
        <span class="pill">Dinámico</span>
      </div>
      <h2>${aiRate}</h2>
      <p class="muted">Rango IA según comportamiento y score.</p>
    </div>
    <div class="card">
      <p class="tag">Acciones rápidas</p>
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
      <p class="muted">Lista de cuotas y calendario (sin datos aún).</p>
    </div>
    <div class="card">
      <p class="tag">Alertas</p>
      ${
        insights
          ? `
        <ul class="bullets">
          <li>Net 30d: ${insights.summary ? insights.summary.net : '—'}</li>
          ${(insights.alerts || []).map((a) => `<li>${a}</li>`).join('')}
        </ul>
        <p class="tag">Sugerencias</p>
        <ul class="bullets">
          ${(insights.suggestions || []).map((s) => `<li>${s}</li>`).join('')}
        </ul>
      `
          : '<p class="muted">Sin insights aún.</p>'
      }
    </div>
  </section>
  <section class="grid two">
    <div class="card">
      <p class="tag">Deals & Marketplace</p>
      ${
        deals.length
          ? `<ul class="bullets">${deals
              .map((d) => `<li>${d.title} · ${d.merchant} · ${d.cta || ''}</li>`)
              .join('')}</ul>`
          : '<p class="muted">Sin deals disponibles.</p>'
      }
    </div>
  </section>
`;
};
