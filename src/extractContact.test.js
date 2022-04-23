const fs = require("fs");
const { extractContact } = require(".");

describe.skip("extractContact", () => {
  it("should extract contact information", async () => {
    const response = await extractContact({
      apiKey: process.env.OPENAI_API_KEY,
      email: fs.readFileSync("./src/data/email.txt").toString(),
    });
    expect(response.choices[0].text.trim()).toBe(
      `Maya | 2111 Ash Lane, Crestview CA 92002`
    );
  });
});
