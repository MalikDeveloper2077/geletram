<template>
  <v-list-item @click="selectChat(person)">
    <v-list-item-avatar>
      <img :src="person.avatar" class="profile__img">
      <v-badge
        v-if="person.online"
        bottom
        offset-x="8"
        offset-y="-5"
        dot overlap
        color="green accent-4 ligthen-1 green--text">
      </v-badge>
    </v-list-item-avatar>

    <v-list-item-content class="ml-1">
      <v-list-item-title>
        {{ person.name }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ChatListItem',
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectChat(person) {
      if (person !== this.selectedChat) {
        this.$store.dispatch('selectChat', person);
      }
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
</style>
