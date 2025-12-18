import { appLayout } from './components/Layout.js';
import { Nav } from './components/Nav.js';
import { HomePage } from './pages/home.js';
import { DashboardPage } from './pages/dashboard.js';
import { BnplPage } from './pages/bnpl.js';
import { QrPage } from './pages/qr.js';
import { KidsHomePage } from './pages/kids-home.js';
import { KidsMissionsPage } from './pages/kids-missions.js';
import { TutorKidsPage } from './pages/kids-tutor.js';
import { CardsPage } from './pages/cards.js';
import { LandingPage, initLandingEffects, destroyLandingEffects } from './pages/landing.js';
import { LoginPage } from './pages/login.js';
import { MarketplacePage } from './pages/marketplace.js';
import { DealsPage } from './pages/deals.js';
import { NotificationsPage } from './pages/notifications.js';
import { AccountsPage } from './pages/accounts.js';
import { TransactionsPage } from './pages/transactions.js';
import { LayerShieldPage } from './pages/layershield.js';
import { MicroloansPage } from './pages/microloans.js';
import { SavingsPage } from './pages/savings.js';
import { palette } from './ui/theme.js';
import { api, authApi, scoreApi, aiRateApi, loadSession, setTokens } from './api/client.js';
import { protectCardApi } from './api/cards.js';
import { insightsApi } from './api/client.js';
import { bnplApi } from './api/bnpl.js';
import { mfaApi } from './api/layershield.js';
import { qrApi } from './api/qr.js';
import { kidsApi } from './api/kids.js';
import { contactApi } from './api/contact.js';
import { accountsApi } from './api/accounts.js';
import { microloansApi } from './api/microloans.js';
import { savingsApi } from './api/savings.js';
import { getState, setState, subscribe, resetState } from './store.js';
import { marketplaceApi } from './api/marketplace.js';
import { dealsApi } from './api/deals.js';
import { notificationsApi } from './api/notifications.js';
import { defineRoutes, initRouter, navigate } from './router.js';
import { initFeedback, showToast, setLoading } from './ui/feedback.js';

const app = document.getElementById('app');
initFeedback();

const GHOST_KEY = 'cmlayer_ghost_mode';

const ensureGhostCss = () => {
  if (document.getElementById('ghost-style')) return;
  const style = document.createElement('style');
  style.id = 'ghost-style';
  style.innerHTML = `
    body.ghost-mode .sensitive { filter: blur(8px); }
    #global-loader .loader-card { background: #111827; padding: 16px 20px; border-radius: 10px; font-weight: 600; }
  `;
  document.head.appendChild(style);
};

ensureGhostCss();

const ROUTES = {
  landing: LandingPage,
  home: HomePage,
  login: LoginPage,
  dashboard: DashboardPage,
  bnpl: BnplPage,
  qr: QrPage,
  kids: KidsHomePage,
  'kids-missions': KidsMissionsPage,
  'kids-tutor': TutorKidsPage,
  cards: CardsPage,
  accounts: AccountsPage,
  transactions: TransactionsPage,
  layershield: LayerShieldPage,
  microloans: MicroloansPage,
  savings: SavingsPage,
  marketplace: MarketplacePage,
  deals: DealsPage,
  notifications: NotificationsPage
};

defineRoutes({
  '/': 'landing',
  '/login': 'login',
  '/dashboard': 'dashboard',
  '/bnpl': 'bnpl',
  '/qr': 'qr',
  '/kids': 'kids',
  '/kids-missions': 'kids-missions',
  '/kids-tutor': 'kids-tutor',
  '/cards': 'cards',
  '/layershield': 'layershield',
  '/microloans': 'microloans',
  '/savings': 'savings',
  '/marketplace': 'marketplace',
  '/deals': 'deals',
  '/notifications': 'notifications'
});

