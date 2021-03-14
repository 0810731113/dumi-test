Function.prototype.bind1 = function(thisArg) {
  if (typeof this !== 'function') {
    return new TypeError(this + ' must be function');
  }
  const arg1 = Array.prototype.slice.call(arguments, 1);
  const self = this;
  const bound = function(args) {
    const arg2 = Array.prototype.slice.call(arguments);
    const allArgs = arg1.concat(arg2);
    if (this instanceof bound) {
      if (self.prototype) {
        function TempFC() {}
        TempFC.prototype = self.prototype;
        bound.prototype = new TempFC();
      }
      return self.apply(this, allArgs);
    } else {
      return self.apply(thisArg, allArgs);
    }
  };
  return bound;
};

Function.prototype.apply1 = function(thisArgs, args) {
  thisArgs = thisArgs || window;
  const tempArg = Symbol('apply1');
  thisArgs[tempArg] = this;
  let result;
  if (args === undefined) {
    result = thisArgs[tempArg]();
  } else {
    result = thisArgs[tempArg](...args);
  }
  delete thisArgs[tempArg];
  return result;
};

Function.prototype.call1 = function() {
  let [thisArgs, ...args] = Array.prototype.slice.call(arguments);
  thisArgs = thisArgs || window;
  let func = Symbol('call1');
  thisArgs[func] = this;
  let result;
  if (args === undefined) {
    result = thisArgs[func]();
  } else {
    result = thisArgs[func](...args);
  }
  delete thisArgs[func];
  return result;
};

var name = '小王';
var age = '17';

var obj = {
  name: 'xiaozhang',
  objAge: this.age,
  myFun: function(fm, t) {
    console.log(
      this.name + '年龄: ' + this.age,
      '来自： ' + fm + ' 去往： ' + t,
    );
  },
};

var db = {
  name: '德玛',
  age: 99,
};

obj.myFun.call(db, '成都', '上海');
obj.myFun.apply(db, ['成都', '上海']);
obj.myFun.bind1(db, '成都', '上海')();
