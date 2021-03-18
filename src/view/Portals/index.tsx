import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.less';

const Modal = ({ message, isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="portal-modal" onClick={onClose}>
      <div className={'modal-win'}>
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
    </div>,
    document.body,
  );
};
export default function Component() {
  const [open, setOpen] = useState(false);
  return (
    <div className="component">
      <button onClick={() => setOpen(true)}>点击</button>
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
