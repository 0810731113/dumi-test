import React, { useEffect } from 'react';
import { Button } from 'antd';
import { setLocale } from 'umi';
// import { Subject, Observer } from '@/util/Subject';
// import { Schedule } from '@/util/Schedule';
import { Observable, Subject, Scheduler } from '@reactivex/rxjs';
import { Observer } from '@/util/Subject';
// import set = Reflect.set;

type MsgType = string;
function hello(msg: MsgType) {
  alert(msg);
}

export default () => {
  const changeLang = (lang: string) => {
    //setLocale('zh-CN', false);
    setLocale(lang, false);
  };

  const testA = () => {
    //console.log('我是A');
    /* let test = new Subject();

    let person1 = new Observer('person:李大仁');
    let person2 = new Observer('person:王小龙');

    test.addObserver(person1);
    test.addObserver(person2);
    // test.cancelObserver(person1)
    test.notify('去杀人');*/
  };

  const testB = () => {
    //console.log('我是A');
    /* let appStore = new Schedule();
    appStore.subscribeProduct('iphone', time => {
      console.log(`手机店关注了新款iphone发布时间为 ${time}`);
    });

    appStore.subscribeProduct('iphone', time => {
      console.log(`个人关注了新款iphone发布时间为 ${time}`);
    });

    appStore.subscribeProduct('macbookPro', sales => {
      console.log(`macroPro正在促销 促销价为 ￥ ${sales}`);
    });

    // appStore.cancelSubscribeProduct('macbookPro');

    appStore.publishProduct('iphone', '2021-02-11');
    appStore.publishProduct('macbookPro', '9999');*/
  };

  const testC = () => {};

  useEffect(() => {
    listenRx();
    inputTest();
  }, []);

  function listenRx() {
    const button = document.querySelector('#button1');
    // Rx.Observable.fromEvent(button,'click').subscribe(() => {
    Observable.fromEvent(button, 'click')
      .throttleTime(1000)
      .scan(count => count + 1, 0)
      .subscribe(count => {
        console.log(`Clicked!!! ${count} times`);
      });
  }

  const test_rxjs2 = () => {
    const observable = Observable.create(function(observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 1000);
      try {
        // const b = 123;
        // b.a = 1;
      } catch (e) {
        observer.error(e);
        //observer.complete();
      }
    });
  };

  const test_rxjs3 = () => {
    // const observable = Observable.from([10,20,30]);
    // const subscription = observable.subscribe(x => console.log(x));
    // subscription.unsubscribe()
    //     function subscribe(observer) {
    //       var intervalID = setInterval(() => {
    //         observer.next('hi');
    //       }, 100);
    //
    //       return function unsubscribe() {
    //         clearInterval(intervalID);
    //       };
    //     }
    //
    //     var unsubscribe = subscribe({next: (x) => console.log(x)});
    //
    // // 稍后：
    //     setTimeout(() => {
    //       unsubscribe(); // 清理资源
    //     },2000)
    const observable = Observable.interval(1000);
    const subscription = observable.subscribe(x => console.log(x));
    setTimeout(() => {
      subscription.unsubscribe();
    }, 3000);
  };

  const test_subject1 = () => {
    const subject = new Subject();
    subject.subscribe({
      next: x => console.log(`observerA: ` + x),
    });
    subject.subscribe({
      next: v => console.log('observerB: ' + v),
    });

    // subject.next(1)
    // subject.next(2)
    // const observable = Observable.from([1,2,3])
    const observable = Observable.interval(1000);
    observable.subscribe(subject);
    setTimeout(() => {
      subject.complete();
    }, 4000);
  };

  const test_subject2 = () => {
    var observable1 = Observable.interval(400);
    var observable2 = Observable.interval(1000);

    var subscription = observable1.subscribe(x => console.log('first: ' + x));
    var childSubscription = observable2.subscribe(x =>
      console.log('second: ' + x),
    );

    subscription.add(childSubscription);

    setTimeout(() => {
      // subscription 和 childSubscription 都会取消订阅
      subscription.unsubscribe();
    }, 5000);
  };

  const test_subject3 = () => {
    var source = Observable.interval(1000);
    var subject = new Subject();
    var multicasted = source.multicast(subject);

    // 在底层使用了 `subject.subscribe({...})`:
    const subscription1 = multicasted.subscribe({
      next: v => console.log('observerA: ' + v),
    });
    const subscription2 = multicasted.subscribe({
      next: v => console.log('observerB: ' + v),
    });

    // 在底层使用了 `source.subscribe(subject)`:
    multicasted.connect();
    setTimeout(() => {
      // multicasted.unsubscribe
      subscription1.unsubscribe();
      subscription2.unsubscribe();
    }, 4000);
  };

  const test_subject4 = () => {
    var observable1 = Observable.interval(500);
    var observable2 = Observable.interval(1500);
    var merged = Observable.merge(observable1, observable2);

    // 在底层使用了 `subject.subscribe({...})`:
    const subscription1 = merged.subscribe({
      next: v => console.log('observerA: ' + v),
    });
    const subscription2 = merged.subscribe({
      next: v => console.log('observerB: ' + v),
    });

    // 在底层使用了 `source.subscribe(subject)`:
    setTimeout(() => {
      // multicasted.unsubscribe
      subscription1.unsubscribe();
      subscription2.unsubscribe();
    }, 4000);
  };

  const test_subject5 = () => {
    var observable = Observable.create(function(observer) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    }).observeOn(Scheduler.async);

    console.log('just before subscribe');
    observable.subscribe({
      next: x => console.log('got value ' + x),
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => console.log('done'),
    });
    console.log('just after subscribe');
  };

  const inputTest = () => {
    var increaseButton = document.querySelector('#increase');
    var increase = Observable.fromEvent(increaseButton, 'click')
      // 我们再一次映射到一个函数，它会增加 count
      .map(() => state => Object.assign({}, state, { count: state.count + 1 }));

    var decreaseButton = document.querySelector('#decrease');
    var decrease = Observable.fromEvent(decreaseButton, 'click')
      // 我们还是映射到一个函数，它会减少 count
      .map(() => state => Object.assign({}, state, { count: state.count - 1 }));

    var inputElement = document.querySelector('#input3');
    var input = Observable.fromEvent(inputElement, 'input')
      // 我们还将按键事件映射成一个函数，它会产生一个叫做 inputValue 状态
      .map(event => state =>
        Object.assign({}, state, { inputValue: event.target.value }),
      );

    // 我们将这三个改变状态的 observables 进行合并
    var state = Observable.merge(increase, decrease, input).scan(
      (state, changeFn) => changeFn(state),
      {
        count: 0,
        inputValue: '',
      },
    );

    // 我们订阅状态的变化并更新 DOM
    state.subscribe(state => {
      document.querySelector('#count').innerHTML = state.count;
      document.querySelector('#hello').innerHTML = 'Hello ' + state.inputValue;
    });

    // 为了优化渲染，我们可以检查什么状态是实际上已经发生变化了的
    var prevState = {};
    state.subscribe(state => {
      if (state.count !== prevState.count) {
        document.querySelector('#count').innerHTML = state.count;
      }
      if (state.inputValue !== prevState.inputValue) {
        document.querySelector('#hello').innerHTML =
          'Hello ' + state.inputValue;
      }
      prevState = state;
    });
  };

  return (
    <div className={``}>
      <h1>我是测试设计模式</h1>
      <Button onClick={testA}>观察者模式</Button>
      <Button onClick={testB}>发布订阅模式</Button>
      <Button onClick={testC}>测试RXJS</Button>
      <div id="button1">点击触发rxjs事件</div>
      <Button onClick={test_rxjs2}>点击触发rxjs2</Button>
      <Button onClick={test_rxjs3}>点击触发rxjs3</Button>
      <Button onClick={test_subject1}>点击触发subject1</Button>
      <Button onClick={test_subject2}>点击触发subject2</Button>
      <Button onClick={test_subject3}>多播的 Observables</Button>
      <Button onClick={test_subject4}>merge</Button>
      <Button onClick={test_subject5}>Scheduler </Button>
      <input id="input1" />
      <div id="button2">点击button2</div>
      输入的字符是:<span id="receiver"></span>
      state:
      <span id="increase"> + </span>
      <span id="decrease"> - </span>
      <input id="input3" type="text" />
      <span id="count"></span>
      <span id="hello"></span>
    </div>
  );
};
