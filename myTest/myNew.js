function myNew() {
  var constr = Array.prototype.shift.call(arguments);
  var object = Object.create(constr);
  var result = constr.apply(object, arguments);
  return result instanceof Object ? result : obj;
}

function _new() {
  var constr = Array.prototype.shift.call(arguments);
  const object = {};
  obj.__proto__ = constr.prototype;
  constr.apply(object, argument);
  return Object.prototype.toString.call(object) === '[object Object]'
    ? object
    : {};
}

function newOperator(ctor) {
  if (typeof ctor !== 'function') {
    throw 'newOperator function the first param must be a function';
  }
  newOperator.target = ctor;
  var newObj = Object.create(ctor.prototype);
  var argsArr = [].slice.call(arguments, 1);
  var ctorReturnResult = ctor.apply(newObj, argsArr);
  var isObject =
    typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
  var isFunction = typeof ctorReturnResult === 'function';
  if (isObject || isFunction) {
    return ctorReturnResult;
  }
  return newObj;
}
