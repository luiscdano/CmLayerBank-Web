export const MarketplacePage = (state = {}) => {
  const products = state.marketplace || [];
  const merchants = state.merchants || [];
  const deals = state.deals || [];
  return `
    <section class="grid two">
      <div class="card">
        <p class="tag">Marketplace BNPL</p>
        <p class="muted">Selecciona un producto y crea un BNPL desde la vista BNPL.</p>
        <div class="pill-row">
          ${deals
            .map((d) => `<span class="chip ghost">${d.title || d.tag}</span>`)
            .join('')}
        </div>
        ${
          products.length
            ? products
                .map(
                  (p) => `
          <div class="goal">
            <div class="goal-head">
              <p>${p.name}</p>
              <p class="goal-amount">${p.currency} ${Number(p.price).toFixed(2)}</p>
            </div>
            <p class="muted">Merchant: ${p.merchantId || 'N/A'} · Estado: ${p.status}</p>
            <button class="chip primary" data-action="select-product" data-product-id="${p.id}">Usar en BNPL</button>
            <small class="muted">ID ${p.id}</small>
          </div>
        `
                )
                .join('')
            : '<p class="muted">No hay productos disponibles.</p>'
        }
      </div>
      <div class="card">
        <p class="tag">Admin productos</p>
        <form class="form" id="product-form">
          <label>Merchant
            <select name="merchantId">
              ${merchants.map((m) => `<option value="${m.id}">${m.name}</option>`).join('')}
            </select>
          </label>
          <label>Nombre <input type="text" name="name" required /></label>
          <label>Precio <input type="number" name="price" step="0.01" required /></label>
          <label>Moneda <input type="text" name="currency" value="DOP" /></label>
          <label>Estado
            <select name="status">
              <option value="active">Activo</option>
              <option value="inactive">Inactivo</option>
            </select>
          </label>
          <button class="btn primary" type="submit">Crear producto</button>
        </form>
        <p class="tag">Admin merchants</p>
        <form class="form" id="merchant-form">
          <label>Nombre <input type="text" name="name" required /></label>
          <label>Categoría <input type="text" name="category" value="retail" /></label>
          <button class="btn secondary" type="submit">Crear merchant</button>
        </form>
      </div>
    </section>
  `;
};
