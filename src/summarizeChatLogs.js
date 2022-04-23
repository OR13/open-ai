const { Configuration, OpenAIApi } = require("openai");

const summarizeChatLogs = async (options = {}) => {
  const configuration = new Configuration({
    apiKey: options.apiKey,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion("text-davinci-002", {
    prompt: `
Summarize these chat logs in 1 sentence:
  
${options.logs}
`,
    temperature: 0,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  return response.data;
};

module.exports = summarizeChatLogs;
