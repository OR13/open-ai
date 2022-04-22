const { Configuration, OpenAIApi } = require("openai");

const getSummary = async (options = {}) => {
  const configuration = new Configuration({
    apiKey: options.apiKey,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion("text-davinci-002", {
    prompt: options.summarize + "\n\nTl;dr",
    temperature: 0.7,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  return response.data;
};

module.exports = getSummary;
