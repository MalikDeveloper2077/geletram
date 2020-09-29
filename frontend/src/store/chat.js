export default {
  state: {
    sidebar: true,
    selectedChat: null,
  },
  mutations: {
    showSidebar(state) {
      state.sidebar = true;
    },
    hideSidebar(state) {
      state.sidebar = false;
    },
    setSelectedChat(state, person) {
      state.selectedChat = person;
    },
  },
  actions: {
    toggleSidebar({ commit, getters }) {
      if (getters.sidebar) {
        commit('hideSidebar');
      } else {
        commit('showSidebar');
      }
    },
    selectChat({ commit }, person) {
      commit('setSelectedChat', person);
    },
  },
  getters: {
    sidebar(state) {
      return state.sidebar;
    },
    selectedChat(state) {
      return state.selectedChat;
    },
  },
};
