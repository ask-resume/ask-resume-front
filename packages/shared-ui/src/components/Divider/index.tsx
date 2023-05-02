import React from 'react';
import cn from 'classnames';
import { ColorMap } from '../../config/colorMap';
import './index.scss';

export interface DividerProps {
  className?: string;
  variant?: 'default' | 'vertical';
  color?: ColorMap;
  size?: number;
  width?: number;
  height?: number;
}

const Divider = ({
  className,
  variant = 'default',
  color,
  size = 8,
  width,
  height,
}: DividerProps) => {
  const isVariantDefault = variant === 'default';

  return (
    <hr
      className={cn('_DIVIDER_', className, variant)}
      style={{
        backgroundColor: `${color ?? ColorMap.gray_2}`,
        margin: `${isVariantDefault ? `${size}px` : 0} ${!isVariantDefault ? `${size}px` : 0}`,
        // variant's default Style
        // - default) width = 100% / height = 1px
        // - vertical) width = 1px / height = 1rem
        width: `${variant === 'default' ? `${width}%` : `${width}px`}`,
        height: `${height}px`,
      }}
    />
  );
};

export default Divider;