const render = () => {
  const state = getState();
  if (!app) return;
  document.body.classList.toggle('ghost-mode', Boolean(state.ghostMode));
  const isAuthenticated = Boolean(state.session?.token);
  if (!isAuthenticated && state.view !== 'landing' && state.view !== 'login') {
    setState({ view: 'landing' });
    navigate('landing');
  }
  const isLanding = state.view === 'landing';
  const navViews = Object.keys(ROUTES).filter((v) => !['landing', 'login'].includes(v));
  const nav = isAuthenticated ? Nav({ current: state.view, views: navViews }) : '';
  const actions = isAuthenticated
    ? `<div class="top-actions">
        <span class="pill">${state.session?.user?.email || 'Admin'}</span>
        <button class="btn ghost" id="btn-logout">Cerrar sesión</button>
        <button class="btn ghost" data-action="ghost-mode">${state.ghostMode ? 'Mostrar' : 'Ocultar'} saldos</button>
      </div>`
    : `<div class="top-actions"><button class="btn pill-button" id="btn-top-login">Log In</button></div>`;
  const renderPage = async () => {
    const pageFactory = ROUTES[state.view] || LandingPage;
    const pageContent =
      typeof pageFactory === 'function' && pageFactory.constructor.name === 'AsyncFunction'
        ? await pageFactory(state)
        : typeof pageFactory === 'function'
        ? pageFactory(state)
        : HomePage(state);

    app.innerHTML = appLayout({
      nav,
      content: pageContent,
      palette,
      actions,
      bare: isLanding,
      brand: 'CMLAYERBANK'
    });

    document.querySelectorAll('[data-view]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.view;
        setState({ view: target });
        navigate(target);
        render();
      });
    });

    const loginAction = document.getElementById('btn-top-login');
    if (loginAction) {
      loginAction.addEventListener('click', () => {
        setState({ view: 'login' });
        navigate('login');
        render();
      });
    }

    const logoutAction = document.getElementById('btn-logout');
    if (logoutAction) {
      logoutAction.addEventListener('click', () => {
        authApi.logout();
        resetState();
        setState({ view: 'landing' });
        navigate('landing');
      });
    }

    if (state.view === 'landing') {
      initLandingEffects();
    } else {
      destroyLandingEffects();
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData(loginForm);
        const email = form.get('email');
        const password = form.get('password');
        try {
          const result = await authApi.login(email, password);
          const token = result?.tokens?.accessToken;
          const refresh = result?.tokens?.refreshToken;
          const user = result?.user;
          if (token) {
            setTokens(token, refresh);
            setState({ session: { token, refreshToken: refresh, user }, view: 'dashboard' });
            navigate('dashboard');
            await fetchSessionData();
            render();
          } else {
            alert('No se recibió token');
          }
        } catch (error) {
          alert(error.message || 'No se pudo iniciar sesión');
        }
      });
    }

    const createKidForm = document.getElementById('create-kid-form');
    if (createKidForm) {
      createKidForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData(createKidForm);
        try {
          await kidsApi.createAccount({
            childName: form.get('childName'),
            nickname: form.get('nickname'),
            currency: form.get('currency') || 'DOP'
          });
          await fetchKids();
          render();
        } catch (error) {
          alert(error.message || 'No se pudo crear la cuenta Kids');
        }
      });
    }

    document.querySelectorAll('.kid-rules-form').forEach((formEl) => {
      formEl.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData(formEl);
        const childId = formEl.dataset.childId;
        try {
          await kidsApi.updateRules(childId, {
            maxAmount: Number(form.get('maxAmount') || 0),
            allowedCategories: form.get('allowedCategories')?.split(',').map((c) => c.trim()).filter(Boolean) || [],
            blockedCategories: form.get('blockedCategories')?.split(',').map((c) => c.trim()).filter(Boolean) || []
          });
          await fetchKids();
          render();
        } catch (error) {
          alert(error.message || 'No se pudo actualizar reglas');
        }
      });
    });

    const movementForm = document.getElementById('kid-movement-form');
    if (movementForm) {
      movementForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData(movementForm);
        const childId = form.get('childId');
        try {
          await kidsApi.recordMovement(childId, {
            amount: Number(form.get('amount') || 0),
            category: form.get('category') || '',
            description: form.get('description') || ''
          });
          await fetchKids();
          render();
        } catch (error) {
          alert(error.message || 'No se pudo registrar movimiento');
        }
      });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData(contactForm);
        const statusEl = document.getElementById('contact-status');
        if (statusEl) statusEl.textContent = 'Enviando...';
        // Validación básica de email
        const email = (form.get('email') || '').toString().trim();
        const emailOk = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
        if (!emailOk) {
          if (statusEl) statusEl.textContent = 'Correo inválido';
          return;
        }
        try {
          const captcha = await ensureRecaptcha();
          await contactApi.send({
            name: form.get('name'),
            email,
            message: form.get('message'),
            honeypot: form.get('hp'),
            captchaToken: captcha || window?.grecaptcha?.getResponse?.() || form.get('captchaToken') || '',
            device: navigator?.userAgent || 'web',
            language: navigator?.language || navigator?.userLanguage || 'es'
          });
          if (statusEl) statusEl.textContent = 'Mensaje enviado';
          contactForm.reset();
        } catch (error) {
          if (statusEl) statusEl.textContent = error?.message || 'No se pudo enviar el mensaje';
        }
      });
    }
    const layershieldForm = document.getElementById('layershield-form');
    if (layershieldForm) {
      layershieldForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = new FormData(layershieldForm);
        try {
          await mfaApi.updateSettings({
            securityProfile: {
              mfaEnabled: form.get('mfaEnabled') === 'true',
              spendLimits: {
                perTransaction: Number(form.get('perTransaction') || 0),
                daily: Number(form.get('daily') || 0)
              }
            },
            hiddenAccounts: form.getAll('hiddenAccounts'),
            ghostMode: form.get('ghostMode') === 'on'
          });
          await fetchLayerShield();
          showToast('Seguridad actualizada', 'success');
          render();
        } catch (error) {
          showToast(error.message || 'No se pudo guardar seguridad', 'error');
        }
      });
    }
  };

  renderPage();
};

