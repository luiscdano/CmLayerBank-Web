import { api } from './client.js';

export const savingsApi = {
  createGoal: (payload) =>
    api('/api/goals', {
      method: 'POST',
      body: JSON.stringify(payload)
    }),
  listGoals: () => api('/api/goals'),
  createAutosave: (payload) =>
    api('/api/auto-savings', {
      method: 'POST',
      body: JSON.stringify(payload)
    }),
  contribute: (goalId, payload) =>
    api(`/api/goals/${goalId}/contribute`, {
      method: 'POST',
      body: JSON.stringify(payload)
    }),
  togglePowerSave: (goalId, payload) =>
    api(`/api/goals/${goalId}/power-save`, {
      method: 'POST',
      body: JSON.stringify(payload)
    })
};
