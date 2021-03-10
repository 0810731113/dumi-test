import React, { useEffect } from 'react';
import { Button } from 'antd';
import { setLocale } from 'umi';
import '../../../node_modules/alloyfinger/transformjs/transform';
import * as AlloyFinger from 'alloyfinger';

type MsgType = string;
function hello(msg: MsgType) {
  alert(msg);
}
export default () => {
  const changeLang = (lang: string) => {
    //setLocale('zh-CN', false);
  };

  useEffect(() => {
    var initScale = 1;
    var pinchRotateImg = document.getElementById('pinchRotateImg');
    window.Transform(pinchRotateImg);
    new AlloyFinger(pinchRotateImg, {
      rotate: function(evt) {
        pinchRotateImg.rotateZ += evt.angle;
      },
      multipointStart: function() {
        initScale = pinchRotateImg.scaleX;
      },
      pinch: function(evt) {
        pinchRotateImg.scaleX = pinchRotateImg.scaleY = initScale * evt.zoom;
      },
    });
  }, []);

  return (
    <div className={``}>
      <img
        id="pinchRotateImg"
        src={require(`@/asset/images/live_cover.jpg`)}
        alt=""
        style={{
          transform:
            'perspective(500px) matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
        }}
      />
    </div>
  );
};
