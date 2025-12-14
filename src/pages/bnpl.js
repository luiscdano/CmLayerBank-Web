const fmt = (val, ghost) => (ghost ? '••••' : `RD$ ${Number(val || 0).toFixed(2)}`);

const summarize = (order, aiRate) => {
  const installmentTotal = (order.installments || []).reduce(
    (acc, i) => acc + Number(i.amount || 0),
    0
  );
  const rate = aiRate?.annualRate || null;
  const estimatedFee = rate ? Number(((order.amount || 0) * (rate / 12)).toFixed(2)) : 0;
  const total = Number((installmentTotal + estimatedFee).toFixed(2));
  return { installmentTotal, rate, estimatedFee, total };
};

const breakdownCard = (orders = [], aiRate, ghost) => {
  if (!orders.length) {
    return `
      <div class="card highlight">
        <p class="tag">Desglose transparente</p>
        <p class="muted">Crea un BNPL para ver el calendario de cuotas.</p>
      </div>
    `;
  }
  const latest = orders[0];
  const summary = summarize(latest, aiRate);
  return `
    <div class="card highlight">
      <p class="tag">Desglose transparente</p>
      <div class="grid two">
        <div>
          <p class="muted">Monto</p>
          <p class="label sensitive">${fmt(latest.amount, ghost)} · ${latest.installments?.length || 0} cuotas</p>
          <p class="muted">Total cuotas: <span class="sensitive">${fmt(summary.installmentTotal, ghost)}</span></p>
        </div>
        <div>
          <p class="muted">IA Rate aplicada</p>
          <p class="label">${summary.rate ? `${(summary.rate * 100).toFixed(2)}%` : 'Pendiente'}</p>
          <p class="muted">Fee estimado: <span class="sensitive">${fmt(summary.estimatedFee, ghost)}</span></p>
        </div>
      </div>
      <ul class="bullets">
        ${(latest.installments || [])
          .map(
            (i) =>
              `<li>Cuota ${i.number} · vence ${i.dueDate} · RD$ ${Number(i.amount).toFixed(
                2
              )} (${i.status})</li>`
          )
          .join('')}
        <li class="muted">Impacto en score: <span class="positive">paga a tiempo (+5)</span> · <span class="negative">atrasos (-8)</span></li>
        <li class="muted">Total estimado con fee: ${fmt(summary.total)}</li>
      </ul>
    </div>
  `;
};

const timeline = () => `
  <div class="card">
    <p class="tag">Seguimiento de cuotas</p>
    <div class="timeline">
      <div class="step active">
        <span class="dot"></span>
        <div>
          <p class="label">Orden creada</p>
          <p class="muted">Se generó el calendario Pay in 3/4</p>
        </div>
      </div>
      <div class="step">
        <span class="dot"></span>
        <div>
          <p class="label">Próxima cuota</p>
          <p class="muted">Recordatorios activados</p>
        </div>
      </div>
      <div class="step">
        <span class="dot"></span>
        <div>
          <p class="label">Score</p>
          <p class="muted">Puntualidad suma al CmLayerScore™</p>
        </div>
      </div>
    </div>
  </div>
`;

export const BnplPage = (state = {}) => {
  const orders = state.bnplOrders || [];
  const merchants = state.merchants || [];
  const aiRate = state.aiRate;
  const ghost = state.ghostMode;
  const products = state.marketplace || [];
  const merchantOptions = merchants
    .map((m) => `<option value="${m.id}">${m.name} · ${m.category}</option>`)
    .join('');
  const productOptions = [
    '<option value="">Selecciona producto</option>',
    ...products.map(
      (p) =>
        `<option value="${p.id}" data-merchant="${p.merchantId || ''}" data-price="${p.price}" data-currency="${
          p.currency
        }" data-name="${p.name}">${p.name} · ${p.currency} ${Number(p.price).toFixed(2)}</option>`
    )
  ].join('');
  return `
    <section class="grid two">
      <div class="card">
        <p class="tag">Pay in 3 / Pay in 4</p>
        <form class="form grid two" id="bnpl-form">
          <label>Producto
            <select name="productId" id="bnpl-product-select">${productOptions}</select>
          </label>
          <label>Comercio
            <select name="merchantId">${merchantOptions}</select>
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
          <label>Descripción
            <input type="text" name="description" placeholder="Compra BNPL" />
          </label>
          <button class="btn primary" type="submit">Crear BNPL</button>
        </form>
        ${breakdownCard(orders, aiRate, ghost)}
      </div>
      ${timeline()}
    </section>
  
    <section class="grid two">
      <div class="card">
        <p class="tag">QR-Pay Later</p>
        <form class="form" id="bnpl-qr-form">
          <label>Merchant ID
            <input type="text" name="merchantId" placeholder="UUID del comercio" required />
          </label>
          <label>Monto
            <input type="number" step="0.01" name="amount" placeholder="1200" required />
          </label>
          <label>Moneda
            <input type="text" name="currency" value="DOP" />
          </label>
          <label>Descripción
            <input type="text" name="description" placeholder="Compra BNPL" />
          </label>
          <label>Expira en (minutos)
            <input type="number" name="expiresMinutes" value="30" />
          </label>
          <button class="btn secondary" type="submit">Generar y pagar con QR</button>
        </form>
      </div>
      <div class="card">
        <p class="tag">Órdenes BNPL</p>
        ${
          orders.length
            ? orders
                .map(
                  (o) => {
                    const summary = summarize(o, aiRate);
                    const fromQr = o.metadata?.source === 'qr';
                    const hasPayments = (o.payments || []).length > 0;
                    return `
            <div class="goal">
              <div class="goal-head">
                <p>${o.metadata?.merchantName || 'Comercio'} · <span class="pill">${o.status}</span></p>
                <p class="goal-amount sensitive">${fmt(Number(o.amount), ghost)}</p>
              </div>
              <p class="muted">${o.installments} cuotas · ${o.status} ${
                      fromQr ? '<span class="pill">Desde QR</span>' : ''
                    }</p>
              <p class="muted">IA rate: ${
                summary.rate ? `${(summary.rate * 100).toFixed(2)}%` : 'Pendiente'
              } · Fee estimado <span class="sensitive">${fmt(summary.estimatedFee, ghost)}</span> · Total <span class="sensitive">${fmt(summary.total, ghost)}</span></p>
              <ul class="bullets">
                ${(o.installments || [])
                  .map(
                    (i) =>
                      `<li>Cuota ${i.number} · vence ${i.dueDate} · <span class="sensitive">${fmt(
                        Number(i.amount),
                        ghost
                      )}</span> (${i.status}) ${
                        i.status !== 'paid'
                          ? `<button class="chip primary" data-action="pay-installment" data-installment-id="${i.id}">Pagar</button>`
                          : ''
                      }</li>`
                  )
                  .join('')}
                <li class="muted">Impacto score: <span class="positive">on-time +5</span> · <span class="negative">late -8</span></li>
                ${
                  hasPayments
                    ? `<li class="muted">Pagos: ${(o.payments || [])
                        .map((p) => `${p.method || 'wallet'} ${p.amount} (${p.status})`)
                        .join(' · ')}</li>`
                    : ''
                }
              </ul>
            </div>
          `
                  }
                )
                .join('')
            : '<p class="muted">Aún no tienes órdenes BNPL.</p>'
        }
      </div>
    </section>
  `;
};
