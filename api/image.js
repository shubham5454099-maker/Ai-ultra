export default async function handler(req, res) {
  const prompt = req.query.prompt;

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      prompt: prompt,
      size: "1024x1024"
    })
  });

  const data = await response.json();
  res.status(200).json({ image: data.data[0].url });
      }
