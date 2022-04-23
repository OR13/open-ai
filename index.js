const core = require("@actions/core");

const lib = require("./src");

const getOpts = () => {
  return {
    apiKey: core.getInput("api-key"),
    engine: core.getInput("engine"),
    temperature: parseFloat(core.getInput("temperature")),
    max_tokens: parseInt(core.getInput("max_tokens"), 10),
    top_p: parseFloat(core.getInput("top_p")),
    frequency_penalty: parseFloat(core.getInput("frequency_penalty")),
    presence_penalty: parseFloat(core.getInput("presence_penalty")),
    prompt: core.getInput("prompt"),
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
