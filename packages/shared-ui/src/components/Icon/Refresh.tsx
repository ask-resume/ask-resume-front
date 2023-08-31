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

export const Refresh = ({ color = ColorMap.gray_8, className, size = 16, rotate }: UserProps) => {
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
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          id="icon__fill"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z"
          fill={color}
        />
      </svg>
    </i>
  );
};
