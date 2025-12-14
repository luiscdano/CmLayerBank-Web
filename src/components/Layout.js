export const appLayout = ({ nav, content, actions = '', bare = false, brand = 'CmLayerBank' }) => {
  if (bare) {
    return `
      <div class="app-bare">
        <header class="nav-premium">
          <div class="brand-premium">${brand}</div>
          <div class="nav-actions">
            ${actions}
          </div>
        </header>
        <main class="app-body bare-body">
          ${content}
        </main>
      </div>
    `;
  }

  return `
    <div class="shell app-shell">
      <header class="topbar">
        <div class="brand">
          <p class="eyebrow">CmLayerBank</p>
          <h2>Experiencia CmLayer</h2>
        </div>
        <div class="top-actions">
          ${actions}
        </div>
      </header>
      ${nav || ''}
      <main class="app-body">
        ${content}
      </main>
    </div>
  `;
};
