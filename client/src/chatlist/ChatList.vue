<script setup>
import ChatListElement from "./ChatListElement.vue"
import ChatListSearch from './ChatListSearch.vue'

const emit = defineEmits(['change'])
const props = defineProps({
  chats: {
    type: Array,
    required: true
  },
  activeChat: {
    type: Object,
  }
})

function handleChatClick(chat) {
  console.log('click')
  if (chat != props.activeChat) {
    emit('change', chat)
  }
}

</script>

<template>
  <div class='chat-list'>
    <ChatListSearch />
    <ul class='chat-list-elements'>
      <ChatListElement 
        v-for='chat in chats'
        :chat='chat' 
        :isActive='chat == activeChat' 
        @click.stop="handleChatClick(chat)"
      />
    </ul>
  </div>
</template>


<style lang="scss">
@use 'assets/chatlist.scss';
</style>