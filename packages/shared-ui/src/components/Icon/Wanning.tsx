import React from 'react';
import cn from 'classnames';
import { ColorMap } from '../../config/colorMap';
import './index.scss';

type Valiant = 'circle' | 'circle-ghost';

interface CheckProps {
  color?: ColorMap;
  className?: string;
  size?: number;
  variant?: Valiant;
}

export const Wanning = ({ color, className, size = 16, variant = 'circle' }: CheckProps) => {
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
            id="icon__fill"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
            fill={color || ColorMap.inactive_red}
          />
        </svg>
      );
    case 'circle-ghost':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            id="icon__fill"
            fill="none"
            strokeWidth="2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l 23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
            stroke={color || ColorMap.inactive_red}
          />
        </svg>
      );
  }
};
