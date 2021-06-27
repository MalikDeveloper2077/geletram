<template>
  <div
    :class="`wrapper mb-3 d-flex justify-${
      isOwnMessage(message.author.id) ? 'end' : 'start'
    }`"
  >
    <v-card
      :class="{
        primary: isOwnMessage(message.author.id)
      }"
      class="rounded-xl elevation-0 message"
      max-width="70%"
    >
      <v-card-title class="author__name grey--text subtitle-2">
        <img :src="message.author.avatar" class="profile__img mr-3">
          {{ message.author.name }}
        <v-spacer></v-spacer>
        <span class="caption grey--text ml-4">
          {{ message.timestamp }}
        </span>
      </v-card-title>

      <v-card-text class="white--text">
        {{ message.text }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ChatMessage',
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  methods: {
    isOwnMessage(messageAuthorId) {
      return +messageAuthorId === this.userInfo.id;
    },
  },
  computed: {
    ...mapGetters(['userInfo']),
  },
};
</script>

<style>
.wrapper {
  display: block;
}

.message {
  display: inline-block;
}

.author__name {
  flex: 1 !important;
}
</style>>
