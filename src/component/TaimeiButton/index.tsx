import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type MsgType = string;
function hello(msg: MsgType) {
  alert(msg);
}

export type ButtonSize = 'lg' | 'sm';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
  children: React.ReactChild;
  size: ButtonSize;
  btnType?: ButtonType;
  disabled?: boolean;
  className?: string;
  href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<ButtonProps> = props => {
  const { children } = props;

  return <button>{children}</button>;
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
};

export default Button;
