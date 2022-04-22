const core = require("@actions/core");

const lib = require("./src");

const getOpts = () => {
  return {
    apiKey: core.getInput("api-key"),
    summarize: core.getInput("summarize"),
  };
};

async function run() {
  try {
    const opts = getOpts();
    const response = await lib.getSummary(opts);
    core.setOutput("json", JSON.stringify(response));
    core.setOutput("text", response.choices[0].text);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
