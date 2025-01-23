import { type Message } from 'ai'

export function formatChatHistory(messages: Message[]) {
  return messages.map((m) => ({
    role: m.role,
    parts: m.content,
  }))
}

export const initialMessages: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: "Hello! I'm IVBS, the chatbot for In vivo Business Solutions. How can I assist you today?",
  },
]

