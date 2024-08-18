<script setup>
import { ref, onBeforeMount, provide } from 'vue'

import ChatList from "./chatlist/ChatList.vue"
import Chat from "./chat/Chat.vue"
import ChatPlaceholder from './chat/ChatPlaceholder.vue'

const context = {
  user: {
    id: 3,
    username: 'Test'
  }
}
const activeChat = ref(undefined)
provide('context', context)

</script>

<template>
<ChatList 
  :chats 
  :activeChat
  @change="chat => activeChat = chat"
/>
<Chat v-if="activeChat" :chat="activeChat" :user="activeUser"/>
<ChatPlaceholder v-else />
</template>


<style lang='scss'>
@use "assets/app.scss";
</style>
