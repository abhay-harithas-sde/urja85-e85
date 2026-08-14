import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { cropType, quantityTonnes, location } = await req.json();

    if (!cropType || !quantityTonnes) {
      return NextResponse.json({ error: "Crop type and quantity are required" }, { status: 400 });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const prompt = `
      You are the 'Kisan Connect' AI Assistant for the Urja-85 project.
      Evaluate a farmer's biomass listing and estimate its potential value for ethanol production.
      
      Crop Type: ${cropType}
      Quantity (Tonnes): ${quantityTonnes}
      Location: ${location || "Unknown"}
      
      Requirements:
      1. Estimate a fair market price per tonne (in INR) for this biomass for Ethanol production.
      2. Calculate total estimated value.
      3. Explain briefly how this crop contributes to E85 production.
      4. Suggest the nearest potential ethanol refinery region (if location is provided).
      5. Return valid JSON only.

      Required JSON:
      {
        "estimated_price_per_tonne_inr": 2500,
        "total_estimated_value_inr": 125000,
        "ethanol_contribution_explanation": "Brief explanation",
        "nearest_refinery_region_suggestion": "E.g., Panipat Refinery, IOCL"
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
