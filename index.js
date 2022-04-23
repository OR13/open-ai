const core = require("@actions/core");

const lib = require("./src");

const getOpts = () => {
  return {
    apiKey: core.getInput("api-key"),
    engine: core.getInput("engine"),
    // temperature: core.getInput("temperature"),
    // max_tokens: core.getInput("max_tokens"),
    // top_p: core.getInput("top_p"),
    // frequency_penalty: core.getInput("frequency_penalty"),
    // presence_penalty: core.getInput("presence_penalty"),

    temperature: 0.3,
    max_tokens: 120,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    prompt: core.getInput("prompt"),
  };
};

async function run() {
  try {
    const opts = getOpts();
    // const response = await lib.createCompletion(opts);

    const { apiKey, ...rest } = opts;

    console.log(rest);
    // core.setOutput("json", JSON.stringify(response));
    // core.setOutput("text", response.choices[0].text);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
