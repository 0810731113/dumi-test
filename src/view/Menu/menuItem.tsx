import React, { FC, useContext } from 'react';

import { MenuContenx } from './menu';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: FC<MenuItemProps> = props => {
  const { children, disabled, index } = props;
  const content = useContext(MenuContenx);
  const handleClick = () => {
    if (content.onSelect && !disabled && typeof index === 'string') {
      content.onSelect(index);
    }
  };

  return <li onClick={handleClick}>{children}</li>;
};

MenuItem.displayName = 'MenuItem';
export default MenuItem;
