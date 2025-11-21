import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getClient = (): GoogleGenAI => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        console.error("API_KEY is missing from environment variables.");
    }
    return new GoogleGenAI({ apiKey: apiKey || 'dummy-key-for-dev' });
};

export const generateTutorResponse = async (
    userMessage: string,
    history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
    try {
        const ai = getClient();
        
        // Construct a history-aware prompt context
        const systemInstruction = `
            Eres un asistente educativo experto en Matemáticas y Ciencias. 
            Tu objetivo es ayudar a estudiantes con explicaciones claras, fomentando la reflexión metacognitiva (ayudarles a entender cómo aprenden).
            
            Estilo de respuesta:
            - Motivador y profesional.
            - Usa ejemplos prácticos.
            - Si el usuario pregunta algo técnico sobre programación educativa, responde como un experto en desarrollo web (React, JS, Gamificación).
            - Mantén las respuestas concisas (menos de 100 palabras si es posible) pero útiles.
        `;

        const contents = [
            { role: 'user', parts: [{ text: systemInstruction }] },
            ...history.map(h => ({
                role: h.role,
                parts: [{ text: h.text }]
            })),
            { role: 'user', parts: [{ text: userMessage }] }
        ];

        // Note: For a simple stateless demo, we use generateContent with history manually injected. 
        // In a full app, we would use chat.sendMessage logic, but generateContent is sufficient for this single-turn demo effect.
        
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: contents.map(c => ({
                role: c.role,
                parts: c.parts
            })), 
            config: {
                temperature: 0.7,
            }
        });

        return response.text || "Lo siento, hubo un error al procesar tu consulta.";
    } catch (error) {
        console.error("Error calling Gemini:", error);
        return "Hubo un error conectando con el tutor virtual. Por favor verifica la configuración de la API.";
    }
};
