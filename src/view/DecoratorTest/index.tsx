import React, { useEffect } from 'react';
import { Button } from 'antd';
import { setLocale } from 'umi';
import { MyTestableClass, MyClass } from '@/util/DecoratorTest';

type MsgType = string;
function hello(msg: MsgType) {
  alert(msg);
}

export default () => {
  useEffect(() => {
    console.log(MyClass.isTestable);
    console.log(MyTestableClass.isTestable);
  }, []);

  return <div className={``}></div>;
};
