import React, { useEffect } from 'react';
import { Button } from 'antd';
import { setLocale } from 'umi';
// import { Subject, Observer } from '@/util/Subject';
// import { Schedule } from '@/util/Schedule';
import { Observable, Subject } from '@reactivex/rxjs';
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
    </div>
  );
};
