/*
class A{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  setName(name){
    this.name = name;
  }
  fun1(){
    return this.name;
  }
  static fun2(){

  }
}

const a = new A('libo',21);*/

'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

let A = /*#__PURE__*/ (function() {
  function A(name, age) {
    _classCallCheck(this, A);

    this.name = name;
    this.age = age;
  }

  _createClass(
    A,
    [
      {
        key: 'setName',
        value: function setName(name) {
          this.name = name;
        },
      },
      {
        key: 'fun1',
        value: function fun1() {
          return this.name;
        },
      },
    ],
    [
      {
        key: 'fun2',
        value: function fun2() {},
      },
    ],
  );

  return A;
})();

const a = new A('libo', 21);
