// Proxying a normal object
var target = {};
var handler = {
  get: function(receiver, name) {
    return `Hello, ${name}!`;
  },
};

var p = new Proxy(target, handler);

console.log(p.world);
