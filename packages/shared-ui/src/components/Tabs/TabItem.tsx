import React from 'react';
import cn from 'classnames';
import './index.scss';
import { ButtonHTMLAttributes } from 'react';
import { TabSize } from '../../config/size';

export interface TabItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  size?: TabSize;
  selected?: boolean;
  icon?: { leading?: React.ReactElement; tailing?: React.ReactElement };
  disabled?: boolean;
}

const TabItem = ({
  className,
  onClick,
  label,
  size = 'sm',
  selected,
  icon,
  disabled,
  ...props
}: TabItemProps) => {
  return (
    <button
      className={cn('_TAB_ITEM_', size, className, {
        selected,
        iconOnly: !label,
        disabled,
      })}
      onClick={onClick}
      {...props}
    >
      {icon?.leading && <div className="leading-icon">{icon.leading}</div>}
      {label}
      {icon?.tailing && <div className="tailing-icon">{icon.tailing}</div>}
    </button>
  );
};

export default TabItem;
