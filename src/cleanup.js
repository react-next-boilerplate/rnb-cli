"use strict";

const shell = require("shelljs");

const configDefault = require("./config-default");

const cleanup = () => {
  if (!shell.which("git")) {
    shell.echo("Sorry, this script requires git");

    shell.exit(1);
  }

  if (!shell.test("-e", "docs")) {
    configDefault.signale.info(`The example is deleted already.`);

    shell.exit(1);
  }

  if (
    !shell.test("-e", `${process.cwd()}/${configDefault.defaultPathTemplates}`)
  ) {
    configDefault.signale.info(`Install the following package. @r-next-b/cli`);

    shell.exit(1);
  }

  configDefault.signale.pending("Cleanup started...");

  // Handle docs/* folder
  shell.rm("-rf", "docs");

  // Handle component/* folder
  shell.rm("-rf", "src/components/*");
  shell.cp("-R", `${configDefault.defaultPathTemplates}/src/components`, "src");

  // Handle containers/* folder
  shell.rm("-rf", "src/containers");
  shell.cp("-R", `${configDefault.defaultPathTemplates}/src/containers`, "src");

  // Handle pages/* folder
  shell.rm("-rf", "src/pages");
  shell.cp("-R", `${configDefault.defaultPathTemplates}/src/pages`, "src");

  // Handle tests/* folder
  shell.rm("-rf", "src/tests");
  shell.cp("-R", `${configDefault.defaultPathTemplates}/src/tests`, "src");

  // Handle public/* folder
  shell.rm("-rf", "public/*");
  shell.cp(
    "-R",
    `${configDefault.defaultPathTemplates}/public/static`,
    "public"
  );

  // remove CODE_OF_CONDUCT.md, CONTRIBUTING.md, .travis.yml files
  shell.rm(["CODE_OF_CONDUCT.md", "CONTRIBUTING.md", ".travis.yml"]);

  // Handle README.md
  shell.cp(`${configDefault.defaultPathTemplates}/README.md`, ".");

  // Commit the changes
  if (
    shell.exec('git add . --all && git commit -qm "Remove default example"')
      .code !== 0
  ) {
    configDefault.signale.error("Error: Git commit failed");

    shell.exit(1);
  }

  configDefault.signale.complete("Cleanup done. ready for Coding");
};

module.exports = cleanup;
