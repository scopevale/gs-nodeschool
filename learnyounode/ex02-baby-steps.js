// ex02-baby-steps.js
// learnyounode - exercise 2 - Baby Steps

//'use strict';

//console.log(process.argv);

// let sum = process.argv.slice(2).reduce((prev, current) => +(prev) + +(current));
//
// console.log(sum);

const sum = process.argv
  .map( x => +x )
  .filter( x => Number.isInteger(x) )
  .reduce( (y, x) => y + x, 0 );

console.log(sum);
