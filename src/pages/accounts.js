export const AccountsPage = (state = {}) => {
  const accounts = state.accounts || [];
  return `
    <section class="grid two">
      <div class="card">
        <p class="tag">Cuentas</p>
        ${
          accounts.length
            ? accounts
                .map(
                  (a) => `
          <div class="goal">
            <div class="goal-head">
              <p>${a.name || 'Cuenta'} (${a.currency || 'DOP'})</p>
              <p class="goal-amount sensitive">RD$ ${Number(a.balance || 0).toFixed(2)}</p>
            </div>
            <p class="muted">${a.type || 'checking'}</p>
          </div>
        `
                )
                .join('')
            : '<p class="muted">No tienes cuentas aún.</p>'
        }
      </div>
      <div class="card">
        <p class="tag">Acciones</p>
        <form class="form" id="account-create-form">
          <label>Nombre <input type="text" name="name" required /></label>
          <label>Tipo <input type="text" name="type" value="checking" /></label>
          <label>Moneda <input type="text" name="currency" value="DOP" /></label>
          <button class="btn primary" type="submit">Crear cuenta</button>
        </form>
        <p class="muted">Luego podrás hacer depósitos/retiros en Movimientos.</p>
      </div>
    </section>
  `;
};
