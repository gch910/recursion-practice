/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one.

Example:

printAndPause([200, 800, 200, 800, 200, 800])
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms

Run tests on just this file by typing `npm test test/02-print-and-pause-spec.js`
on the command line.

***********************************************************************/

// Iterative Solution
function printAndPause(nums) {
  let totalTime = 0;
  for(let i = 0; i < nums.length; i++){
    const waitTime = nums[i];
    totalTime += waitTime;
    setTimeout(()=>{console.log(waitTime)}, totalTime, waitTime);
  }
}

Recursive Solution
function printAndPause(nums) {
  if (nums.length === 0) return;

  let pause = nums.shift()
  console.log(pause);

  setTimeout(function () { printAndPause(nums) }, pause);
}

// printAndPause([200, 800, 200, 800, 200, 800])


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printAndPause;
} catch {
  module.exports = null;
}
