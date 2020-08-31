import handleError from '@/utils/response_errors.handler';
import saveToLocalStorage from '@/utils/localstorage_tokens';

export default {
  state: {
    accessToken: localStorage.getItem('access') || null,
    refreshToken: localStorage.getItem('refresh') || null,
  },
  mutations: {
    setTokens(state, tokens) {
      state.accessToken = tokens.access;
      state.refreshToken = tokens.refresh;
    },
    clearTokens(state) {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
  actions: {
    async createUser({ dispatch, commit, getters }, userData) {
      const response = await fetch(`${getters.serverUrl}/users/`, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseJson = await response.json();
      if (!response.ok) {
        handleError(responseJson, commit);
      }

      commit('setUserInfo', {
        ...responseJson,
        password: userData.password,
      });

      const tokens = await dispatch('fetchTokens', {
        username: responseJson.username,
        password: userData.password,
      });

      commit('setTokens', tokens);
      saveToLocalStorage(tokens);
    },
    async fetchTokens({ commit, getters }, { username, password }) {
      const response = await fetch(`${getters.serverUrl}/token/`, {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const tokens = await response.json();
      if (!response.ok) {
        handleError(tokens, commit);
      }

      return tokens;
    },
  },
  getters: {
    loggedIn(state) {
      return state.access;
    },
    refreshToken(state) {
      return state.refreshToken;
    },
  },
};
