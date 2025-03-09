import OpenAI from "openai";


// Normally we should do this in backend but since this is a frontend focused project we can use dangerously allow browser to be true.

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export default openai;