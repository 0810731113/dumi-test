function compose(...funcs) {
  return function proxy(...args) {
    let len = funcs.length;
    if (len === 0) {
      return args;
    }
    if (len === 1) {
      return funcs[0](...args);
    }
    return funcs.reduce((x, y) => {
      return typeof x === 'function' ? y(x(...args)) : y(x);
    });
  };
}

var fun1 = x => {
  return x + 1;
};
var fun2 = x => {
  return x + 10;
};
var fun3 = x => {
  return x + 100;
};
console.log(compose(fun1, fun2, fun3)(3));
