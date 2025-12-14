const routeMap = {};
let onChangeCb = null;

export const defineRoutes = (entries = {}) => {
  Object.assign(routeMap, entries);
};

export const navigate = (view) => {
  const path = Object.entries(routeMap).find(([, v]) => v === view)?.[0] || '/';
  window.history.pushState({ view }, '', path);
  if (onChangeCb) onChangeCb(view);
};

export const initRouter = (initialView, cb) => {
  onChangeCb = cb;
  const path = window.location.pathname || '/';
  const foundView = routeMap[path] || initialView;
  window.addEventListener('popstate', (e) => {
    const nextView = e.state?.view || routeMap[window.location.pathname] || 'landing';
    if (onChangeCb) onChangeCb(nextView);
  });
  return foundView;
};
