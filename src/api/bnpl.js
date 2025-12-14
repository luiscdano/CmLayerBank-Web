import { api } from './client.js';

export const bnplApi = {
  listMerchants: () => api('/api/bnpl/merchants'),
  createMerchant: (payload) =>
    api('/api/bnpl/merchants', {
      method: 'POST',
      body: JSON.stringify(payload)
    }),
  updateMerchant: (id, payload) =>
    api(`/api/bnpl/merchants/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload)
    }),
  deleteMerchant: (id) => api(`/api/bnpl/merchants/${id}`, { method: 'DELETE' }),
  listOrders: () => api('/api/bnpl/orders'),
  createOrder: ({ merchantId, amount, installments, description, qrData, productId, merchantName }) =>
    api('/api/bnpl/orders', {
      method: 'POST',
      body: JSON.stringify({
        merchantId: merchantId || undefined,
        amount,
        installments,
        description,
        qrData,
        productId,
        merchantName
      })
    }),
  payInstallment: ({ installmentId, amount }) =>
    api('/api/bnpl/payments', {
      method: 'POST',
      body: JSON.stringify({ installmentId, amount })
    })
};
