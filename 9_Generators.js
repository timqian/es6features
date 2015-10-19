/**
 * Simplify iterator-authoring using function* and yield.
 * Subtypes of iterators which include additional next and throw.
 * yield is an expression form which returns a value (or throws)
 */

var adding = {
  [Symbol.iterator]: function* () {
    let cur = 0;
    for (;;) {
      yield cur++;
    }
  },
};

for (var n of adding) {
  if (n > 5) break;
  console.log(n);
}

// generator interface:
//
// interface Generator extends Iterator {
//     next(value?: any): IteratorResult;
//     throw(exception: any);
// }
