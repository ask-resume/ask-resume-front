import React from 'react';
import { ColorMap } from '../../config/colorMap';
import './index.scss';
import cn from 'classnames';

export interface UserProps {
  color?: ColorMap;
  className?: string;
  size?: number;
  rotate?: number;
}

export const User = ({ color = ColorMap.gray_8, className, size = 16, rotate }: UserProps) => {
  return (
    <i
      className={cn('dds-icon', className)}
      style={{
        width: size,
        minWidth: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="icon__fill"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11ZM12 12C16.9706 12 21 16.0294 21 21H3C3 16.0294 7.02944 12 12 12Z"
          fill={color}
        />
      </svg>
    </i>
  );
};
