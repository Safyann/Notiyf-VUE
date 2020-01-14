export default {
  state: {
    messages: [],
    messagesMain: []
  },
  mutations: {
    setMessages(state, payload) {
      state.messages = payload;
    },
    setMessagesMain(state, payload) {
      state.messagesMain = payload;
    }
  },
  actions: {
    setMessages({ commit }, payload) {
      commit("setMessages", payload);
    },
    setMessagesMain({ commit }, payload) {
      commit("setMessagesMain", payload);
    }
  },
  getters: {
    getMessages(state) {
      return state.messages;
    },
    getMessagesMain(state) {
      return state.messagesMain;
    }
  }
};
