import { GoogleGenAI } from "@google/genai";
import { PROFILE, PROJECTS, SKILL_CATEGORIES, EDUCATION, CERTIFICATIONS } from "../constants";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, the AI service is currently unavailable (Missing API Key). Please contact Nuwantha directly via email.";
  }

  const systemInstruction = `
    You are an AI assistant representing Nuwantha Siriwardhana on his portfolio website.
    Your goal is to answer questions about his professional background, skills, and projects in a professional, friendly, and concise manner.

    Here is Nuwantha's profile data:
    Name: ${PROFILE.name}
    Title: ${PROFILE.title}
    Summary: ${PROFILE.summary}
    Detailed Bio: ${PROFILE.aboutLong}
    Contact Email: ${PROFILE.email}
    
    Skills: ${JSON.stringify(SKILL_CATEGORIES.map(c => c.skills).flat())}
    
    Projects: ${JSON.stringify(PROJECTS.map(p => ({ title: p.title, desc: p.description, stack: p.techStack })))}
    
    Education: ${JSON.stringify(EDUCATION)}
    Certifications: ${JSON.stringify(CERTIFICATIONS)}

    Guidelines:
    1. Keep answers relatively short (under 100 words unless detailed explanation is asked).
    2. Be polite and professional.
    3. If asked about something not in the data, say you don't have that information but suggest contacting him via email.
    4. Emphasize his dual expertise in Software Engineering and AI/ML.
    5. Speak in the first person plural (e.g., "We" or "Nuwantha") or third person ("Nuwantha is...").
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while thinking. Please try again later.";
  }
};