const fetchSessionData = async () => {
  if (!getState().session?.token) return;
  try {
    const me = await authApi.me();
    setState({ session: { ...getState().session, user: me?.user || getState().session?.user } });
    await Promise.all([
      fetchScore(),
      fetchAiRate(),
      fetchCards(),
      fetchInsights(),
      fetchBnpl(),
      fetchKids(),
      fetchAccounts(),
      fetchMarketplace(),
      fetchDeals(),
      fetchNotifications(),
      fetchLayerShield(),
      fetchMicroloans(),
      fetchSavings()
    ]);
  } catch (error) {
    authApi.logout();
    resetState();
    setState({ view: 'landing' });
  }
};

const fetchScore = async () => {
  if (!getState().session?.token) return;
  try {
    const data = await scoreApi.get();
    setState({ score: data });
  } catch {
    setState({ score: null });
  }
};

const fetchAiRate = async () => {
  if (!getState().session?.token) return;
  try {
    const data = await aiRateApi.get();
    setState({ aiRate: data });
  } catch {
    setState({ aiRate: null });
  }
};

const fetchCards = async () => {
  if (!getState().session?.token) return;
  try {
    const data = await api('/api/cards');
    setState({ cards: data || [] });
  } catch {
    setState({ cards: [] });
  }
};

const fetchInsights = async () => {
  if (!getState().session?.token) return;
  try {
    const data = await insightsApi.get();
    setState({ insights: data });
  } catch {
    setState({ insights: null });
  }
};

const fetchBnpl = async () => {
  if (!getState().session?.token) return;
  try {
    const [orders, merchants] = await Promise.all([
      bnplApi.listOrders(),
      bnplApi.listMerchants()
    ]);
    setState({ bnplOrders: orders || [], merchants: merchants || [] });
  } catch {
    setState({ bnplOrders: [], merchants: [] });
  }
};

