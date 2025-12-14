export const Nav = ({ current, views }) => `
  <nav class="tabs">
    ${views
      .map(
        (view) => `
      <button class="tab ${current === view ? 'active' : ''}" data-view="${view}">
        ${view.replace(/-/g, ' ')}
      </button>`
      )
      .join('')}
  </nav>
`;
