
import { GoogleGenAI, Type } from "@google/genai";
import { EXPERIENCES, PROJECTS, SKILLS, EDUCATION, PERSONAL_INFO } from "./constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const resumeContext = `
You are an AI Assistant for Abrar Hameem's portfolio. 
Abrar is a Junior AI Engineer with the following background:
- Current Role: Junior AI Engineer at Softograph.
- Skills: ${SKILLS.map(s => `${s.category}: ${s.items.join(', ')}`).join('; ')}.
- Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period})`).join('; ')}.
- Projects: ${PROJECTS.map(p => p.title).join(', ')}.
- Education: ${EDUCATION[0].degree} from ${EDUCATION[0].institution}.

Answer questions accurately based on this information. If you don't know, suggest they contact him at ${PERSONAL_INFO.email}.
Keep responses professional and concise.
`;

export async function askAboutAbrar(question: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction: resumeContext,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later!";
  }
}
