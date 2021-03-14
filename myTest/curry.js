// https://blog.csdn.net/qq_39300332/article/details/100177101
function curry(fn) {
  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function() {
        return curriedFn(...args.concat(Array.from(arguments)));
      };
    }
    return fn(...args);
  };
}

function checkByRegExp(regExp, string) {
  return regExp.test(string);
}

var res1 = checkByRegExp(/^1\d{10}$/, '15010001000'); // 校验电话号码
var res2 = checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, 'test@163.com'); // 校验邮箱
console.log(res1);
console.log(res2);

//进行柯里化
let _check = curry(checkByRegExp);
//生成工具函数，验证电话号码
let checkCellPhone = _check(/^1\d{10}$/);
//生成工具函数，验证邮箱
let checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);

console.log(checkCellPhone('15021359488'));
console.log(checkEmail('test@qq.com'));
