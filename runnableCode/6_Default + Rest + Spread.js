var colors = require('colors');

function f(x, y=1) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}

console.log('Default: '.blue, f(1));

function f2(x, ...y) {
  // y is an Array
  return x + y.length;
}

console.log('Rest: '.yellow, f2(1, true));

function f3(x, y) {
  return x + y;
}

// Pass each elem of array as argument
console.log('Spreed: '.green, f3(...[1,1]));
