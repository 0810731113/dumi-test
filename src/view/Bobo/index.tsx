import React from 'react';
import { Button } from 'antd';
import { setLocale } from 'umi';
import MyButton from '@/component/MyButton/index';

type MsgType = string;
function hello(msg: MsgType) {
  alert(msg);
}
export default () => {
  const changeLang = (lang: string) => {
    //setLocale('zh-CN', false);
    setLocale(lang, false);
  };

  return (
    <div className={``}>
      <MyButton></MyButton>
    </div>
  );
};
