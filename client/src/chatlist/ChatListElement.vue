<script setup>
import IconArrow from '@/icons/IconArrow.vue'
import { minBy, formatDateAsHoursMinutes } from '@/uitls.js'
import { computed } from 'vue'

const props = defineProps({
  chat: {
    type: Object,
    required: true
  },
  isActive: {
    type: Boolean
  }
})

const lastMessage = minBy(props.chat.messages, message => message.date) // #TODO for case when there are no messages 
</script>


<template> 
  <li class="chat-list-element" :class='{ active: isActive }'>
    <div>
      <span class="username">{{ chat.title }}</span> 
      <span class="time">{{ formatDateAsHoursMinutes(lastMessage.date) }}</span>
    </div>
    <div class="last-message">
      <IconArrow class="icon"/>
      <span>{{ lastMessage.text }}</span>
    </div>
  </li>
</template>