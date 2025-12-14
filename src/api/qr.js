import { api } from './client.js';

export const qrApi = {
  scan: (qrData) =>
    api('/api/qr/scan', {
      method: 'POST',
      body: JSON.stringify(qrData)
    }),
  createBnpl: (qrData) =>
    api('/api/qr/create-bnpl', {
      method: 'POST',
      body: JSON.stringify(qrData)
    }),
  generate: (payload) =>
    api('/api/qr/generate', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
};
