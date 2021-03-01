import React, { useEffect } from 'react';
import { Button } from 'antd';
import { setLocale } from 'umi';
import { Subject, Observer } from '@/util/Subject';
import { Schedule } from '@/util/Schedule';
import { Observable } from '@reactivex/rxjs';

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
    let test = new Subject();

    let person1 = new Observer('person:李大仁');
    let person2 = new Observer('person:王小龙');

    test.addObserver(person1);
    test.addObserver(person2);
    // test.cancelObserver(person1)
    test.notify('去杀人');
  };

  const testB = () => {
    //console.log('我是A');
    let appStore = new Schedule();
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
    appStore.publishProduct('macbookPro', '9999');
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

  return (
    <div className={``}>
      <h1>我是测试设计模式</h1>
      <Button onClick={testA}>观察者模式</Button>
      <Button onClick={testB}>发布订阅模式</Button>
      <Button onClick={testC}>测试RXJS</Button>
      <div id="button1">点击触发rxjs事件</div>
    </div>
  );
};