const fetchKids = async () => {
  if (!getState().session?.token) return;
  try {
    const data = await kidsApi.listAccounts();
    setState({ kids: data || { guardian: null, accounts: [] } });
  } catch {
    setState({ kids: { guardian: null, accounts: [] } });
  }
};
const fetchAccounts = async () => {
  if (!getState().session?.token) return;
  try {
    const accounts = await accountsApi.list();
    setState({ accounts });
  } catch {
    setState({ accounts: [] });
  }
};
const fetchMarketplace = async () => {
  if (!getState().session?.token) return;
  try {
    const products = await marketplaceApi.listProducts();
    setState({ marketplace: products });
  } catch {
    setState({ marketplace: [] });
  }
};

const fetchDeals = async () => {
  if (!getState().session?.token) return;
  try {
    const res = await dealsApi.list();
    setState({ deals: res?.items || [] });
  } catch {
    setState({ deals: [] });
  }
};

const fetchNotifications = async () => {
  if (!getState().session?.token) return;
  try {
    const res = await notificationsApi.list();
    setState({ notifications: res?.items || [] });
  } catch {
    setState({ notifications: [] });
  }
};

const fetchLayerShield = async () => {
  if (!getState().session?.token) return;
  try {
    const res = await mfaApi.getSettings?.();
    if (res?.settings) {
      setState({
        layershield: {
          securityProfile: res.securityProfile || res.settings?.securityProfile || {},
          ghostMode: res.settings?.ghostMode || false,
          hiddenAccounts: res.settings?.hiddenAccounts || [],
          trustedDevices: res.trustedDevices || []
        }
      });
    }
  } catch {
    setState({ layershield: {} });
  }
};

const fetchMicroloans = async () => {
  if (!getState().session?.token) return;
  try {
    const res = await microloansApi.list();
    setState({ microloans: res || [] });
  } catch {
    setState({ microloans: [] });
  }
};

const fetchSavings = async () => {
  if (!getState().session?.token) return;
  try {
    const res = await savingsApi.listGoals();
    setState({ savingsGoals: res || [] });
  } catch {
    setState({ savingsGoals: [] });
  }
};
const scanQrPayload = async (qrData) => {
  if (!state.session?.token) return;
  try {
    const data = await qrApi.scan(qrData);
    state.qrResult = data;
  } catch (error) {
    state.qrResult = { error: error.message || 'QR inválido' };
    throw error;
  }
};

const createBnplFromQr = async (qrData) => {
  if (!state.session?.token) return;
  const data = await qrApi.createBnpl(qrData);
  await fetchBnpl();
  return data;
};

const ensureRecaptcha = async () => {
  const siteKey = window.RECAPTCHA_SITE_KEY;
  if (!siteKey) return '';
  if (!window.__recaptchaLoading) {
    window.__recaptchaLoading = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  try {
    await window.__recaptchaLoading;
    if (!window.grecaptcha) return '';
    return new Promise((resolve) => {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(siteKey, { action: 'contact' }).then(resolve);
      });
    });
  } catch (error) {
    console.warn('Recaptcha load failed', error);
    return '';
  }
};

const handleMfaError = async (error) => {
  if (error.status === 403 && /MFA/i.test(error.message || '')) {
    try {
      await mfaApi.request();
      const code = prompt('Ingresa el código MFA (6 dígitos)');
      if (code) {
        await mfaApi.verify(code);
        showToast('MFA verificado, vuelve a intentar la acción', 'success');
        return true;
      }
    } catch (err) {
      showToast(err.message || 'Error MFA', 'error');
    }
  }
  return false;
};

let qrCameraStream = null;
let html5QrInstance = null;
const stopQrCamera = () => {
  if (qrCameraStream) {
    qrCameraStream.getTracks().forEach((t) => t.stop());
    qrCameraStream = null;
  }
  if (html5QrInstance) {
    html5QrInstance.stop().catch(() => {});
    html5QrInstance.clear().catch(() => {});
    html5QrInstance = null;
  }
  const video = document.getElementById('qr-video');
  if (video) {
    video.pause();
    video.srcObject = null;
    video.classList.add('hidden');
  }
};

