<template>
  <div class="home">
    <Navbar>
      <template v-slot:centerHeading v-if="selectedChat">
        <img :src="selectedChat.avatar" class="profile__img">

        <span class="ml-3">
          <b>{{ selectedChat.name }}</b>
        </span>
      </template>
    </Navbar>

    <ChatList v-if="sidebar" />

    <v-container>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ChatList from '@/components/ChatList.vue';
import Navbar from '@/components/app/Navbar.vue';

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['sidebar', 'selectedChat']),
  },
  components: {
    ChatList,
    Navbar,
  },
};
</script>

<style>
.profile__img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
