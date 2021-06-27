<template>
  <div>
    <ChatMessage v-for="message in messages"
      :key="message.timestamp" :message="message" />
  </div>
</template>

<script>
import ChatMessage from '@/components/chat/ChatMessage.vue';

export default {
  name: 'ChatMessages',
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  components: {
    ChatMessage,
  },
};
</script>
