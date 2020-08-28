import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import userInfo from './user_info';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    serverUrl: 'http://127.0.0.1:8000',
    error: null,
  },
  mutations: {
    setError(state, e) {
      state.error = e;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {},
  modules: { auth, userInfo },
  getters: {
    serverUrl(state) {
      return state.serverUrl;
    },
    error(state) {
      return state.error;
    },
  },
});
