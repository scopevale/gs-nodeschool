// ex06-make-it-modular-module.js
// learnyounode - exercise 6 - Make it Modular - module
'use strict';

const fs = require('fs');
// const path = require('path');

function fileList(dirPath) {
  return new Promise(
    function (resolve, reject) {
      fs.readdir(dirPath, function(err, list) {
        if (err) {
          return reject(err);
        }
        resolve(list);
      });
    }
  );
}

const listFiles = (dir, ext, callback) => {
  const regex = new RegExp(`\\.${ext}`);

  //const extractFileNames = list => list.filter(item => path.extname(item) === `.${ext}`);
  const extractFileNames = list => list.filter(item => item.match(regex));
  const fileNames = list => callback(null, list);

  return fileList(dir)
    .then(extractFileNames)
    .then(fileNames)
    .catch(callback);
};

module.exports = listFiles;
