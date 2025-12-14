export const CardsPage = (state = {}) => {
  const card = state.cards?.[0];
  return `
    <section class="card">
      <p class="tag">Tarjeta virtual Protect</p>
      ${
        card
          ? `
        <div class="card highlight">
          <p class="label">CmLayer Protect</p>
          <p class="value">**** **** **** ${card.last4}</p>
          <p class="muted">CVV dinámico: ${card.metadata?.cvvPreview || '***'}</p>
          <div class="chips">
            <button class="chip secondary" data-action="freeze-card" data-card-id="${card.id}">Freeze</button>
            <button class="chip primary" data-action="unfreeze-card" data-card-id="${card.id}">Unfreeze</button>
          </div>
        </div>
      `
          : `<p class="muted">No tienes tarjeta Protect. Emite una desde dashboard o configuración.</p>`
      }
    </section>
  `;
};
