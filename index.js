const core = require("@actions/core");

const lib = require("./src");

const getOpts = () => {
  return {
    apiKey: core.getInput("api-key"),
    engine: core.getInput("engine"),
    prompt: core.getInput("prompt"),
    temperature: core.getInput("temperature"),
    max_tokens: core.getInput("max_tokens"),
    top_p: core.getInput("top_p"),
    frequency_penalty: core.getInput("frequency_penalty"),
    presence_penalty: core.getInput("presence_penalty"),
  };
};

async function run() {
  try {
    const opts = getOpts();
    const response = await lib.createCompletion(opts);
    core.setOutput("json", JSON.stringify(response));
    core.setOutput("text", response.choices[0].text);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
