import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const inStore = (name, defval) => {
  let l = localStorage.getItem(name);
  return l == null ? defval : l;
};

export const store = new Vuex.Store({
  state: {
    id: inStore("id", 0),
    username: inStore("username", ""),
    fullname: inStore("fullname", ""),
  },
  getters: {
    ID: (state) => {
      return state.id;
    },
    USER: (state) => {
      return state.username;
    },
    NAME: (state) => {
      return state.fullname;
    },
  },
  mutations: {
    SET_ID: (state, payload) => {
      localStorage.setItem("id", payload);
      state.id = payload;
    },
    SET_USER: (state, payload) => {
      localStorage.setItem("username", payload);
      state.username = payload;
    },
    SET_NAME: (state, payload) => {
      localStorage.setItem("fullname", payload);
      state.fullname = payload;
    },
  },
  actions: {},
});
