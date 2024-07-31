<script setup>
  import ChatMessage from './ChatMessage.vue'

  const props = defineProps({
    chat: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  })

  console.log(props.user, props.chat.messages)
</script>

<template>
  <div class="chat-history">
    <ChatMessage :message :isSended="message.peerId == user.id" v-for="message in chat.messages" />
  </div>
</template>