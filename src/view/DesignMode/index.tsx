import React from 'react';
import { Button } from 'antd';
import { setLocale } from 'umi';

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
    console.log('我是A');
  };

  return (
    <div className={``}>
      <h1>我是测试设计模式</h1>
      <Button onClick={testA}>测试A</Button>
    </div>
  );
};
