export const KidsHomePage = (state = {}) => {
  const kids = state.kids || { accounts: [] };
  const accounts = kids.accounts || [];
  const ghost = state.ghostMode;
  return `
    <section class="grid two">
      <div class="card">
        <p class="tag">Kids & Teens — Cuentas</p>
        ${
          accounts.length
            ? accounts
                .map(
                  (a) => `
          <div class="goal">
            <div class="goal-head">
              <p>${a.childName} (${a.nickname || ''})</p>
              <p class="goal-amount sensitive">${ghost ? '••••' : `RD$ ${Number(a.balance || 0).toFixed(2)}`}</p>
            </div>
            <p class="muted">Reglas: max RD$ ${(a.spendingRules?.maxAmount || 0).toFixed(
              0
            )}, bloqueadas: ${(a.spendingRules?.blockedCategories || []).join(', ') || 'ninguna'}</p>
            <p class="muted">Badges: ${(a.badges || []).join(', ') || '—'}</p>
            <ul class="bullets">
              ${(a.insights || []).map((msg) => `<li>${msg}</li>`).join('')}
            </ul>
            <div class="muted">Metas:
              <ul class="bullets">
                ${(a.goals || [])
                  .map(
                    (g) =>
                      `<li>${g.title} · RD$ ${Number(g.targetAmount || 0).toFixed(0)} · progreso ${
                        g.progress || 0
                      } · ${g.status}</li>`
                  )
                  .join('') || '<li>Sin metas</li>'}
              </ul>
            </div>
          </div>
        `
                )
                .join('')
            : '<p class="muted">No hay cuentas Kids aún.</p>'
        }
      </div>
      <div class="card">
        <p class="tag">Registrar movimiento</p>
        <form class="form" id="kid-movement-form">
          <label>Cuenta
            <select name="childId">
              ${accounts.map((a) => `<option value="${a.id}">${a.childName} (${a.nickname || ''})</option>`).join('')}
            </select>
          </label>
          <label>Monto
            <input type="number" step="0.01" name="amount" required />
          </label>
          <label>Categoría
            <input type="text" name="category" placeholder="ej: food, tech" />
          </label>
          <label>Descripción
            <input type="text" name="description" placeholder="Compra pequeña" />
          </label>
          <button class="btn primary" type="submit">Registrar</button>
        </form>
      </div>
    </section>
  `;
};
