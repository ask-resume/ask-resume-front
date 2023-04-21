import React from 'react';
import cn from 'classnames';

import Icon from '../Icon';
import Text from '../Text';
import { ColorMap } from '../../config/colorMap';
import './index.scss';

interface AccordionProps {
  children: React.ReactNode;
}

interface AccordionItemProps {
  title: string;
  align?: 'left' | 'right';
  children: React.ReactNode;
}

export default function Accordion({ children }: AccordionProps) {
  return <ul className={cn('_ACCORDION_')}>{children}</ul>;
}

export function AccordionItem({ title, align = 'right', children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(prevState => !prevState);
  };

  const IconButton = () => {
    return (
      <button className={cn('_icon', { open: isOpen })} onClick={handleClick}>
        <Icon.Arrow color={isOpen ? ColorMap.gray_8 : ColorMap.gray_6} />
      </button>
    );
  };

  return (
    <li className={cn('_item')}>
      <div className={cn('_header', `_icon--${align}`)} onClick={handleClick}>
        {align === 'left' && <IconButton />}
        <Text>{title}</Text>
        {align === 'right' && <IconButton />}
      </div>
      {isOpen && <div className="_body">{children}</div>}
    </li>
  );
}
