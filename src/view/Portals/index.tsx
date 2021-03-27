import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Draggable from 'react-draggable';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

const Modal = ({ message, isOpen, children, ...props }) => {
  const onBGClose = e => {
    console.log('背景点击被触发了');
    props.onClose();
  };
  const goDrag = e => {
    e.stopPropagation();
    // e.can
    e.preventDefault();
    e.cancelBubble = true;
  };
  const onClose = e => {
    e.stopPropagation();
    // e.can
    e.preventDefault();
    e.cancelBubble = true;
    props.onClose();
  };
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="portal-modal" onClick={onBGClose}>
        <Draggable
          // defaultPosition={{x: 25, y: 25}}
          onMouseDown={e => {
            // e.preventDefault()
            // e.cancelBubble = true
          }}
        >
          <div className={'modal-win'} onClick={goDrag}>
            <div className={'portal-header'}>
              <span className={'title'}>{message}</span>
              <button className={'close-btn'} onClick={onClose}>
                Close
              </button>
            </div>
            <div className={'content-box'}>{children}</div>
            <div className={'footer'}>
              <button className={'close-btn'} onClick={onClose}>
                取消
              </button>
              <button className={'close-btn'} onClick={onClose}>
                确定
              </button>
            </div>
          </div>
        </Draggable>
      </div>
    </React.Fragment>,
    document.body,
  );
};
export default function Component() {
  const [open, setOpen] = useState(false);
  return (
    <div className="component">
      <button onClick={() => setOpen(true)}>点击</button>
      <StarOutlined />
      <StarFilled />
      <StarTwoTone twoToneColor="#eb2f96" />
      <Modal
        message="Hello World!"
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        我是子元素
      </Modal>
    </div>
  );
}
