import { api } from './client.js';

export const accountsApi = {
  list: () => api('/api/accounts'),
  create: (payload) =>
    api('/api/accounts', {
      method: 'POST',
      body: JSON.stringify(payload)
    }),
  listTransactions: (accountId) => api(`/api/accounts/${accountId}/transactions`)
};
