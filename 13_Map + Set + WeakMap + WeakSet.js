var colors = require('colors');

// Set
let s = new Set();
s.add('hi').add('tim');
console.log('s.has: '.green, s.has('tim'));
console.log('s.size: '.green, s.size);

// Maps
let m = new Map();
m.set(s, 'isASet').set('hi', 'tim');
console.log('Map .get: '.blue, m.get(s));
console.log('Map .size: '.blue, m.size);

// Weak Maps
var wm = new WeakMap();
wm.set(s, { extra: 42 });
console.log('WeakMap .get: '.grey, wm.get(s));
console.log('WeakMap .size: '.grey, wm.size);

// Weak Sets
var ws = new WeakSet();
var obj = { data: 42 };
ws.add(obj);

// Because the added object has no other references,
// it will not be held in the set
ws.add({a: 2});
console.log('WeakSet .has: '.red, ws.has(obj));
console.log('WeakSet .size: '.red, ws.size);
