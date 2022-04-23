const fs = require("fs");
const { getSummary } = require(".");

describe.skip("getSummary", () => {
  it("should return a document by number", async () => {
    const response = await getSummary({
      apiKey: process.env.OPENAI_API_KEY,
      summarize: fs.readFileSync("./src/data/lyrics.txt").toString(),
    });
    expect(response.choices[0].text).toBe("text_completion");
  });
});
