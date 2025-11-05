const { GoogleGenAI } =require("@google/genai");

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);



async function generateCaption(base64ImageFile) {
  const contents = [
  {
    inlineData: {
      mimeType: "image/jpeg",
      data: base64ImageFile,
    },
  },
  { text: "Caption this image." },
];

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: contents,
  config:{
    systemInstruction:`
    you are master at creating caption from a Image.
  you will create one caption.
  the caption should be short and precise.
  the caption should include hashtags and emojis
    `
  }
  
});
return response.text ;
}

module.exports=generateCaption;