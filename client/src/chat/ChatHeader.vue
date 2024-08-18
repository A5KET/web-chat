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
      <span class="title">{{ chat.title }}</span>
    </div>
  </div>
</template>