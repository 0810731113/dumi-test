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

const arr = [1, 2, 3, 4, 5];

function getAll(arr) {
  let add = 0;
  if (arr.length === 1) {
    return arr[0];
  }
  while (arr.length > 1) {
    const sum = arr[0] + arr[1];
    add += sum;
    arr.splice(0, 2);
    arr.push(sum);
    if (arr.length === 1) {
      break;
    }
  }
  return add;
}

console.log(getAll(arr));
