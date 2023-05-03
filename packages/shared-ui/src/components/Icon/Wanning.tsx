import React from 'react';
import cn from 'classnames';
import { ColorMap } from '../../config/colorMap';
import './index.scss';

type Valiant = 'circle' | 'circle-ghost';

export interface WanningProps {
  color?: ColorMap;
  className?: string;
  size?: number;
  variant?: Valiant;
}

export const Wanning = ({ color, className, size = 16, variant = 'circle' }: WanningProps) => {
  const Wanning = getWanning(variant, color);
  return (
    <i
      className={cn('dds-icon', className)}
      style={{
        width: size,
        minWidth: size,
        height: size,
      }}
    >
      {Wanning}
    </i>
  );
};

const getWanning = (valiant?: Valiant, color?: ColorMap) => {
  switch (valiant) {
    case 'circle':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 14.99V15M10 5V12M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
            stroke="white"
            fill={color || ColorMap.red_5}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'circle-ghost':
      return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke={color || ColorMap.red_5}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};
