import { GoogleGenerativeAI } from "@google/generative-ai";

// Type for the result of the generation (based on the assumption from the original code)
interface GenerationResult {
  response: {
    text: () => string;
  };
}

// Create a new instance of the Generative AI API with the API key
const genAI = new GoogleGenerativeAI("GEMINI_API_KEY");

// Specify the model to be used
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Define the prompt to be passed to the model
const prompt: string = "Explain how AI works";

// Function to get the generated content
async function generateContent() {
  try {
    const result: GenerationResult = await model.generateContent(prompt);
    console.log(result.response.text());
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

// Call the function to generate content
generateContent();
