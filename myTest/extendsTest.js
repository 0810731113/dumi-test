function Super(name) {
  this.name = name;
  this.list = ['a', 'b', 'c'];
}

Super.prototype.getName = function() {
  return this.name;
};

Super.staticFn = function() {
  return 'Super的静态方法';
};

function Sub(name, age) {
  Super.call(this, name);
  this.age = age;
}

Object.setPrototypeOf(Sub.prototype, Super.prototype);
Object.setPrototypeOf(Sub, Super);

Sub.prototype.getAge = function() {
  return this.age;
};

console.log(Sub.staticFn());
const sub1 = new Sub('神奇的程序员', '20');
sub1.list.push('d');
console.log('sub1', sub1.list);
console.log('sub1', sub1.getName());
console.log('sub1', sub1.getAge());
const sub2 = new Sub('大白', '30');
console.log('sub2', sub2.list);
console.log('sub2', sub2.getName());
console.log('sub2', sub2.getAge());
