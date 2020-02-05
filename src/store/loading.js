import axios from "axios";

export default {
  state: {
    loading: true
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    }
  },
  actions: {},
  getters: {
    getLoading(state) {
      return state.loading;
    }
  }
};
