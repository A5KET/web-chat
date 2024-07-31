<script setup>
  const props = defineProps({
    chat: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <div class="chat-header">
    <div class="chat-info">
      <span class="username">{{ chat.user.username }}</span>
    </div>
  </div>
</template>