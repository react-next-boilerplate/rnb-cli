"use strict";

const inquirer = require("inquirer");

const { Cleanup } = require("./cleanup");

(async () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "Welcome to RNB-CI - select an option",
        choices: [
          {
            key: "clean",
            name: "Deletes the example app",
            value: "clean"
          },
          new inquirer.Separator(),
          {
            name: "Git cleaning",
            disabled: "Unavailable at this time"
          },
          {
            name: "Create Component",
            disabled: "Unavailable at this time"
          },
          {
            name: "Create Container",
            disabled: "Unavailable at this time"
          }
        ]
      }
    ])
    .then(answers => {
      const { option } = answers;

      if (option === "clean") {
        Cleanup();
      }
    });
})();
