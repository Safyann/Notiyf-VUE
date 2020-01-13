export default {
  state: {
    messages: []
  },
  mutations: {
    setMessages(state, payload) {
      state.messages = payload;
    }
  },
  actions: {
    setMessages({ commit }, payload) {
      commit("setMessages", payload);
    }
  },
  getters: {
    getMessages(state) {
      return state.messages;
    }
  }
};
