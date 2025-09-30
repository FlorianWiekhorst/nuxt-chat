<script setup lang="ts">
import useChat from "../composables/useChat";

const { chat, messages, sendMessage } = useChat();
</script>

<template>
  <ChatWindow :chat="chat" :messages="messages" @send-message="sendMessage" />
</template>
