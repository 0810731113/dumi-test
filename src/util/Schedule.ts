export class Schedule {
  constructor() {
    this.products = [];
  }

  subscribeProduct(name, cb) {
    if (!this.products[name]) {
      this.products[name] = [];
    }
    this.products[name].push(cb);
  }

  publishProduct() {
    let args = arguments;
    const name = Array.prototype.shift.call(arguments);
    const cbs = this.products[name];
    if (!cbs || cbs.length === 0) {
      return;
    }
    cbs.forEach(cb => cb.apply(this, args));
  }

  cancelSubscribeProduct(name) {
    delete this.products[name];
  }
}
