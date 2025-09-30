import type { Chat, ChatMessage } from "../types";
import { MOCK_CHAT } from "./mockData";

export default function useChat() {
  const chat = ref<Chat>(MOCK_CHAT);
  const messsages = computed<ChatMessage[]>(() => chat.value.messages);

  function createMessage(message: string, role: ChatMessage["role"]) {
    const id = messsages.value.length.toString();

    return {
      id,
      role,
      content: message,
    };
  }

  function sendMessage(message: string) {
    messsages.value.push(createMessage(message, "user"));

    setTimeout(() => {
      messsages.value.push(
        createMessage(
          "This is a mock response from the assistant.",
          "assistant"
        )
      );
    }, 200);
  }

  return {
    chat,
    messsages,
    sendMessage,
  };
}
