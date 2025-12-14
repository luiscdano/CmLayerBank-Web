const API_BASE = window.API_BASE || '';

const ACCESS_KEY = 'cmlayer_token';
const REFRESH_KEY = 'cmlayer_refresh';
const USER_KEY = 'cmlayer_user';
const DEVICE_KEY = 'cmlayer_device';
const FP_KEY = 'cmlayer_fp';

let authToken = null;
let refreshToken = null;
let deviceId = null;
let deviceFingerprint = null;

const loadDeviceId = () => {
  if (deviceId) return deviceId;
  const stored = localStorage.getItem(DEVICE_KEY);
  if (stored) {
    deviceId = stored;
    return deviceId;
  }
  deviceId = `web-${crypto.randomUUID?.() || Date.now()}`;
  localStorage.setItem(DEVICE_KEY, deviceId);
  return deviceId;
};

const loadFingerprint = () => {
  if (deviceFingerprint) return deviceFingerprint;
  const stored = localStorage.getItem(FP_KEY);
  if (stored) {
    deviceFingerprint = stored;
    return deviceFingerprint;
  }
  try {
    const parts = [
      navigator.userAgent || '',
      navigator.language || '',
      Intl.DateTimeFormat().resolvedOptions().timeZone || '',
      `${window.screen?.width || ''}x${window.screen?.height || ''}`,
      loadDeviceId()
    ].join('|');
    deviceFingerprint = `fp-${btoa(parts).replace(/[^a-z0-9]/gi, '').slice(0, 32)}`;
  } catch {
    deviceFingerprint = `fp-${crypto.randomUUID?.() || Date.now()}`;
  }
  localStorage.setItem(FP_KEY, deviceFingerprint);
  return deviceFingerprint;
};

export const setTokens = (access, refresh) => {
  authToken = access || null;
  refreshToken = refresh || null;
  if (access) localStorage.setItem(ACCESS_KEY, access);
  if (refresh) localStorage.setItem(REFRESH_KEY, refresh);
  if (!access) localStorage.removeItem(ACCESS_KEY);
  if (!refresh) localStorage.removeItem(REFRESH_KEY);
};

export const setUser = (user) => {
  if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
  else localStorage.removeItem(USER_KEY);
};

export const loadSession = () => {
  authToken = localStorage.getItem(ACCESS_KEY);
  refreshToken = localStorage.getItem(REFRESH_KEY);
  const userRaw = localStorage.getItem(USER_KEY);
  return {
    accessToken: authToken,
    refreshToken,
    user: userRaw ? JSON.parse(userRaw) : null,
    deviceId: loadDeviceId(),
    deviceFingerprint: loadFingerprint()
  };
};

const buildHeaders = (extra = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    ...extra
  };
  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`;
  }
  headers['x-device-id'] = loadDeviceId();
  headers['x-device-fingerprint'] = loadFingerprint();
  return headers;
};

const doFetch = async (path, options = {}) => {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: buildHeaders(options.headers || {})
  });
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) {
    const error = new Error(data?.message || 'Error en la API');
    error.status = res.status;
    error.data = data;
    throw error;
  }
  return data;
};

const attemptRefresh = async () => {
  if (!refreshToken) return null;
  const res = await fetch(`${API_BASE}/api/auth/refresh`, {
    method: 'POST',
    headers: buildHeaders(),
    body: JSON.stringify({ refreshToken, deviceId: loadDeviceId() })
  });
  if (!res.ok) return null;
  const data = await res.json();
  const access = data?.tokens?.accessToken;
  const refresh = data?.tokens?.refreshToken;
  if (access) {
    setTokens(access, refresh || refreshToken);
    if (data?.user) setUser(data.user);
    return access;
  }
  return null;
};

export const api = async (path, options = {}) => {
  try {
    return await doFetch(path, options);
  } catch (error) {
    if (error.status === 401 && refreshToken) {
      const refreshed = await attemptRefresh();
      if (refreshed) {
        return doFetch(path, options);
      }
    }
    throw error;
  }
};

export const authApi = {
  login: async (email, password) => {
    const data = await api('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        deviceId: loadDeviceId(),
        deviceFingerprint: loadFingerprint()
      })
    });
    const access = data?.tokens?.accessToken;
    const refresh = data?.tokens?.refreshToken;
    if (access) setTokens(access, refresh);
    if (data?.user) setUser(data.user);
    return data;
  },
  refresh: async () => {
    const access = await attemptRefresh();
    return access;
  },
  logout: async () => {
    if (refreshToken) {
      try {
        await api('/api/auth/logout', {
          method: 'POST',
          body: JSON.stringify({ refreshToken, deviceId: loadDeviceId() })
        });
      } catch {
        /* ignore */
      }
    }
    setTokens(null, null);
    setUser(null);
  },
  me: () => api('/api/auth/me')
};

export const accountApi = {
  list: () => api('/api/accounts'),
  listTransactions: (accountId) => api(`/api/accounts/${accountId}/transactions`)
};

export const scoreApi = {
  get: () => api('/api/credit/score')
};

export const aiRateApi = {
  get: (accountId) => api(`/api/ai/interest-rate${accountId ? `?accountId=${accountId}` : ''}`)
};

export const insightsApi = {
  get: () => api('/api/ai/insights')
};
