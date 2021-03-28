var o = {};
var aValue = 38;
Object.defineProperty(o, 'a', {
  // value: 37,
  // writable: true,
  enumerable: true,
  configurable: true,
  get() {
    console.log('你正在访问o.a');
    return aValue;
  },
  set(newValue) {
    console.log(`你正在o.a赋值:${newValue}`);
    aValue = newValue;
  },
});
