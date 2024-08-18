<script setup>
  import { inject } from 'vue'

  import ChatMessage from './ChatMessage.vue'

  const props = defineProps({
    chat: {
      type: Object,
      required: true
    }
  })
  const context = inject('context')
  const user = context.user

</script>

<template>
  <div class="chat-history">
    <ChatMessage :message :isSended="message.peerId == user.id" v-for="message in chat.messages" />
  </div>
</template>