import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true
  
});
  export default openai;

  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const  G12OOGLE_API_KEY= 'AIzaSyCPUO9TP5WRH-2e7SDcyzvXPiqWubQLVzk'
// Access your API key as an environment variable (see "Set up your API key" above)
export const genAI = new GoogleGenerativeAI(G12OOGLE_API_KEY);