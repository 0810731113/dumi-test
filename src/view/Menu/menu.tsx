import React, { FC, useState, createContext, CSSProperties } from 'react';
import classnames from 'classnames';
import { MenuItemProps } from './menuItem';

type MenuMode = 'horizontal' | 'vertical';
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

export const MenuContenx = createContext<IMenuContext>({ index: '0' });

const Menu: FC<MenuProps> = props => {
  const { defaultIndex, onSelect, mode, defaultOpenSubMenus, children } = props;
  const [currentActive, setActive] = useState(defaultIndex);

  const handleClick = (index: string) => {
    //console.log(`---------index-------------`);
    //console.log(index);
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      //console.log(`-----------childElement------------`);
      //console.log(childElement);
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        //console.error("warning: Menu has a child which is not a MenuItem component");
      }
    });
  };

  return (
    <ul>
      <MenuContenx.Provider value={passedContext}>
        {/*{props.children}*/}
        {renderChildren()}
      </MenuContenx.Provider>
    </ul>
  );
};

Menu.displayName = 'MenuItem';
export default Menu;
