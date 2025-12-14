let toastContainer;
let loaderEl;

export const initFeedback = () => {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.style.position = 'fixed';
    toastContainer.style.top = '16px';
    toastContainer.style.right = '16px';
    toastContainer.style.zIndex = '9999';
    document.body.appendChild(toastContainer);
  }
  if (!loaderEl) {
    loaderEl = document.createElement('div');
    loaderEl.id = 'global-loader';
    loaderEl.style.position = 'fixed';
    loaderEl.style.inset = '0';
    loaderEl.style.background = 'rgba(0,0,0,0.35)';
    loaderEl.style.display = 'none';
    loaderEl.style.alignItems = 'center';
    loaderEl.style.justifyContent = 'center';
    loaderEl.style.color = '#fff';
    loaderEl.style.zIndex = '9998';
    loaderEl.innerHTML = '<div class="loader-card">Cargando...</div>';
    document.body.appendChild(loaderEl);
  }
};

export const showToast = (message, type = 'info', ttl = 3200) => {
  if (!toastContainer) initFeedback();
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toast.style.marginBottom = '8px';
  toast.style.padding = '10px 12px';
  toast.style.borderRadius = '8px';
  toast.style.background =
    type === 'error' ? '#b3261e' : type === 'success' ? '#0f9d58' : '#1f6feb';
  toast.style.color = '#fff';
  toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), ttl);
};

export const setLoading = (active, text = 'Cargando...') => {
  if (!loaderEl) initFeedback();
  loaderEl.innerHTML = `<div class="loader-card">${text}</div>`;
  loaderEl.style.display = active ? 'flex' : 'none';
};
