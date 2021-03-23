function Promise(executor) {
  const self = this;
  self.status = 'pending';
  self.value = null;
  self.reason = null;
  self.onFulfilledCb = [];
  self.onRejectedCb = [];

  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'fulfilled';
      self.value = value;
      self.onFulfilledCb.forEach(function(fn) {
        fn();
      });
    }
  }

  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected';
      self.reason = reason;
      self.onRejectedCb.forEach(function(fn) {
        fn();
      });
    }
  }

  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
  const self = this;
  let promise2;
  onFulfilled =
    typeof onFulfilled === 'function'
      ? onFulfilled
      : function(value) {
          return value;
        };
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : function(err) {
          throw err;
        };
  if (self.status === 'fulfilled') {
    promise2 = new Promise(function(resolve, reject) {
      setTimeout(function() {
        try {
          let x = onFulfilled(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  if (self.status === 'rejected') {
    promise2 = new Promise(function(resolve, reject) {
      setTimeout(function() {
        try {
          let x = onRejected(self.reason);
          resolvePromise(p2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  if (self.status === 'pending') {
    promise2 = new Promise(function(resolve, reject) {
      setTimeout(function() {
        self.onFulfilledCb.push(function() {
          try {
            let x = onFulfilled(self.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
        self.onRejectedCb.push(function() {
          try {
            let x = onRejected(self.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            resolve(e);
          }
        });
      });
    });
  }
  return promise2;
};

function resolvePromise(p2, x, resolve, reject) {
  if (p2 === x) {
    return reject(new TypeError('循环引用'));
  }
  let called;
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then;
      if (typeof x === 'function') {
        then.call(x, function(y) {
          if (called) {
            return;
          }
          called = true;
          resolvePromise(p2, y, resolve, reject);
        });
      } else {
        resolve(x);
      }
    } catch (e) {
      if (called) {
        called = true;
        reject(e);
      }
    }
  } else {
    resolve(x);
  }
}
