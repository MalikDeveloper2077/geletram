<template>
  <v-navigation-drawer app width="200px" right>
    <v-toolbar class="primary mb-3">
      <v-toolbar-title class="white--text body-1 text-center">
        Actions
      </v-toolbar-title>
    </v-toolbar>

    <v-list>
      <v-list-item-group>
        <ChatPanelAction
          v-for="action in actions"
          :key="action.title"
          :action="action"
        />
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';
import ChatPanelAction from '@/components/chat/ChatPanelAction.vue';

export default {
  name: 'ChatActionsPanel',
  data() {
    return {
      actions: [
        { icon: 'mdi-cancel', title: 'Block', blockColor: 'error' },
        { icon: 'mdi-pin', title: 'Pin', onclick: this.toggleChatPinning },
        { icon: 'mdi-delete', title: 'Delete' },
      ],
    };
  },
  methods: {
    async toggleChatPinning() {
      const selectedChatId = this.selectedChat.id;
      const toUpdate = this.selectedChat.pinned ? { pinned: false } : { pinned: true };

      await this.$store.dispatch(
        'updateUserChat',
        { chatId: selectedChatId, props: toUpdate },
      );
    },
  },
  computed: {
    ...mapGetters(['selectedChat']),
  },
  components: {
    ChatPanelAction,
  },
  watch: {
    selectedChat(value) {
      if (!value) {
        return;
      }

      const pinActionNames = ['pin', 'unpin'];
      const pinAction = this.actions.find((action) => (
        pinActionNames.includes(action.title.toLowerCase())
      ));

      pinAction.title = this.selectedChat.pinned ? 'Unpin' : 'Pin';
    },
  },
};
</script>

<style>
.v-item--active {
  background-color: transparent !important;
}
</style>
