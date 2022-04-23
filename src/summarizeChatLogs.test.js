const fs = require("fs");
const { summarizeChatLogs } = require(".");

describe.skip("summarizeChatLogs", () => {
  it("should return a summary of the chat conversation", async () => {
    const response = await summarizeChatLogs({
      apiKey: process.env.OPENAI_API_KEY,
      logs: fs.readFileSync("./src/data/logs.txt").toString(),
    });
    expect(response.choices[0].text.trim()).toBe(
      "The team is discussing the company's recent successes and failures."
    );
  });
});
