import { api } from './client.js';

export const contactApi = {
  send: (payload) =>
    api('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ ...payload, source: 'landing' })
    })
};
