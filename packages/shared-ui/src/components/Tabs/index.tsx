import React from 'react';
import cn from 'classnames';
import './index.scss';

export interface TabProps {
  className?: string;
  children: JSX.Element | JSX.Element[];
  size?: 'xs' | 'sm' | 'md';
  style?: React.CSSProperties;
}

const Tabs = ({ className, children, size = 'md', ...props }: TabProps) => {
  return (
    <div className={cn('_TABS_', className, size)} {...props}>
      <div className="underline">{children}</div>
    </div>
  );
};

export default Tabs;