const startQrCamera = async () => {
  try {
    if (!('BarcodeDetector' in window)) {
      // Fallback html5-qrcode
      const container = document.getElementById('qr-fallback');
      if (!container) {
        showToast('No hay contenedor para cámara', 'error');
        return;
      }
      if (!window.__html5QrLoading) {
        window.__html5QrLoading = new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/html5-qrcode';
          script.async = true;
          script.onload = () => resolve(true);
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }
      await window.__html5QrLoading;
      const Html5Qrcode = window.Html5Qrcode;
      if (!Html5Qrcode) {
        showToast('html5-qrcode no disponible', 'error');
        return;
      }
      const id = 'qr-html5-camera';
      let target = document.getElementById(id);
      if (!target) {
        target = document.createElement('div');
        target.id = id;
        container.appendChild(target);
      }
      html5QrInstance = new Html5Qrcode(id);
      await html5QrInstance.start(
        { facingMode: 'environment' },
        { fps: 10, qrbox: 250 },
        (decodedText) => {
          const input = document.querySelector('#qr-scan-form input[name=\"qrData\"]');
          if (input) input.value = decodedText;
          showToast('QR capturado (fallback cámara)', 'success');
          stopQrCamera();
        },
        () => {}
      );
      return;
    }
    const video = document.getElementById('qr-video');
    if (!video) return;
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });
    qrCameraStream = stream;
    video.classList.remove('hidden');
    video.srcObject = stream;
    await video.play();
    const detector = new BarcodeDetector({ formats: ['qr_code'] });
    const scan = async () => {
      if (!video.srcObject) return;
      try {
        const codes = await detector.detect(video);
        if (codes.length) {
          const raw = codes[0].rawValue;
          const input = document.querySelector('#qr-scan-form input[name=\"qrData\"]');
          if (input) input.value = raw;
          showToast('QR capturado desde cámara', 'success');
          stopQrCamera();
          return;
        }
      } catch (error) {
        console.warn('QR detect error', error);
      }
      requestAnimationFrame(scan);
    };
    requestAnimationFrame(scan);
  } catch (error) {
    showToast(error.message || 'No se pudo iniciar la cámara', 'error');
  }
};

const hydrate = async () => {
  const sessionData = loadSession();
  const initialView = initRouter('landing', (view) => {
    setState({ view });
    render();
  });
  const ghostPref = localStorage.getItem(GHOST_KEY) === '1';
  setState({
    view: initialView,
    ghostMode: ghostPref,
    session: sessionData.accessToken
      ? { token: sessionData.accessToken, refreshToken: sessionData.refreshToken, user: sessionData.user }
      : null,
    deviceId: sessionData.deviceId,
    deviceFingerprint: sessionData.deviceFingerprint
  });
  if (sessionData.accessToken) {
    await fetchSessionData();
    setState({ view: 'dashboard' });
    navigate('dashboard');
  }
  render();
};

hydrate();

