import OpenAi from "openai";
import dotenv from "dotenv";

dotenv.config()

const openai = new OpenAi({});

export const getResponse = (async (req, res) => {
  if(req.method === "POST") {
    const input = [
      {
        role: "developer",
        content: `You are a helpful general knowledge expert.`
      },
      {
        role: "user",
        content: `Who invented the television?`
      }
    ]
    const response = await openai.responses.create({
      model: "gpt-5-nano",
      reasoning: { effort: "low" },
      input: input
    });

    console.log(response.output_text)
    
    return res.json("hello")
  }
})

  