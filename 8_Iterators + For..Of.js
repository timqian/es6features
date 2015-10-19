// 为adding 对象部署Symbol.iterator方法
let adding = {
  [Symbol.iterator]() {
    let cur = 0;
    return {
      next() {
        cur++;
        return { done: false, value: cur };
      },
    };
  },
};

// for...of循环内部调用的是数据结构的Symbol.iterator方法。
for (let n of adding) {
  // truncate the sequence at 10
  if (n > 10) break;
  console.log(n);
}

// interface:
// interface IteratorResult {
//   done: boolean;
//   value: any;
// }
// interface Iterator {
//   next(): IteratorResult;
// }
// interface Iterable {
//   [Symbol.iterator](): Iterator
// }
