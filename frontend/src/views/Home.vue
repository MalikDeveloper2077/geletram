<template>
  <div class="home">
    <Navbar>
      <template v-slot:centerHeading v-if="selectedChat">
        <div>
          <img :src="selectedChat.avatar" class="profile__img">

          <span class="ml-3">
            <b>{{ selectedChat.name }}</b>
          </span>
        </div>
      </template>
    </Navbar>

    <ChatList v-if="sidebar" />

    <v-container class="p-0 mx-0 chat-main">
      <ChatMessages :messages="messages" />
      <ChatActionsPanel />

      <v-text-field
        class="chat-main__input-send"
        placeholder="Enter a message"
        append-outer-icon="mdi-send"
      ></v-text-field>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Navbar from '@/components/app/Navbar.vue';
import ChatList from '@/components/chat/ChatList.vue';
import ChatActionsPanel from '@/components/chat/ChatActionsPanel.vue';
import ChatMessages from '@/components/chat/ChatMessages.vue';

export default {
  name: 'Home',
  data() {
    return {
      messages: [
        {
          author: {
            id: 2,
            name: 'Kamina',
            avatar: 'https://bit.ly/32Sig6e',
          },
          timestamp: '20:40',
          text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dignissimos?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ab
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nesciunt.`,
        },
        {
          author: {
            id: 2,
            name: 'Kamina',
            avatar: 'https://bit.ly/32Sig6e',
          },
          timestamp: '20:41',
          text: 'Kalik, I need your answer !!! 💀',
        },
        {
          author: {
            id: 1,
            name: 'Kalik Mamado',
            avatar: 'https://bit.ly/3iVFcXV',
          },
          timestamp: '20:42',
          text: `Ok, I listen to you
            Please dont waste my time`,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['sidebar', 'selectedChat']),
  },
  components: {
    Navbar,
    ChatList,
    ChatActionsPanel,
    ChatMessages,
  },
};
</script>

<style>
.profile__img {
  width: 30px;
  height: 30px;
  max-width: 30px;
  max-height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.chat-main__input-send {
  position: absolute;
  bottom: 0;
  width: 97%;
}
</style>
