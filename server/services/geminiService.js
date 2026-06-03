const { GoogleGenerativeAI } = require('@google/generative-ai');

exports.analyzeStartup = async (startupData) => {
  // In a real application, you'd use the actual Gemini SDK and API key
  // e.g. const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  
  // For the sake of this prompt, returning a structured mock response 
  // that would normally come from Gemini's JSON mode or parsed text.
  
  return {
    score: Math.floor(Math.random() * 40) + 60, // 60-100
    strengths: ['Great market potential', 'Clear target audience'],
    weaknesses: ['High competition', 'Vague revenue model'],
    opportunities: ['Emerging tech trends', 'Partnerships'],
    threats: ['Established competitors', 'Regulatory changes'],
    recommendations: ['Clarify revenue model', 'Identify unique selling proposition'],
    summary: 'This is a promising idea but needs more refinement to stand out.'
  };
};
