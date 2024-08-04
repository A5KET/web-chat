<script setup>
  const emit = defineEmits(['submit'])
  function onTextAreaInput(event) {
    const textarea = event.target
    textarea.style.height = 'auto'
    textarea.style.height = (textarea.scrollHeight) + "px"
  }
</script>

<template>
  <div class="chat-input-box">
    <textarea @input="onTextAreaInput" placeholder="Write a message..." lang="en"></textarea>
  </div>
</template>