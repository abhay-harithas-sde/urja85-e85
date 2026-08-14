import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { region, timeHorizonDays } = await req.json();

    if (!region) {
      return NextResponse.json({ error: "Region is required" }, { status: 400 });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = `
      You are the 'National Fuel Strategic Reserve AI Predictor' for Urja-85.
      Analyze the given region and predict local alternative fuel (E85/Hydrogen) supply levels based on simulated traffic, weather, and agricultural output.
      
      Region: ${region}
      Time Horizon: Next ${timeHorizonDays || 7} Days
      
      Requirements:
      1. Predict the risk of shortage (Low, Medium, High, Critical).
      2. Suggest an automated supply chain rerouting action.
      3. Identify key influencing factors (e.g., Heavy Rain, Harvest Season).
      4. Return valid JSON only.

      Required JSON:
      {
        "shortage_risk_level": "Medium",
        "predicted_deficit_liters": 45000,
        "rerouting_suggestion": "Divert 5 tankers from neighboring district",
        "influencing_factors": ["High holiday traffic", "Delayed sugarcane harvest"]
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
