export const MicroloansPage = (state = {}) => {
  const loans = state.microloans || [];
  const accounts = state.accounts || [];
  const accountSelect = accounts.length
    ? `<select name="accountId">
        ${accounts.map((a) => `<option value="${a.id}">${a.name} (${a.id.slice(0, 6)})</option>`).join('')}
      </select>`
    : '<input type="text" name="accountId" placeholder="ID de cuenta" />';
  return `
    <section class="grid two">
      <div class="card">
        <p class="tag">Solicitar microcrédito</p>
        <form class="form" id="microloan-form">
          <label>Monto <input type="number" name="amount" min="500" max="20000" required /></label>
          <label>Plazo (meses) <input type="number" name="termMonths" value="6" /></label>
          <label>Cuenta destino
            ${accountSelect}
          </label>
          <button class="btn primary" type="submit">Solicitar</button>
        </form>
      </div>
      <div class="card">
        <p class="tag">Préstamos</p>
        ${
          loans.length
            ? loans
                .map(
                  (l) => `
          <div class="goal">
            <div class="goal-head">
              <p>Loan ${l.id.slice(0, 6)} · ${l.status}</p>
              <p class="goal-amount">RD$ ${Number(l.amount || 0).toFixed(2)}</p>
            </div>
            <p class="muted">Interés ${l.interestRate || 12}% · Plazo ${l.termMonths}m</p>
            <ul class="bullets">
              ${(l.payments || [])
                .map((p) => `<li>${p.status} · ${p.amount} · vence ${p.dueDate}</li>`)
                .join('') || '<li>Sin cuotas</li>'}
            </ul>
            <div class="actions">
              ${
                l.status === 'approved'
                  ? `<button class="chip primary" data-action="disburse-loan" data-loan-id="${l.id}">Desembolsar</button>`
                  : ''
              }
              ${
                l.status === 'pending'
                  ? `<button class="chip secondary" data-action="evaluate-loan" data-loan-id="${l.id}">Evaluar</button>`
                  : ''
              }
              ${
                (l.payments || []).some((p) => p.status !== 'paid')
                  ? `<button class="chip ghost" data-action="repay-loan" data-loan-id="${l.id}" data-payment-id="${
                      (l.payments || []).find((p) => p.status !== 'paid')?.id || ''
                    }">Pagar cuota</button>`
                  : ''
              }
            </div>
            <label class="muted">Cuenta para pagos/desembolso
              ${
                accounts.length
                  ? `<select name="accountId-${l.id}">${accounts
                      .map((a) => `<option value="${a.id}">${a.name}</option>`)
                      .join('')}</select>`
                  : `<input type="text" name="accountId-${l.id}" placeholder="ID de cuenta" />`
              }
            </label>
          </div>
        `
                )
                .join('')
            : '<p class="muted">No hay préstamos aún.</p>'
        }
      </div>
    </section>
  `;
};
