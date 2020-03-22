"use strict";

const initCli = require("./rnb-cli");
const cleanup = require("./cleanup");

function handleInput(options) {
  const { isCleanupExample } = options;

  if (isCleanupExample) {
    return cleanup();
  }

  return initCli();
}

module.exports = handleInput;
