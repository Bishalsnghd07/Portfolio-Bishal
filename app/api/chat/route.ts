// import { NextRequest, NextResponse } from "next/server";
// import { Configuration, OpenAIApi } from "openai";

// const config = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY, // Set this in .env
// });

// const openai = new OpenAIApi(config);

// export async function POST(req: NextRequest) {
//   const { messages } = await req.json();

//   const systemPrompt = {
//     role: "system",
//     content: `You are an AI assistant helping users learn more about Bishal, a Full Stack Developer skilled in React, TypeScript, Tailwind CSS, and Next.js. Be concise, friendly, and helpful.`,
//   };

//   const response = await openai.createChatCompletion({
//     model: "gpt-4",
//     messages: [systemPrompt, ...messages],
//   });

//   return NextResponse.json({
//     reply: response.data.choices[0].message?.content,
//   });
// }

// import { OpenAI } from "openai";
// import { NextRequest, NextResponse } from "next/server";

// // Initialize OpenAI client with API key from environment
// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // Make sure this is set in .env.local
// });

// export async function POST(req: NextRequest) {
//   const { messages } = await req.json();

//   const systemPrompt = {
//     role: "system",
//     content: `You are an AI assistant helping users learn more about Bishal, a Full Stack Developer skilled in React, TypeScript, Tailwind CSS, and Next.js. Be concise, friendly, and helpful.`,
//   };

//   const response = await openai.chat.completions.create({
//     model: "gpt-4",
//     messages: [systemPrompt, ...messages],
//   });

//   return NextResponse.json({
//     reply: response.choices[0]?.message?.content,
//   });
// }

// import { OpenAI } from "openai";
// import { NextRequest, NextResponse } from "next/server";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(req: NextRequest) {
//   try {
//     const { messages } = await req.json();

//     const systemPrompt = {
//       role: "system",
//       content: `You are an AI assistant helping users learn more about Bishal, a Full Stack Developer skilled in React, TypeScript, Tailwind CSS, and Next.js. Be concise, friendly, and helpful.`,
//     };

//     const response = await openai.chat.completions.create({
//       // model: "gpt-4",
//       model: "gpt-3.5-turbo",
//       messages: [systemPrompt, ...messages],
//     });

//     return NextResponse.json({
//       reply:
//         response.choices[0]?.message?.content ??
//         "Sorry, I couldn't find a response.",
//     });
//   } catch (error: any) {
//     console.error("OpenAI API error:", error);

//     return NextResponse.json(
//       { error: "Something went wrong with the AI response." },
//       { status: 500 }
//     );
//   }
// }

// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const userMessage = messages[messages.length - 1]?.content;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(userMessage);
    const reply = result.response.text();

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Gemini error:", error);
    return NextResponse.json(
      { error: "Failed to fetch Gemini response" },
      { status: 500 }
    );
  }
}
