const { getSummary } = require(".");

describe("getSummary", () => {
  it("should return a document by number", async () => {
    const response = await getSummary({
      apiKey: process.env.OPENAI_API_KEY,
      summarize: "hello world",
    });
    expect(response.object).toBe("text_completion");
  });
});
