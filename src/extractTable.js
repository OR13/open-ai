const { Configuration, OpenAIApi } = require("openai");

const extractTable = async (options = {}) => {
  const configuration = new Configuration({
    apiKey: options.apiKey,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion("text-davinci-002", {
    prompt: `
A table summarizing the ${options.class} from: 

${options.text} 


| ${options.class} | ${options.attributes.join(" | ")} |
    
`,

    temperature: 0,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  const betterText = `
| ${options.class} | ${options.attributes.join(" | ")} |
| --- | ${options.attributes.map(() => "---").join(" | ")} |
${response.data.choices[0].text}
`;

  const formated = betterText
    .split("\n")
    .filter((line) => line.length)
    .join("\n");

  response.data.choices[0].text = formated;

  return response.data;
};

module.exports = extractTable;
