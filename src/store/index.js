import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const inStore = (name, defval) => {
  let l = localStorage.getItem(name);
  return l == null ? defval : l;
};

export const store = new Vuex.Store({
  state: {
    login: inStore("login", "false"),
  },
  getters: {
    LOG: (state) => {
      return state.login;
    },
  },
  mutations: {
    SET_LOG: (state, payload) => {
      localStorage.setItem("login", payload);
      state.login = payload;
    },
  },
  actions: {},
});
