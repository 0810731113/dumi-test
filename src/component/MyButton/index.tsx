import React, { FC } from 'react';
import { Button } from 'antd';
import { setLocale } from 'umi';

type MsgType = string;

function hello(msg: MsgType) {
  alert(msg);
}

interface BaseButtonProps {
  children: React.ReactNode;
}

const MyButton = props => {
  const changeLang = (lang: string) => {
    //setLocale('zh-CN', false);
    setLocale(lang, false);
  };

  return (
    <div className={``}>
      <Button>{props.children}</Button>
    </div>
  );
};

export default MyButton;
