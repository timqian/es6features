// Expression bodies
var evens = [0,2,4,6];
var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);
var pairs = evens.map(v => ({even: v, odd: v + 1}));
console.log(odds);
console.log(nums);
console.log(pairs);

// Statement bodies
var nums = [1,2,5,10,15,12];
var fives = [];
nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});
console.log(nums);

// Lexical this
var bob = {
  _name: 'Bob',
  _friends: ['timqian', 'bigfei'],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + 'knows' + f));
  },
};

bob.printFriends();
