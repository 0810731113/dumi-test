export class Subject {
  constructor() {
    this.observer = [];
  }

  addObserver(observer) {
    this.observer.push(observer);
  }

  cancelObserver(observer) {
    this.observer = this.observer.filter(item => item !== observer);
  }

  notify(message) {
    this.observer.forEach(i => i.update(message));
  }
}

export class Observer {
  constructor(name) {
    this.name = name;
  }
  update(msg) {
    console.log(`${this.name} 收到消息 : ${msg}`);
  }
}