// Eventos globales para acciones MFA/Device binding y Protect
document.addEventListener('click', async (e) => {
  const action = e.target?.dataset?.action;
  if (!action) return;
  if (action === 'ghost-mode') {
    const enabled = !getState().ghostMode;
    localStorage.setItem(GHOST_KEY, enabled ? '1' : '0');
    setState({ ghostMode: enabled });
    render();
    showToast(enabled ? 'Saldos ocultos (ghost mode)' : 'Saldos visibles', 'info');
    return;
  }
  if (action === 'mfa') {
    try {
      await mfaApi.request();
      const code = prompt('Ingresa el código MFA (mock 6 dígitos)');
      if (code) {
        await mfaApi.verify(code);
        showToast('MFA verificado', 'success');
      }
    } catch (error) {
      showToast(error.message || 'Error MFA', 'error');
    }
  }
  if (action === 'bind-device') {
    try {
      const name = prompt('Nombre del dispositivo');
      await mfaApi.bindDevice(name || 'device');
      showToast('Dispositivo vinculado', 'success');
    } catch (error) {
      showToast(error.message || 'Error vinculando dispositivo', 'error');
    }
  }
  if (action === 'trust-device') {
    try {
      await mfaApi.trustCurrent('web-device');
      await fetchLayerShield();
      showToast('Dispositivo confiado', 'success');
      render();
    } catch (error) {
      showToast(error.message || 'No se pudo confiar el dispositivo', 'error');
    }
  }
  if (action === 'contribute-goal') {
    const goalId = e.target.dataset.goalId;
    const input = document.querySelector(`input[name="contrib-${goalId}"]`);
    const amount = Number(input?.value || 0);
    try {
      await savingsApi.contribute(goalId, { amount });
      await fetchSavings();
      await fetchAccounts();
      showToast('Aporte registrado', 'success');
      render();
    } catch (error) {
      showToast(error.message || 'No se pudo aportar a la meta', 'error');
    }
  }
  if (action === 'toggle-power-save') {
    const goalId = e.target.dataset.goalId;
    try {
      await savingsApi.togglePowerSave(goalId, {});
      await fetchSavings();
      showToast('Power save actualizado', 'success');
      render();
    } catch (error) {
      showToast(error.message || 'No se pudo actualizar power save', 'error');
    }
  }

  if (action === 'freeze-card') {
    const cardId = e.target.dataset.cardId;
    if (!cardId) return;
    try {
      await protectCardApi.freeze(cardId);
      await fetchCards();
      showToast('Tarjeta congelada', 'success');
      render();
    } catch (error) {
      if (!(await handleMfaError(error))) showToast(error.message || 'No se pudo congelar la tarjeta', 'error');
    }
  }
  if (action === 'unfreeze-card') {
    const cardId = e.target.dataset.cardId;
    if (!cardId) return;
    try {
      await protectCardApi.unfreeze(cardId);
      await fetchCards();
      showToast('Tarjeta activada', 'success');
      render();
    } catch (error) {
      if (!(await handleMfaError(error))) showToast(error.message || 'No se pudo activar la tarjeta', 'error');
    }
  }
  if (action === 'pay-installment') {
    const instId = e.target.dataset.installmentId;
    if (!instId) return;
    try {
      await bnplApi.payInstallment({ installmentId: instId });
      await fetchBnpl();
      showToast('Cuota pagada', 'success');
      render();
    } catch (error) {
      if (!(await handleMfaError(error))) showToast(error.message || 'No se pudo pagar la cuota', 'error');
    }
  }

  if (action === 'select-product') {
    const productId = e.target.dataset.productId;
    const select = document.getElementById('bnpl-product-select');
    if (select && productId) {
      select.value = productId;
      const option = select.querySelector(`option[value="${productId}"]`);
      if (option) {
        const price = option.dataset.price;
        const currency = option.dataset.currency;
        const name = option.dataset.name;
        const merchant = option.dataset.merchant;
        const amountInput = document.querySelector('#bnpl-form input[name="amount"]');
        const descInput = document.querySelector('#bnpl-form input[name="description"]');
        const merchantSelect = document.querySelector('#bnpl-form select[name="merchantId"]');
        if (amountInput && price) amountInput.value = price;
        if (descInput && name) descInput.value = `Compra ${name}`;
        if (merchantSelect && merchant) merchantSelect.value = merchant;
      }
      showToast('Producto seleccionado, revisa BNPL', 'info');
    }
  }

  if (action === 'evaluate-loan') {
    const loanId = e.target.dataset.loanId;
    if (!loanId) return;
    try {
      await microloansApi.evaluate(loanId);
      await fetchMicroloans();
      showToast('Préstamo evaluado', 'success');
      render();
    } catch (error) {
      showToast(error.message || 'No se pudo evaluar', 'error');
    }
  }

  if (action === 'disburse-loan') {
    const loanId = e.target.dataset.loanId;
    if (!loanId) return;
    const input = document.querySelector(`input[name="accountId-${loanId}"]`);
    const accountId = input?.value || '';
    try {
      await microloansApi.disburse(loanId, accountId);
      await fetchMicroloans();
      await fetchAccounts();
      showToast('Préstamo desembolsado', 'success');
      render();
    } catch (error) {
      showToast(error.message || 'No se pudo desembolsar', 'error');
    }
  }

  if (action === 'repay-loan') {
    const loanId = e.target.dataset.loanId;
    const paymentId = e.target.dataset.paymentId;
    if (!paymentId) return;
    const input = document.querySelector(`input[name="accountId-${loanId}"]`);
    const accountId = input?.value || '';
    try {
      await microloansApi.repay(paymentId, accountId);
      await fetchMicroloans();
      await fetchAccounts();
      showToast('Cuota pagada', 'success');
      render();
    } catch (error) {
      if (!(await handleMfaError(error))) showToast(error.message || 'No se pudo pagar cuota', 'error');
    }
  }
});

