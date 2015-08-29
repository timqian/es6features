// 为不同的数据接口提供统一的访问机制，使用for...of做遍历

let fibonacci = {
  [Symbol.iterator]() {
    let pre = 0;
    let cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur };
      },
    };
  },
};

for (let n of fibonacci) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}
