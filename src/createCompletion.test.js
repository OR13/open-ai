const { createCompletion } = require(".");

describe("createCompletion", () => {
  it("should extract contact information", async () => {
    const response = await createCompletion({
      apiKey: process.env.OPENAI_API_KEY,
      engine: "text-davinci-002",
      temperature: 0.3,
      max_tokens: 120,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      prompt: `
Write a recipe based on these ingredients and instructions:

Frito Pie
Ingredients: Fritos Chili Shredded cheddar cheese Sweet white or red onions, diced small Sour cream

Instructions:
    `,
    });
    console.log(JSON.stringify(response, null, 2));
    expect(response.choices[0].finish_reason).toBe("stop");
  });
});
