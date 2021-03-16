function Super() {
  this.list = ['a', 'b', 'c'];
}

function Sub() {
  Super.call(this);
}
const sub1 = new Sub();
sub1.list.push('d');
console.log('sub1', sub1.list);
const sub2 = new Sub();
console.log('sub2', sub2.list);
