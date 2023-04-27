import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
import './index.scss';

import { FontSize } from '../../config/size';
import { ColorMap } from '../../config/colorMap';

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'block' | 'inline' | 'label';

export interface TextProps
  extends HTMLAttributes<HTMLDivElement | HTMLSpanElement | HTMLHeadingElement> {
  textColor?: ColorMap;
  className?: string;
  variant?: Variant;
  htmlFor?: string;
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  lineHeight?: 'narrow' | 'wide';
  size?: FontSize;
  align?: 'start' | 'center' | 'end';
}

const elementMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  p: 'p',
  block: 'div',
  inline: 'span',
  label: 'label',
};

const Text = ({
  className,
  children,
  variant = 'block',
  htmlFor,
  weight,
  lineHeight,
  size,
  align,
  textColor,
  ...props
}: TextProps) => {
  const element = elementMap[variant] || 'span';
  const classNames = cn(
    '_TEXT_',
    className,
    `font-size-${size}`,
    `font-weight-${weight}`,
    `line-height-${lineHeight}`,
    `text-align-${align}`,
  );

  if (variant === 'label') {
    return (
      <label className={classNames} style={{ color: textColor }} htmlFor={htmlFor} {...props}>
        {children}
      </label>
    );
  }

  return React.createElement(
    element,
    {
      className: classNames,
      style: { color: textColor },
      ...props,
    },
    children,
  );
};

export default Text;
