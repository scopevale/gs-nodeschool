// ex03-my-first-io.js
// learnyounode - exercise 3 - My First I/O
'use strict';

// import fs from 'fs'; // babel-node version
const fs = require('fs');

let buffer = fs.readFileSync(process.argv[2]);

let lineCount = buffer.toString().split('\n').length - 1;

console.log(lineCount);
