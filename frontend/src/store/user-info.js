import Vue from 'vue';
import handleError from '@/utils/response-errors.handler';

const getChatIndex = (allChats, chatId) => {
  allChats.findIndex((c) => c.id === chatId);
};

const getUpdatedChat = (allChats, chatId, propsToUpdate) => {
  const chatToUpdateIndex = getChatIndex(allChats, chatId);
  const updatedChat = {
    ...allChats[chatToUpdateIndex],
    ...propsToUpdate,
  };

  return [updatedChat, chatToUpdateIndex];
};

export default {
  state: {
    userInfo: {
      id: 1,
      name: 'Kalik Mamado',
      avatar: 'https://bit.ly/3iVFcXV',
    },
    // Should be pass and gets from the server later
    chats: [
      {
        id: 2,
        name: 'Kamina',
        avatar: 'https://bit.ly/32Sig6e',
        online: true,
        pinned: true,
      },
      {
        id: 3,
        name: 'Simon',
        avatar: 'https://bit.ly/32UiHwC',
        online: false,
        pinned: false,
      },
      {
        id: 4,
        name: 'Megumin',
        avatar: 'https://bit.ly/3iVFcXV',
        online: true,
        pinned: true,
      },
      {
        id: 5,
        name: 'Razman',
        avatar: 'https://i.guim.co.uk/img/media/82a45de9b2190d28a4458cda332772a16013f142/0_15_5171_3104/master/5171.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=097ec055ed237c02d6145e8ca5f24e47',
        online: true,
        pinned: false,
      },
    ],
  },
  mutations: {
    setUserInfo(state, info) {
      state.userInfo = info;
    },
    clearUserInfo(state) {
      state.userInfo = null;
    },
    setUserChats(state, chats) {
      state.chats = chats;
    },
    updateChat(state, { chatId, props }) {
      const updatedChat = getUpdatedChat(state.chats, chatId, props);
      const updatedChatIdx = getChatIndex(state.chats, chatId);

      Vue.set(
        state.chats,
        updatedChatIdx,
        updatedChat,
      );
    },
  },
  actions: {
    setUserChats({ commit }, chats) {
      commit('setUserChats', chats);
    },
    async fetchUserInfo({ commit, getters }) {
      // const response = await fetch(
      //  'serverUrl/user/token',
      // );
      // const userInfo = await response.json();

      // if (response.ok) {
      //  await commit('setUserInfo', userInfo);
      // } else {
      //  handleError(userInfo);
      //  throw new Error("Can't fetch a user info")
      // }
    },
    async updateUserChat({ commit, getters }, { chatId, props }) {
      // const response = await authFetch(
      //  'serverUrl/update/chat/theId',
      //  JSON.stringify(props)
      // );
      // const updatedChat = await response.json();
      await commit('updateChat', { chatId, props });

      // Update selectedChat if the updating was for it
      if (getters.selectedChat.id === chatId) {
        const updatedChat = getUpdatedChat(getters.userChats, chatId, props);
        await commit('setSelectedChat', updatedChat);
      }
    },
  },
  getters: {
    userInfo(state) {
      return state.userInfo;
    },
    userChats(state) {
      return state.chats;
    },
  },
};
