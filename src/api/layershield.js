import { api } from './client.js';

export const mfaApi = {
  request: () => api('/api/layershield/mfa/request', { method: 'POST' }),
  verify: (code) =>
    api('/api/layershield/mfa/verify', {
      method: 'POST',
      body: JSON.stringify({ code })
    }),
  bindDevice: (deviceName) =>
    api('/api/layershield/mfa/bind-device', {
      method: 'POST',
      body: JSON.stringify({ deviceName })
    }),
  getSettings: () => api('/api/layershield'),
  updateSettings: (payload) =>
    api('/api/layershield', {
      method: 'POST',
      body: JSON.stringify(payload)
    }),
  toggleGhost: (enabled) =>
    api('/api/layershield/ghost-mode', {
      method: 'POST',
      body: JSON.stringify({ enabled })
    }),
  trustCurrent: (deviceName) =>
    api('/api/layershield/mfa/trust-current', {
      method: 'POST',
      body: JSON.stringify({ deviceName })
    })
};
