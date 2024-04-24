import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true
  
});
  export default openai;

  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const  GOOGLE_API_KEY=''+process.env.REACT_APP_GEMINIKEY
// Access your API key as an environment variable (see "Set up your API key" above)
export const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);