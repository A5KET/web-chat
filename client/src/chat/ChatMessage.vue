<script setup>
import { formatDateAsHoursMinutes } from '@/uitls.js'

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
    <span>{{ message.text }}</span>
    <span class="time">{{  formatDateAsHoursMinutes(message.date) }}</span>
  </div>
</template>