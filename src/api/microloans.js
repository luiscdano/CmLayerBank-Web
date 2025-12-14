import { api } from './client.js';

export const microloansApi = {
  list: () => api('/api/microloans'),
  request: (payload) =>
    api('/api/microloans', {
      method: 'POST',
      body: JSON.stringify(payload)
    }),
  evaluate: (loanId) => api(`/api/microloans/${loanId}/evaluate`, { method: 'POST' }),
  disburse: (loanId, accountId) =>
    api(`/api/microloans/${loanId}/disburse`, {
      method: 'POST',
      body: JSON.stringify({ accountId })
    }),
  repay: (paymentId, accountId) =>
    api(`/api/microloans/payments/${paymentId}`, {
      method: 'POST',
      body: JSON.stringify({ accountId })
    })
};
