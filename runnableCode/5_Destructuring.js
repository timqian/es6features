const colors = require('colors');

// list matching
var [a,,b] = [1,2,3];
var [head, ...tail] = [1, 2, 3, 4];
console.log('list matching: '.green, a, b, head, tail);

// object matching
var obj = { foo: 'aaa', bar: 'bbb' };
var { foo } = obj; // same name
var { bar: newBar } = obj; // define new name
console.log('obj matching: '.red, foo, newBar);

// Can be used in parameter position
function g({name: x}) {
  console.log('Can be used in parameter position: '.yellow, x);
}

g({name: 'Tim'});

// Fail-soft destructuring
var [a] = [];
console.log('Fail-soft destructuring: '.blue, a === undefined);

// Fail-soft destructuring with defaults
var [a = 1] = [];
console.log('Fail-soft destructuring with defaults: '.cyan, a === 1);
