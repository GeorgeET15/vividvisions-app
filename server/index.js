const express = require("express");
const Replicate = require("replicate");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.json("Hello to my app");
});

const port = 8000;

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  userAgent: "https://www.npmjs.com/package/create-replicate",
});

async function generateAIContent(imgUrl, prompt, model) {
  const input = {
    seed: 0,
    image: imgUrl,
    steps: 10,
    width: 768,
    prompt: prompt,
  };

  console.log({ model, input });
  console.log("Running...");
  const output = await replicate.run(model, { input });
  console.log("Done!", output);
  return output;
}

app.post("/generateAIContent", async (req, res) => {
  try {
    const { imgUrl, prompt, model } = req.body;
    const generatedImageUrl = await generateAIContent(imgUrl, prompt, model);
    res.send({ imageUrl: generatedImageUrl });
  } catch (error) {
    console.error("Error generating AI content:", error);
    res.status(500).send("Error generating AI content");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
