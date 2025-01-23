import { NextResponse } from 'next/server';
import { TextServiceClient } from '@google-ai/generativelanguage';

// Define the structure of a single message
interface Message {
  role: 'user' | 'system' | 'assistant';
  content: string;
}

// Load API key from environment variables
const apiKey = process.env.NEXT_PUBLIC_GENERATIVE_AI_API_KEY;

if (!apiKey) {
  throw new Error('GENERATIVE_AI_API_KEY is not set in environment variables');
}

// Instantiate the client
const client = new TextServiceClient({
  key: apiKey,
});

// System prompt for the chatbot
const systemPrompt = `You are a Chatbot for Topscore Business Solutions called IVBS. You offer empathetic and business-savvy responses to client questions, FAQs, and more and work to sign up a new client, close a sale, or inform about the status of a client's order. You also ask clients to input their names and email address for more information. The tone should be warm but business-savvy.

When discussing services, provide specific examples and benefits. Always be helpful and professional.`;

export async function POST(req: Request) {
  try {
    // Parse the request body and ensure correct typing
    const { messages }: { messages: Message[] } = await req.json();
    const lastMessage = messages[messages.length - 1];

    const formattedMessages = messages.map((message: Message) => ({
      role: message.role,
      content: message.content,
    }));

    const chatHistory = formattedMessages.slice(0, -1);
    chatHistory.unshift({ role: 'system', content: systemPrompt });

    const request = {
      model: 'models/text-bison-001', // Update model to match available options
      prompt: {
        text: lastMessage.content,
        context: systemPrompt,
        examples: chatHistory.map((msg) => ({
          input: { text: msg.content },
          output: { text: '' }, // Fill this if specific examples are needed
        })),
      },
      temperature: 0.9,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 4096,
    };

    const [response] = await client.generateText(request);

    // Check if candidates exist and handle null or empty cases
    if (!response.candidates || response.candidates.length === 0) {
      return NextResponse.json({ error: 'No candidates returned from the model' }, { status: 500 });
    }

    // Return the first candidate's output
    return NextResponse.json({ text: response.candidates[0].output });
  } catch (error) {
    console.error('Error generating text:', error);
    return NextResponse.json({ error: 'Failed to generate text' }, { status: 500 });
  }
}
