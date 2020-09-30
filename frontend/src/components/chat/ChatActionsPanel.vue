<template>
  <v-navigation-drawer app width="200px" right v-if="selectedChat">
    <v-toolbar class="primary mb-3">
      <v-toolbar-title class="white--text body-1 text-center">
        Actions
      </v-toolbar-title>
    </v-toolbar>

    <v-list>
      <v-list-item-group>

        <v-list-item
          v-for="action in actions"
          :key="action.title"
          :color="action.blockColor || ''"
        >
          <v-list-item-icon>
            <v-icon>{{ action.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ action.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ChatActionsPanel',
  data() {
    return {
      actions: [
        { icon: 'mdi-cancel', title: 'Block', blockColor: 'error' },
        { icon: 'mdi-pin', title: 'Pin' },
        { icon: 'mdi-delete', title: 'Delete' },
      ],
    };
  },
  computed: {
    ...mapGetters(['selectedChat']),
  },
};
</script>
