<template>
  <v-navigation-drawer app v-model="sidebar" width="300px">
    <v-toolbar class="primary">
      <v-toolbar-title class="white--text body-1 d-flex align-center">
        <v-avatar size="37px" class="justify-start">
          <img class="profile__img" :src="userInfo.avatar">
        </v-avatar>
        <span class="ml-1">{{ userInfo.username }}</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-list>
      <v-subheader>Chats</v-subheader>

      <v-container>
        <v-text-field
          v-model="searchChatsText"
          type="text"
          placeholder="Find a chat"
          prepend-inner-icon="mdi-magnify"
          clearable
        >
        </v-text-field>
      </v-container>

      <v-list-item-group>
        <ChatListItem
          v-for="user in filteredUserChats"
          :key="user.name"
          :chat="user"
        />
      </v-list-item-group>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
import ChatListItem from '@/components/chat/ChatListItem.vue';

export default {
  name: 'Sidebar',
  data() {
    return {
      searchChatsText: '',
    };
  },
  computed: {
    ...mapGetters(['sidebar', 'userChats', 'userInfo']),

    filteredUserChats() {
      // Move pinned chats to the beginning
      const filteredByPinned = [...this.userChats].sort((chat) => !chat.pinned);
      const searchText = this.searchChatsText;

      if (!searchText) {
        return filteredByPinned;
      }

      return filteredByPinned.filter((chat) => (
        chat
          .name
          .toLowerCase()
          .indexOf(searchText.trim().toLowerCase()) !== -1
      ));
    },
  },
  components: {
    ChatListItem,
  },
};
</script>

<style scoped>
.profile__img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
