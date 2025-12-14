export const TutorKidsPage = (state = {}) => {
  const kids = state.kids || { accounts: [] };
  const accounts = kids.accounts || [];
  return `
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
        <p class="tag">Límites y categorías</p>
        ${
          accounts.length
            ? accounts
                .map(
                  (a) => `
          <form class="form kid-rules-form" data-child-id="${a.id}">
            <p class="muted">${a.childName} (${a.nickname || ''})</p>
            <label>Monto máximo por operación
              <input type="number" name="maxAmount" value="${a.spendingRules?.maxAmount || 500}" />
            </label>
            <label>Categorías permitidas (coma)
              <input type="text" name="allowedCategories" value="${(a.spendingRules?.allowedCategories || []).join(',')}" />
            </label>
            <label>Categorías bloqueadas (coma)
              <input type="text" name="blockedCategories" value="${(a.spendingRules?.blockedCategories || []).join(',')}" />
            </label>
            <button class="btn secondary" type="submit">Guardar reglas</button>
          </form>
        `
                )
                .join('')
            : '<p class="muted">Crea una cuenta para configurar reglas.</p>'
        }
      </div>
    </section>
  `;
};
