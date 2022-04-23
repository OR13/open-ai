const fs = require("fs");
const { extractTable } = require(".");

describe.skip("extractTable", () => {
  it("should return markdown table from the given unstructured text", async () => {
    const response = await extractTable({
      apiKey: process.env.OPENAI_API_KEY,
      class: "Fruit",
      attributes: ["Color", "Flavor"],
      text: fs.readFileSync("./src/data/unstructured.txt").toString(),
    });
    expect(response.object).toBe("text_completion");
  });
});
