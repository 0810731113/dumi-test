import React, { FC, CSSProperties } from 'react';
declare type MenuMode = 'horizontal' | 'vertical';
export interface MenuProps {
  defaultIndex?: string;
  classNames?: string;
  mode?: MenuMode;
  style?: CSSProperties;
  onSelect?: (selectedIndex: string) => void;
  defaultOpenSubMenus?: string[];
}
interface IMenuContext {
  index: string;
  onSelect?: (selectedIndex: string) => void;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}
export declare const MenuContenx: React.Context<IMenuContext>;
declare const Menu: FC<MenuProps>;
export default Menu;
