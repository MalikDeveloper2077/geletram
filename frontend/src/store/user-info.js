export default {
  state: {
    userInfo: {
      id: 1,
      name: 'Kalik Mamado',
      avatar: 'https://bit.ly/3iVFcXV',
    },
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
