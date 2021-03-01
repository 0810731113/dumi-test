import React from 'react';
import TaimeiButton from '@/component/TaimeiButton';

type MsgType = string;
function hello(msg: MsgType) {
  alert(msg);
}

export default () => {
  return (
    <TaimeiButton size={'lg'} btnType={'danger'}>
      我是一个Button
    </TaimeiButton>
  );
};
