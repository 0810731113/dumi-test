const index = Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation'])
  .index;
console.log(index);

function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.log('Shape moved.');
};

function Other() {
  this.z = 0;
}

Other.prototype.setH = function(z) {
  this.z = z;
};

function Rectangle() {
  Shape.call(this);
  Other.call(this);
}

Rectangle.prototype = Object.create(Shape.prototype);
Object.assign(Rectangle.prototype, Other.prototype);
Rectangle.prototype.constructor = Rectangle;

const rec1 = new Rectangle();
rec1.setH(10);
console.log(rec1.z);

//寄生模式的原型继承
if (typeof Object.create !== 'function') {
  Object.create = function(proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
      throw new TypeError('Object prototype my only be an Object: ' + proto);
    } else if (proto === null) {
      throw new Error(
        "This browser's implement of Object.create is a shim and doesn't support null",
      );
    }
    if (typeof propertiesObject !== 'undefined') {
      throw new Error('not support a second argument');
    }
    function F() {}
    F.prototype = proto;
    return new F();
  };
}

function Monster() {
  this.eyeCount = 4;
}

const handler1 = {
  set(obj, prop, value) {
    if (prop === 'eyeCount' && value % 2 !== 0) {
      console.log('Monsters mast have an even of eyes');
    } else {
      return Reflect.set(...arguments);
    }
  },
};

const monster1 = new Monster();
const proxy1 = new Proxy(monster1, handler1);

// proxy1.eyeCount = 3;
proxy1.eyeCount = 8;
console.log(proxy1.eyeCount);
