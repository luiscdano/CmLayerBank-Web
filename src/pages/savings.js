export const SavingsPage = (state = {}) => {
  const goals = state.savingsGoals || [];
  return `
    <section class="grid two">
      <div class="card">
        <p class="tag">Ahorros automáticos</p>
        <form class="form" id="autosave-form">
          <label>Nombre <input type="text" name="name" required /></label>
          <label>Monto (RD$) <input type="number" name="amount" step="0.01" required /></label>
          <label>Frecuencia
            <select name="frequency">
              <option value="daily">Diario</option>
              <option value="weekly">Semanal</option>
              <option value="monthly">Mensual</option>
            </select>
          </label>
          <button class="btn primary" type="submit">Crear autosave</button>
        </form>
      </div>
      <div class="card">
        <p class="tag">Metas</p>
        <form class="form" id="goal-form">
          <label>Título <input type="text" name="title" required /></label>
          <label>Monto objetivo <input type="number" name="targetAmount" step="0.01" required /></label>
          <label>Descripción <input type="text" name="description" /></label>
          <button class="btn secondary" type="submit">Crear meta</button>
        </form>
        <p class="muted">Metas actuales:</p>
        ${
          goals.length
            ? goals
                .map(
                  (g) => `
            <div class="goal">
              <div class="goal-head">
                <p>${g.title}</p>
                <p class="goal-amount">RD$ ${Number(g.targetAmount || 0).toFixed(2)}</p>
              </div>
              <p class="muted">Progreso ${g.progress || 0} · ${g.description || ''}</p>
              <div class="actions">
                <input type="number" name="contrib-${g.id}" placeholder="Monto a aportar" step="0.01" />
                <button class="chip primary" data-action="contribute-goal" data-goal-id="${g.id}">Aportar</button>
                <button class="chip ghost" data-action="toggle-power-save" data-goal-id="${g.id}">
                  ${g.powerSaveEnabled ? 'Desactivar' : 'Activar'} power save
                </button>
              </div>
            </div>
          `
                )
                .join('')
            : '<p class="muted">Sin metas</p>'
        }
      </div>
    </section>
  `;
};
