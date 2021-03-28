var man = {
  name: 'jscoder',
  age: 22,
};

var proxy = new Proxy(man, {
  get: function(target, property) {
    if (property in target) {
      return target[property];
    } else {
      throw new ReferenceError(`Property ${property} does not exist.`);
    }
  },
});
