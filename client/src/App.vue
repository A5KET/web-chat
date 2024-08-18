<script setup>
import { ref, onBeforeMount, provide } from 'vue'

import ChatList from './chatlist/ChatList.vue'
import Chat from './chat/Chat.vue'
import ChatPlaceholder from './chat/ChatPlaceholder.vue'
import { ServiceName } from './consts.js'


const props = defineProps({
  chatService: {
    type: Object,
    required: true
  },
  messageService: {
    type: Object,
    required: true
  }
})


const context = {
  user: {
    id: 3,
    username: 'Test'
  }
}
const chats = ref([])
const activeChat = ref(undefined)

provide(ServiceName.CHAT, props.chatService)
provide(ServiceName.MESSAGE, props.messageService)
provide('context', context)

onBeforeMount(async () => {
  chats.value = await props.chatService.getAll()
}) 


</script>

<template>
<ChatList 
  :chats 
  :activeChat
  @change="chat => activeChat = chat"
/>
<Chat v-if="activeChat" :chat="activeChat"/>
<ChatPlaceholder v-else />
</template>


<style lang='scss'>
@use "assets/app.scss";
</style>
