<template>
  <v-list-item @click="selectChat">
    <v-list-item-avatar>
      <img :src="chat.avatar" class="profile__img">
      <v-badge
        v-show="chat.online"
        bottom
        offset-x="8"
        offset-y="-5"
        dot overlap
        color="green accent-4 ligthen-1 green--text">
      </v-badge>
    </v-list-item-avatar>

    <v-list-item-content class="ml-1">
      <v-list-item-title>
        {{ chat.name }}
      </v-list-item-title>
    </v-list-item-content>

    <v-list-item-icon v-if="chat.pinned">
      <v-icon small>mdi-pin</v-icon>
    </v-list-item-icon>
  </v-list-item>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ChatListItem',
  props: {
    chat: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectChat() {
      if (this.selectedChat) {
        // If selected chat is current chat, return
        if (this.chat.id === this.selectedChat.id) {
          return;
        }
      }

      this.$store.dispatch('selectChat', this.chat);
    },
  },
  computed: {
    ...mapGetters(['selectedChat']),
  },
};
</script>

<style scoped>
.v-list-item__avatar {
  margin-right: -3px !important;
  display: flex;
  justify-content: flex-start;
}

.profile__img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
}

.v-list-item__icon {
  margin: 20px 0 !important;
}
</style>
