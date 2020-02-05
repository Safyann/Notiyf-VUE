import loadMore from "../assets/js/loadMore";
import axios from "axios";

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
    },
    loadMessages(state, payload) {
      state.messagesMain = [...state.messagesMain, ...payload];
    }
  },
  actions: {
    setMessages({ commit }, payload) {
      commit("setMessages", payload);
    },
    setMessagesMain({ commit }, payload) {
      commit("setMessagesMain", payload);
    },
    loadMessages({ commit, getters }) {
      let res = getters.getMessagesFilter;
      commit("loadMessages", loadMore(res));
    },
    getNotify({ commit }) {
      axios
        .get("https://tocode.ru/static/c/vue-pro/notifyApi.php")
        .then(response => {
          let res = response.data.notify,
            messages = [],
            messagesMain = [];

          // filter
          for (let i = 0; i < res.length; i++) {
            if (res[i].main) {
              messagesMain.push(res[i]);
            } else {
              messages.push(res[i]);
            }
          }

          commit("setMessagesMain", messagesMain);
          commit("setMessages", messages);
        })
        .catch(error => {
          console.log(error);
          commit("setError", "Network Error");
        })
        .finally(() => {
          commit("setLoading", false);
        });
    },
    getNotifyLazy({ commit, dispatch }) {
      setTimeout(() => {
        dispatch("getNotify");
      }, 1800);
    }
  },
  getters: {
    getMessages(state) {
      return state.messages;
    },
    getMessagesMain(state) {
      return state.messagesMain;
    },
    getMessagesFilter(state) {
      return state.messages.filter(mes => {
        return mes.main === false;
      });
    }
  }
};
