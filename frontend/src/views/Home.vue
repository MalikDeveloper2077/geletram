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

    <v-container class="p-0 mx-0 chat-main" v-if="showChat">
      <ChatMessages :messages="messages" />
      <ChatActionsPanel />

      <v-form @submit.prevent="sendMessage">
        <v-text-field
          v-model="messageText"
          class="chat-main__input-send"
          placeholder="Enter a message"
          append-outer-icon="mdi-send"
          @click:append-outer="sendMessage"
        ></v-text-field>
      </v-form>
    </v-container>

    <div v-else class="d-flex justify-center align-center text-center">
      <h5 class="grey--text text--darken-2 text-uppercase">Start a chat ✍🏻</h5><br>
    </div>
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
      messageText: '',
      chatSocket: null,
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
  methods: {
    sendMessage() {
      if (!this.messageText) {
        return;
      }

      this.chatSocket.send(JSON.stringify({
        message: this.messageText,
        author: this.userInfo,
      }));

      this.messageText = '';
    },
    createChatSocket() {
      const chatId = this.selectedChat.id;

      this.chatSocket = new WebSocket(
        `ws://${window.location.hostname}:8000/ws/chat/${chatId}/`,
      );

      this.chatSocket.onmessage = (e) => {
        const data = JSON.parse(e.data);

        this.messages.push({
          author: data.author,
          timestamp: '20:54',
          text: data.message,
        });
      };

      this.chatSocket.onclose = () => {
        console.error('Chat socket closed unexpectedly');
      };
    },
  },
  computed: {
    ...mapGetters(['sidebar', 'selectedChat', 'userChats', 'userInfo']),
    showChat() {
      return this.selectedChat;
    },
  },
  watch: {
    selectedChat(val) {
      if (val) {
        this.createChatSocket();

        this.$router.push({
          name: 'Chat',
          params: { id: this.selectedChat.id },
        });
      }
    },
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
