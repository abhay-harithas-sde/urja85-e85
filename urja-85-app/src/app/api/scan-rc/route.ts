import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { vehicleModel, imageUrl } = await req.json();

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    let prompt = `
      You are an AI Engine Compatibility Scanner for the Urja-85 project.
      Evaluate if the vehicle is compatible with E85 (Flex-Fuel) or if it requires a conversion kit.
      
      Requirements:
      1. Determine compatibility (Yes, No, Needs Kit).
      2. Explain why briefly.
      3. Return valid JSON only.

      Required JSON:
      {
        "compatible": "Yes / No / Needs Kit",
        "explanation": "Brief explanation",
        "co2_savings_potential_kg": 150
      }
    `;

    let contents: any = prompt;

    if (imageUrl) {
      prompt += "\nAn image of the RC document is attached. Please extract the vehicle make and model from it to determine compatibility.";
      // Fetch the image from Cloudinary URL
      const imageResp = await fetch(imageUrl);
      const arrayBuffer = await imageResp.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      contents = [
        { text: prompt },
        {
          inlineData: {
            data: buffer.toString("base64"),
            mimeType: imageResp.headers.get("content-type") || "image/jpeg"
          }
        }
      ];
    } else if (vehicleModel) {
      prompt += `\nVehicle Model provided: ${vehicleModel}`;
      contents = prompt;
    } else {
      return NextResponse.json({ error: "Provide either a vehicleModel or an imageUrl" }, { status: 400 });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
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
