<template>
  <v-navigation-drawer app v-model="sidebar" width="300px">
    <v-toolbar class="primary">
      <v-toolbar-title class="white--text body-1 d-flex align-center">
        <v-avatar size="37px" class="justify-start">
          <img class="profile__img" src="https://bit.ly/3hZ1CWG">
        </v-avatar>
        <span class="ml-1">Kalik Mamado</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-list>
      <v-subheader>Chats</v-subheader>

      <v-list-item-group>

        <ChatListItem
          v-for="person in persons"
          :key="person.name"
          :person="person"
        />

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
import ChatListItem from '@/components/ChatListItem.vue';

export default {
  name: 'Sidebar',
  data() {
    return {
      persons: [
        { name: 'Kamina', avatar: 'https://bit.ly/32Sig6e', online: true },
        { name: 'Simon', avatar: 'https://bit.ly/32UiHwC', online: false },
        { name: 'Megumin', avatar: 'https://bit.ly/3iVFcXV', online: true },
      ],
    };
  },
  computed: {
    ...mapGetters(['sidebar']),
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
