// ex06-make-it-modular.js
// learnyounode - exercise 6 - Make it Modular
'use strict';

const fileList = require('./ex06-make-it-modular-module.');

const dir = process.argv[2];
const ext = process.argv[3];
const print = (err, list) => {
  if (err) {
    console.log(err);
  }
  list.forEach(item => console.log(item));
};

fileList(dir, ext, print);
