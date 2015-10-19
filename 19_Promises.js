function timeout(duration = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
};

var p = timeout(1000).then(() => {
  console.log('1000');
  return timeout(2000);
}).then(() => {
  console.log('going to throw err hmm');
  throw new Error('hmm');
}).catch(err => {
  console.log('going to Promise.all');

  // Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例。
  // 都成功，状态才变成fulfilled，一个变rejected，就变rejected
  return Promise.all([timeout(100), timeout(200)]);
});
