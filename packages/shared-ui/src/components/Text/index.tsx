import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
import './index.scss';

import { FontSize } from '../../config/size';
import { ColorMap } from '../../config/colorMap';

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'block' | 'inline' | 'label';
export type TextWeight = 'light' | 'regular' | 'medium' | 'bold';

export interface TextProps
  extends HTMLAttributes<HTMLDivElement | HTMLSpanElement | HTMLHeadingElement> {
  textColor?: ColorMap;
  classNames?: string;
  variant?: Variant;
  htmlFor?: string;
  weight?: TextWeight;
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
  classNames,
  children,
  htmlFor,
  variant = 'block',
  weight = 'regular',
  lineHeight = 'narrow',
  size = 'medium',
  align = 'start',
  textColor,
  ...props
}: TextProps) => {
  const element = elementMap[variant] || 'span';
  const className = cn(
    '_TEXT_',
    classNames,
    `font-size-${size}`,
    `font-weight-${weight}`,
    `line-height-${lineHeight}`,
    `text-align-${align}`,
  );

  if (variant === 'label') {
    return (
      <label className={className} style={{ color: textColor }} htmlFor={htmlFor} {...props}>
        {children}
      </label>
    );
  }

  return React.createElement(
    element,
    {
      className,
      style: { color: textColor },
      ...props,
    },
    children,
  );
};

export default Text;
