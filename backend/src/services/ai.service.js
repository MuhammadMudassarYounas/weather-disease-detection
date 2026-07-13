import { GoogleGenAI } from "@google/genai";
import { env } from "../config/env.js";

const ai = new GoogleGenAI({
  apiKey: env.GEMINI_API_KEY,
});

export const generateHealthReport = async (
  disease,
  weather,
  patient
) => {
  try {
    const prompt = `
You are an experienced physician.

Predicted Disease:
${disease}

Patient Information:
${JSON.stringify(patient, null, 2)}

Weather:
${JSON.stringify(weather, null, 2)}

Return ONLY valid JSON.

{
  "summary":"",
  "possible_causes":[],
  "precautions":[],
  "recommended_food":[],
  "recommended_tests":[],
  "when_to_visit_doctor":"",
  "emergency_warning":""
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    let text = response.text;

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(text);

  } catch (error) {
    console.error("========== GEMINI ERROR ==========");
    console.error(error);
    console.error("==================================");

    throw error;
  }
};