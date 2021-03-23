function co(gen) {
  if (!gen) return;
  return new Promise((resolve, reject) => {
    var it = gen();
    try {
      function step(next) {
        if (next.done) {
          return resolve(next.value);
        } else {
          Promise.resolve(next.value).then(
            res => {
              return step(it.next(res));
            },
            err => {
              return step(it.throw(err));
            },
          );
        }
      }
      step(it.next());
    } catch (e) {
      return reject(e);
    }
  });
}

function sayhello() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(123);
      console.log(123);
    }, 3000);
  });
}

co(function* helloworld() {
  const data = yield sayhello();
  console.log(data);
  console.log(456);
});
