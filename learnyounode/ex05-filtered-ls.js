// ex05-filtered-ls.js
// learnyounode - exercise 5 - Filtered ls
'use strict';

// import fs from 'fs'; // babel-node version
const fs = require('fs');

const regex = new RegExp(`\\.${process.argv[3]}`);

fs.readdir(process.argv[2], (err, files) => {
  files.forEach(file => {
    file.match(regex) ? console.log(file) : null;
  });
});
