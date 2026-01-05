import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

// const openai = new OpenAI({});

export const getResponse = (async (req, res) => {
  if(req.method === "POST") {

    const input = [
      {
        role: "developer",
        content: "Respond as a helpful assistant"
      },
      {
        role: "user",
        content: "who invented the internet"
      }
    ]

    const response = await openai.responses.create({
      model: "gpt-5-nano",
      reasoning: { effort: "low" },
      input: input
    })

    console.log(response.output_text)
    return res.json({
      "key": "hi"
    })
  }
})