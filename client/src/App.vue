<script setup>
import { ref } from "vue"

import ChatList from "./chatlist/ChatList.vue"
import Chat from "./chat/Chat.vue"
import ChatPlaceholder from './chat/ChatPlaceholder.vue'


const activeUser = {
  id: 3,
  username: 'Test'
}

const user1 = {
  id: 1,
  username: 'Alex'
}

const user2 = {
  id: 2,
  username: 'Boba'
}

const chats = ref([
  {
    id: 1,
    user: user1,
    messages: [
    {
        id: 1,
        peerId: user1.id,
        text: 'hello 2',
        date: new Date()
      },
      {
        id: 2,
        peerId: activeUser.id,
        text: 'hi 2',
        date: new Date()
      }
    ]
  },
  {
    id: 2,
    user: user2,
    messages: [
      {
        id: 1,
        peerId: user2.id,
        text: 'hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello',
        date: new Date()
      },
      {
        id: 2,
        peerId: activeUser.id,
        text: 'hi',
        date: new Date()
      }
    ],

  }
])
const activeChat = ref(undefined)

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
