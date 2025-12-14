import { api } from './client.js';

export const dealsApi = {
  list: () => api('/api/deals'),
  create: (payload) =>
    api('/api/deals', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
};
