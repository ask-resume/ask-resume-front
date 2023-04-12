import React from 'react';
import cn from 'classnames';
import './index.scss';
import { ButtonHTMLAttributes } from 'react';

export interface TabItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  width?: number;
  selected?: boolean;
  icon?: { leading?: React.ReactElement; tailing?: React.ReactElement };
  disabled?: boolean;
}

const TabItem = ({
  className,
  onClick,
  label,
  width,
  selected,
  icon,
  disabled,
  ...props
}: TabItemProps) => {
  return (
    <button
      className={cn('_TAB_ITEM_', className, {
        selected,
        iconOnly: !label,
        disabled,
      })}
      onClick={onClick}
      style={{ width: width }}
      {...props}
    >
      {icon?.leading && <div className="leading-icon">{icon.leading}</div>}
      {label}
      {icon?.tailing && <div className="tailing-icon">{icon.tailing}</div>}
    </button>
  );
};

export default TabItem;
