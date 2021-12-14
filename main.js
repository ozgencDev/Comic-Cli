#!/usr/bin/env node

const yargs = require("yargs");
const randomComics = require("./Commands/randomComic.js");

yargs
  .scriptName("comic")
  .command({
    command: "random",
    describe: " - Get a random comic",
    handler: randomComics,
  })
  .help().argv;
