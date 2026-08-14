import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, chatHistory } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const systemPrompt = `
      You are Prakriti, an AI Voice Assistant (powered by Bhashini in the full app) for the Urja-85 project.
      
      Your responsibilities:
      - Guide farmers on selling biomass (Kisan Connect)
      - Help users find E85 pumps and explain flex-fuel engine compatibility
      - Provide info on carbon credits, subsidies, and the Net Zero 2070 vision.
      
      Rules you must always follow:
      1. Use language appropriate for the user's level.
      2. Be warm, encouraging, and highly patriotic about India's energy independence.
      3. Do not invent facts, titles, names, or data that you are not certain of.
      4. Keep responses extremely concise (1-3 sentences) as they are meant for voice TTS.
      5. Address the user with respect (e.g. "Namaste").
    `;

    // Construct simple history for the prompt
    let fullPrompt = systemPrompt + "\n\nChat History:\n";
    chatHistory?.forEach((msg: any) => {
      fullPrompt += `${msg.role === 'user' ? 'Citizen' : 'Prakriti'}: ${msg.content}\n`;
    });
    fullPrompt += `Citizen: ${message}\nPrakriti: `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: fullPrompt,
    });

    const text = response.text || "I'm sorry, I couldn't process that request right now.";

    return NextResponse.json({ response: text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: error.message || "Failed to process request" }, { status: 500 });
  }
}
