#!/usr/bin/env node

import path from "path";
import yargs from "yargs";
import fs from "fs-extra";

const args = yargs.option({
  name: { type: "string", demandOption: true, alias: "n" },
});

const { name } = args;

fs.mkdir(`./${name}`, (error: Error) => {
  if (error) {
    console.error("Could not create directory!");
    process.exit(0);
  }
});
