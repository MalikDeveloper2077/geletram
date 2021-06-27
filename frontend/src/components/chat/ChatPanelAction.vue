<template>
  <v-list-item
    @click="action.onclick() || ''"
    :color="action.blockColor || ''"
  >
    <v-list-item-icon>
      <v-icon>{{ action.icon }}</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>{{ action.title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ChatPanelAction',
  props: {
    action: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['selectedChat']),
  },
};
</script>
