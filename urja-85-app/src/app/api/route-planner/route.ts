import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { origin, destination } = await req.json();

    if (!origin || !destination) {
      return NextResponse.json({ error: "Origin and destination are required" }, { status: 400 });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = `
      You are the 'E85 Route Planner' AI for Urja-85.
      Calculate the green impact of a trip using E85 fuel vs standard petrol.
      
      Origin: ${origin}
      Destination: ${destination}
      
      Requirements:
      1. Estimate the distance in kilometers.
      2. Predict E85 availability on this route (High, Medium, Low).
      3. Calculate estimated CO2 saved (in kg) if using E85.
      4. Generate a fun, gamified message for the driver.
      5. Return valid JSON only.

      Required JSON:
      {
        "estimated_distance_km": 150,
        "e85_availability": "Medium",
        "co2_saved_kg": 12.5,
        "gamified_message": "Awesome! You'll save enough CO2 to offset 2 trees!",
        "urja_coins_reward": 50
      }
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    const text = response.text || "";
    const jsonStr = text.replace(/```json\n?|\n?```/g, "").trim();
    const result = JSON.parse(jsonStr);

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: error.message || "Failed to process request" }, { status: 500 });
  }
}
