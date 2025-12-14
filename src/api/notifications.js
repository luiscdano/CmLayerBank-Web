import { api } from './client.js';

export const notificationsApi = {
  list: () => api('/api/notifications'),
  create: (payload) =>
    api('/api/notifications', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
};
