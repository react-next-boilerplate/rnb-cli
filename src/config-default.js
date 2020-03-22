"use strict";

const { Signale } = require("signale");

const DEFAULT_PATH_TEMPLATES =
  "node_modules/@r-next-b/cli/templates/react-next-boilerplate";
const IS_CLEANUP_EXAMPLE = "isCleanupExample";
const IS_CLEANUP_GIT = "isCleanupGit";

const LIST_OPTIONS = {
  IS_CLEANUP_EXAMPLE,
  IS_CLEANUP_GIT
};

const ALIAS_OPTIONS = {
  c: LIST_OPTIONS.IS_CLEANUP_EXAMPLE,
  g: LIST_OPTIONS.IS_CLEANUP_GIT
};

const configSingle = {
  scope: "Cleanup"
};

const configDefault = {
  defaultPathTemplates: DEFAULT_PATH_TEMPLATES,
  aliasOptions: { ...ALIAS_OPTIONS },
  listOptions: LIST_OPTIONS,
  signale: new Signale(configSingle)
};

module.exports = configDefault;
