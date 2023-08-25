import React from 'react';
import { ColorMap } from '../../config/colorMap';
import './index.scss';
import cn from 'classnames';

export interface LogOutProps {
  color?: ColorMap;
  className?: string;
  size?: number;
  rotate?: number;
}

export const LogOut = ({ color = ColorMap.red_5, className, size = 16, rotate }: LogOutProps) => {
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
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
          id="icon__fill"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 12h-9.5m7.5 3l3-3-3-3m-5-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h5a2 2 0 002-2v-1"
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </svg>
    </i>
  );
};