document.addEventListener('click', (e) => {
  if (e.target?.id === 'btn-qr-camera') {
    startQrCamera();
  }
});

// Eventos BNPL
document.addEventListener('submit', async (e) => {
  if (e.target?.id === 'notif-form') {
    e.preventDefault();
    const form = new FormData(e.target);
    try {
      await notificationsApi.create({
        template: form.get('template') || 'custom',
        channel: form.get('channel') || 'in-app',
        payload: { message: form.get('message') || '' },
        status: 'pending'
      });
      await fetchNotifications();
      showToast('Notificación creada', 'success');
      render();
    } catch (error) {
      showToast(error.message || 'No se pudo crear la notificación', 'error');
    }
  }
  if (e.target?.id === 'bnpl-form') {
    e.preventDefault();
    const form = new FormData(e.target);
    const payload = {
      merchantId: form.get('merchantId') || undefined,
      amount: Number(form.get('amount') || 0),
      installments: form.get('installments'),
      description: form.get('description'),
      productId: form.get('productId') || undefined
    };
    try {
      await bnplApi.createOrder(payload);
      await fetchBnpl();
      showToast('BNPL creado', 'success');
      render();
    } catch (error) {
      if (!(await handleMfaError(error))) showToast(error.message || 'Error creando BNPL', 'error');
    }
  }
  if (e.target?.id === 'bnpl-qr-form') {
    e.preventDefault();
    const form = new FormData(e.target);
    try {
      const merchantId = form.get('merchantId');
      const amount = Number(form.get('amount') || 0);
      const currency = form.get('currency') || 'DOP';
      const description = form.get('description') || 'Compra QR';
      const expiresMinutes = Number(form.get('expiresMinutes') || 30);
      const expiresAt = new Date(Date.now() + expiresMinutes * 60 * 1000).toISOString();
      const generated = await qrApi.generate({
        merchantId,
        amount,
        currency,
        description,
        expiresAt
      });
      await scanQrPayload(generated);
      await createBnplFromQr(generated);
      showToast('BNPL vía QR creado', 'success');
      render();
    } catch (error) {
      if (!(await handleMfaError(error))) showToast(error.message || 'Error con QR BNPL', 'error');
    }
  }
  if (e.target?.id === 'qr-scan-form') {
    e.preventDefault();
    const form = new FormData(e.target);
    const qrDataRaw = form.get('qrData');
    try {
      const qrParsed = JSON.parse(qrDataRaw);
      await scanQrPayload(qrParsed);
      showToast('QR válido', 'success');
      render();
    } catch (error) {
      showToast(error.message || 'QR inválido', 'error');
    }
  }
  if (e.target?.id === 'qr-create-bnpl-form') {
    e.preventDefault();
    const form = new FormData(e.target);
    const qrDataRaw = form.get('qrData');
    try {
      const qrParsed = JSON.parse(qrDataRaw);
      await createBnplFromQr(qrParsed);
      showToast('BNPL creado desde QR', 'success');
      render();
    } catch (error) {
      if (!(await handleMfaError(error)))
        showToast(error.message || 'Error creando BNPL desde QR', 'error');
    }
  }
  if (e.target?.id === 'account-create-form') {
    e.preventDefault();
    const form = new FormData(e.target);
    try {
      await accountsApi.create({
        name: form.get('name'),
        type: form.get('type') || 'checking',
        currency: form.get('currency') || 'DOP'
      });
      await fetchAccounts();
      showToast('Cuenta creada', 'success');
      render();
    } catch (error) {
      showToast(error.message || 'No se pudo crear la cuenta', 'error');
    }
  }
  if (e.target?.id === 'tx-form') {
    e.preventDefault();
    const form = new FormData(e.target);
    const type = form.get('type');
    try {
      if (type === 'deposit') {
        await api('/api/transactions/deposit', {
          method: 'POST',
          body: JSON.stringify({
            accountId: form.get('accountId'),
            amount: Number(form.get('amount') || 0),
            description: form.get('description') || ''
          })
        });
      } else {
        await api('/api/transactions/withdraw', {
          method: 'POST',
          body: JSON.stringify({
            accountId: form.get('accountId'),
            amount: Number(form.get('amount') || 0),
            description: form.get('description') || ''
          })
        });
      }
      await fetchAccounts();
      await fetchNotifications();
      showToast('Movimiento registrado', 'success');
      render();
    } catch (error) {
      if (!(await handleMfaError(error))) showToast(error.message || 'No se pudo registrar', 'error');
    }
  }
  if (e.target?.id === 'microloan-form') {
    e.preventDefault();
    const form = new FormData(e.target);
    try {
      await microloansApi.request({
        amount: Number(form.get('amount') || 0),
        termMonths: Number(form.get('termMonths') || 6),
        accountId: form.get('accountId') || undefined
      });
      await fetchMicroloans();
      showToast('Microcrédito solicitado', 'success');
      render();
    } catch (error) {
      showToast(error.message || 'No se pudo solicitar', 'error');
    }
  }
  if (e.target?.id === 'product-form') {
    e.preventDefault();
    const form = new FormData(e.target);
    try {
      await marketplaceApi.createProduct({
        merchantId: form.get('merchantId'),
        name: form.get('name'),
        price: Number(form.get('price') || 0),
        currency: form.get('currency') || 'DOP',
        status: form.get('status') || 'active'
      });
      await fetchMarketplace();
      showToast('Producto creado', 'success');
      render();
    } catch (error) {
      showToast(error.message || 'No se pudo crear producto', 'error');
    }
  }

  if (e.target?.id === 'merchant-form') {
    e.preventDefault();
    const form = new FormData(e.target);
    try {
      await bnplApi.createMerchant({
        name: form.get('name'),
        category: form.get('category'),
        qrPayload: {}
      });
      await fetchBnpl();
      showToast('Merchant creado', 'success');
      render();
    } catch (error) {
      showToast(error.message || 'No se pudo crear merchant', 'error');
    }
  }

  if (e.target?.id === 'deal-form') {
    e.preventDefault();
    const form = new FormData(e.target);
    try {
      await dealsApi.create({
        title: form.get('title'),
        category: form.get('category'),
        description: form.get('description'),
        tag: form.get('tag'),
        merchantHint: form.get('merchantHint')
      });
      await fetchDeals();
      showToast('Deal creado', 'success');
      render();
    } catch (error) {
      showToast(error.message || 'No se pudo crear deal', 'error');
    }
  }
  if (e.target?.id === 'goal-form') {
    e.preventDefault();
    const form = new FormData(e.target);
    try {
      await savingsApi.createGoal({
        title: form.get('title'),
        targetAmount: Number(form.get('targetAmount') || 0),
        description: form.get('description') || ''
      });
      await fetchSavings();
      showToast('Meta creada', 'success');
      render();
    } catch (error) {
      showToast(error.message || 'No se pudo crear la meta', 'error');
    }
  }
  if (e.target?.id === 'autosave-form') {
    e.preventDefault();
    const form = new FormData(e.target);
    try {
      await savingsApi.createAutosave({
        name: form.get('name'),
        amount: Number(form.get('amount') || 0),
        frequency: form.get('frequency') || 'monthly'
      });
      showToast('Autosave creado', 'success');
    } catch (error) {
      showToast(error.message || 'No se pudo crear autosave', 'error');
    }
  }
});
