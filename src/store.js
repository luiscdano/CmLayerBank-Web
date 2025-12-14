const listeners = new Set();

const initialState = {
  view: 'landing',
  session: null,
  accounts: [],
  transactions: [],
  score: null,
  aiRate: null,
  cards: [],
  insights: null,
  bnplOrders: [],
  merchants: [],
  qrResult: null,
  kids: { guardian: null, accounts: [] },
  marketplace: [],
  deals: [],
  notifications: [],
  microloans: [],
  layershield: {},
  savingsGoals: [],
  ghostMode: false,
  mfaStepUp: { required: false, lastAction: null }
};

let state = { ...initialState };

export const getState = () => state;

export const setState = (partial) => {
  state = { ...state, ...partial };
  listeners.forEach((cb) => cb(state));
};

export const subscribe = (cb) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};

export const resetState = () => {
  state = { ...initialState };
  listeners.forEach((cb) => cb(state));
};
