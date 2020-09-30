<template>
  <div>
    <div
      v-for="message in messages"
      :key="message.timestamp"
    >
      <ChatMessage :message="message" />
      <br>
    </div>
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
