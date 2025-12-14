import { api } from './client.js';

export const marketplaceApi = {
  listProducts: () => api('/api/marketplace/products'),
  createProduct: (payload) =>
    api('/api/marketplace/products', {
      method: 'POST',
      body: JSON.stringify(payload)
    }),
  updateProduct: (id, payload) =>
    api(`/api/marketplace/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload)
    }),
  deleteProduct: (id) =>
    api(`/api/marketplace/products/${id}`, {
      method: 'DELETE'
    })
};
