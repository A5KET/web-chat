<script setup>
  const props = defineProps({
    message: {
      type: Object,
      required: true
    },
    isSended: {
      type: Boolean
    }
  })
</script>

<template>
  <div class="chat-message" :class="{ sended: isSended, received: !isSended }">
    {{ message.text }}
  </div>
</template>