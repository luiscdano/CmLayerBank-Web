export const TransactionsPage = (state = {}) => {
  const txs = state.transactions || [];
  return `
    <section class="card">
      <p class="tag">Movimientos</p>
      ${
        txs.length
          ? `<ul class="bullets">
          ${txs
            .map(
              (t) =>
                `<li><strong>${t.type}</strong> · RD$ ${Number(t.amount || 0).toFixed(
                  2
                )} · ${t.description || ''} · ${new Date(t.createdAt).toLocaleString()}</li>`
            )
            .join('')}
        </ul>`
          : '<p class="muted">Sin movimientos.</p>'
      }
      <form class="form" id="tx-form">
        <p class="tag">Registrar movimiento</p>
        <label>Tipo
          <select name="type">
            <option value="deposit">Depósito</option>
            <option value="withdraw">Retiro</option>
          </select>
        </label>
        <label>Cuenta ID <input type="text" name="accountId" required /></label>
        <label>Monto <input type="number" name="amount" step="0.01" required /></label>
        <label>Descripción <input type="text" name="description" /></label>
        <button class="btn primary" type="submit">Registrar</button>
      </form>
    </section>
  `;
};
