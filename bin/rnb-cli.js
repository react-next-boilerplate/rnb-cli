#!/usr/bin/env node

"use strict";

const { rnbCLI } = require("..");

process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("end", () => {
  rnbCLI();
});
