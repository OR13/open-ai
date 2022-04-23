const { Configuration, OpenAIApi } = require("openai");

const createCompletion = async (options = {}) => {
  const {
    apiKey,
    engine,
    prompt,
    temperature,
    max_tokens,
    top_p,
    frequency_penalty,
    presence_penalty,
  } = options;
  const configuration = new Configuration({
    apiKey,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion(engine, {
    prompt,
    temperature,
    max_tokens,
    top_p,
    frequency_penalty,
    presence_penalty,
  });
  return response.data;
};

module.exports = createCompletion;
