const aryMethod = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse',
];
const arrayAugmentations = [];

aryMethod.forEach(method => {
  let original = Array.prototype[method];
  arrayAugmentations[method] = function() {
    console.log('我被改变了');
    return original.apply(this, arguments);
  };
});

let list = ['a', 'b', 'c'];
list.__proto__ = arrayAugmentations;

list.push('d');

let list2 = ['a', 'b', 'c'];
list2.push('e');
