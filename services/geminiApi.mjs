import { GoogleGenerativeAI } from '@google-ai/generative-ai';

const geminiApiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY; 

const getGeminiResponse = async (message) => {
  try {
    const model = new GoogleGenerativeAI(ApiKey); 
    const response = await model.generateText({
      prompt: message, 
    });
    return response.text; 
  } catch (error) {
    console.error('Error fetching Gemini response:', error);
    return 'An error occurred while communicating with Gemini.';
  }
};

export default getGeminiResponse;