"use strict";

const minimist = require("minimist");
const configDefault = require("./src/config-default");

module.exports.options = minimist(process.argv.slice(2), {
  boolean: [
    configDefault.listOptions.IS_CLEANUP_EXAMPLE,
    configDefault.listOptions.IS_CLEANUP_GIT
  ],
  alias: {
    ...configDefault.aliasOptions
  }
});

module.exports.handleInput = require("./src/handleInput");
module.exports.cleanup = require("./src/cleanup");
module.exports.initCli = require("./src/rnb-cli");
