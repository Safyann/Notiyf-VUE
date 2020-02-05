export default {
  state: {
    error: null
  },
  mutations: {
    setError(state, payload) {
      state.error = payload;
    }
  },
  actions: {},
  getters: {
    getError(state) {
      return state.error;
    }
  }
};
