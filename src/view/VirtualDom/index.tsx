import React, { useEffect } from 'react';

type MsgType = string;
function hello(msg: MsgType) {
  alert(msg);
}

const Ele = () => (
  <div>
    <div>十三个你好</div>
    <div>你是什么星座</div>
  </div>
);

const MyRender = (vnode, root) => {
  console.log(`--------vnode-root------`);
  console.log(vnode.constructor);
  // console.log(root);
  if (!root) {
    return;
  }
  let element;
  if (vnode.constructor !== Object) {
    element = document.createTextNode(vnode);
  } else {
    element = document.createElement(vnode.type);
    // element = document.createDocumentFragment(vnode.type);
  }
  root.appendChild(element);
  if (vnode.props && vnode.props.children) {
    const childrenNode = vnode.props.children;
    if (Array.isArray(childrenNode)) {
      childrenNode.forEach(child => {
        MyRender(child, element);
      });
    } else {
      MyRender(childrenNode, element);
    }
  }
};

export default () => {
  useEffect(() => {
    // const myroot = document.createElement('div');
    // myroot.setAttribute('id','myroot');
    // myroot.innerHTML = '23456678ss'
    // document.body.appendChild(myroot);
    MyRender(Ele(), document.getElementById('myroot'));
  }, []);
  return (
    <div className={``} id="myroot">
      <div>我是</div>
    </div>
  );
};
