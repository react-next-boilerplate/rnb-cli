"use strict";

const { Signale } = require("signale");

const DEFAULT_PATH_TEMPLATES =
  "node_modules/@r-next-b/cli/templates/react-next-boilerplate";

const options = {
  scope: "Cleanup"
};

const configDefault = {
  defaultPathTemplates: DEFAULT_PATH_TEMPLATES
};

const signale = new Signale(options);

module.exports = { configDefault, signale };
