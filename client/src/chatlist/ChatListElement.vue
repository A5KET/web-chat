<script setup>
  const props = defineProps({
    chat: {
      type: Object,
      required: true
    },
    isActive: {
      type: Boolean
    }
  })
</script>

<template>
  <li class="chat-list-element" :class='{ active: isActive }'>
    <span class="username">{{ chat.user.username }}</span>
    
  </li>
</template>