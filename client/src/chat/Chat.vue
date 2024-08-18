<script setup>
  import ChatHeader from './ChatHeader.vue'
  import ChatHistory from './ChatHistory.vue'
  import ChatInput from './ChatInputBox.vue'

  const props = defineProps({
    chat: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <div class='chat'>
    <ChatHeader :chat/>
    <ChatHistory :chat/>
    <ChatInput />
  </div>
</template>

<style lang='scss'>
  @use 'assets/chat.scss';
</style>