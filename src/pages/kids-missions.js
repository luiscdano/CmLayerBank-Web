export const KidsMissionsPage = (state = {}) => {
  const accounts = state.kids?.accounts || [];
  return `
    <section class="grid two">
      <div class="card">
        <p class="tag">Misiones y badges</p>
        ${
          accounts.length
            ? accounts
                .map(
                  (a) => `
          <div class="goal">
            <p class="label">${a.childName} — badges: ${(a.badges || []).join(', ') || '—'}</p>
            <p class="muted">Misión: mantener gasto < RD$${(a.spendingRules?.maxAmount || 0).toFixed(
              0
            )} · ${(a.insights || []).join(' · ') || 'Sin alertas'}</p>
            <ul class="bullets">
              ${(a.goals || [])
                .map(
                  (g) =>
                    `<li>${g.title} · meta RD$ ${Number(g.targetAmount || 0).toFixed(0)} · progreso ${
                      g.progress || 0
                    } · ${g.status}</li>`
                )
                .join('') || '<li>Sin metas</li>'}
            </ul>
          </div>
        `
                )
                .join('')
            : '<p class="muted">Aún no hay cuentas Kids.</p>'
        }
      </div>
      <div class="card">
        <p class="tag">Metas</p>
        <p class="muted">Integra ChildGoal al listar metas desde el backend.</p>
        <ul class="bullets">
          <li>Meta laptop: RD$10,000 · progreso 20%</li>
          <li>Meta libros: RD$2,000 · progreso 60%</li>
        </ul>
      </div>
    </section>
  `;
};
