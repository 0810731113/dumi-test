import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
export declare type ButtonSize = 'lg' | 'sm';
export declare type ButtonType = 'primary' | 'default' | 'danger' | 'link';
interface BaseButtonProps {
  children: React.ReactChild;
  size: ButtonSize;
  btnType?: ButtonType;
  disabled?: boolean;
  className?: string;
  href?: string;
}
declare type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<
  NativeButtonProps & AnchorButtonProps
>;
declare const Button: FC<ButtonProps>;
export default Button;
