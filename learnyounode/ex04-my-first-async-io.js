// ex04-my-first-async-io.js
// learnyounode - exercise 4 - My First Async I/O
'use strict';

// import fs from 'fs'; // babel-node version
const fs = require('fs');

fs.readFile(process.argv[2], (err, data) => {
  let lineCount = data.toString().split('\n').length - 1;
  console.log(lineCount);
});
