export default {
  state: {
    userInfo: null,
  },
  mutations: {
    setUserInfo(state, info) {
      state.userInfo = info;
    },
    clearUserInfo(state) {
      state.userInfo = null;
    },
  },
  getters: {
    userInfo(state) {
      return state.userInfo;
    },
  },
};
