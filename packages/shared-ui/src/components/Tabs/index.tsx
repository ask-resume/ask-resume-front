import React from 'react';
import cn from 'classnames';
import './index.scss';
import { TabSize } from '../../config/size';

export interface TabProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
  size?: TabSize;
  style?: React.CSSProperties;
}

const Tabs = ({ className, children, size = 'sm', ...props }: TabProps) => {
  return (
    <div className={cn('_TABS_', className, size)} {...props}>
      <div className="underline">{children}</div>
    </div>
  );
};

export default Tabs;
