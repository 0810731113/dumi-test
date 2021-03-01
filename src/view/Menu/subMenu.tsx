import React, {
  FC,
  useContext,
  useState,
  FunctionComponentElement,
} from 'react';
import { MenuItemProps } from './/menuItem';

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: FC<SubMenuProps> = props => {
  const { index, title, children, className } = props;

  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        //console.error(`warning: SubMenu ${index}-${i} has a child which is not a MenuItem component`);
      }
    });

    return (
      <div>
        <ul>{childrenComponent}</ul>
      </div>
    );
  };

  return (
    <li key={index}>
      <div className={''}>{title}</div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';
export default SubMenu;
