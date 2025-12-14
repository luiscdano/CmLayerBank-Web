export const DealsPage = (state = {}) => {
  const deals = state.deals || [];
  return `
    <section class="grid two">
      <div class="card">
        <p class="tag">CmLayer Deals</p>
        ${
          deals.length
            ? deals
                .map(
                  (d) => `
          <div class="goal">
            <div class="goal-head">
              <p>${d.title}</p>
              <p class="goal-amount">${d.tag || 'BNPL'}</p>
            </div>
            <p class="muted">${d.description}</p>
            <p class="muted">Categoría: ${d.category}</p>
            ${
              d.product
                ? `<p class="muted">Producto sugerido: ${d.product.name} · ${d.product.currency} ${Number(
                    d.product.price
                  ).toFixed(2)}</p>`
                : ''
            }
          </div>
        `
                )
                .join('')
            : '<p class="muted">Sin deals disponibles.</p>'
        }
      </div>
      <div class="card">
        <p class="tag">Crear deal (admin)</p>
        <form class="form" id="deal-form">
          <label>Título <input type="text" name="title" required /></label>
          <label>Categoría <input type="text" name="category" value="retail" /></label>
          <label>Descripción <input type="text" name="description" /></label>
          <label>Tag <input type="text" name="tag" value="BNPL" /></label>
          <label>Merchant hint <input type="text" name="merchantHint" placeholder="la-sirena" /></label>
          <button class="btn primary" type="submit">Crear deal</button>
        </form>
      </div>
    </section>
  `;
};
