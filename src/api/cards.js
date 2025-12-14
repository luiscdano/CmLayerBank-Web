import { api } from './client.js';

export const protectCardApi = {
  issue: (accountId) =>
    api('/api/cards/protect/issue', {
      method: 'POST',
      body: JSON.stringify({ accountId })
    }),
  freeze: (cardId) =>
    api(`/api/cards/protect/${cardId}/freeze`, {
      method: 'POST'
    }),
  unfreeze: (cardId) =>
    api(`/api/cards/protect/${cardId}/unfreeze`, {
      method: 'POST'
    })
};
