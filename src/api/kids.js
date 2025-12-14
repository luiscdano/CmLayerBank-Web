import { api } from './client.js';

export const kidsApi = {
  listAccounts: () => api('/api/kids/accounts'),
  createAccount: (payload) =>
    api('/api/kids/accounts', {
      method: 'POST',
      body: JSON.stringify(payload)
    }),
  updateRules: (childId, payload) =>
    api(`/api/kids/accounts/${childId}/rules`, {
      method: 'PATCH',
      body: JSON.stringify(payload)
    }),
  recordMovement: (childId, payload) =>
    api(`/api/kids/accounts/${childId}/movements`, {
      method: 'POST',
      body: JSON.stringify(payload)
    })
};
