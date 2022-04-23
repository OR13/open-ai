const { Configuration, OpenAIApi } = require("openai");

const extractContact = async (options = {}) => {
  const configuration = new Configuration({
    apiKey: options.apiKey,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion("text-davinci-002", {
    prompt: `
Extract and format the contact details from this email:

${options.email}

Name | Address

`,
    temperature: 0,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  return response.data;
};

module.exports = extractContact;
