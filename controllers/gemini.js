const dotenv = require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-pro"});

async function generate(message) {
    const prompt = message.content;  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return { message: text };
}

module.exports = { generate };