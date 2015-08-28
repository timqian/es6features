function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  try {
    await timeout(ms);
  } catch (e) {
    console.log(e);
  }

  console.log(value);
}

asyncPrint('hello world', 3000);
