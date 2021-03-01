import React, { FC, useState, createContext, CSSProperties } from 'react';
import './index.less';

import Menu, { MenuProps } from './menu';
import MenuItem, { MenuItemProps } from './menuItem';
import SubMenu, { SubMenuProps } from '@/view/Menu/subMenu';

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
};

const TransMenu = Menu as IMenuComponent;

TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
