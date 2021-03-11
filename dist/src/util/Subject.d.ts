export declare class Subject {
  constructor();
  addObserver(observer: any): void;
  cancelObserver(observer: any): void;
  notify(message: any): void;
}
export declare class Observer {
  constructor(name: any);
  update(msg: any): void;
}
