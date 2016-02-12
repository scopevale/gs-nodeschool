// functional javascript is good
// exercise 2 of 18
// Higher Order Functions

function repeat(operation, num) {
  // SOLUTION GOES HERE
  for (var i = 0; i < num; i++) {
    operation;
  }
}

// Do not remove the line below
module.exports = repeat


// Official Solution - uses recursion
// function repeat(operation, num) {
//   if (num <= 0) return
//   operation()
//   return repeat(operation, --num)
// }

// module.exports = repeat