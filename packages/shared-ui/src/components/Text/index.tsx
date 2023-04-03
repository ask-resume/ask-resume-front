import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
import './index.scss';

import { TFontSize } from '../../config/size';
import { EColorMap } from '../../config/colorMap';

interface TextProps extends HTMLAttributes<HTMLDivElement | HTMLSpanElement | HTMLHeadingElement> {
  textColor?: EColorMap;
  className?: string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'block' | 'inline';
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  lineHeight?: 'narrow' | 'wide';
  size?: TFontSize;
  align?: 'start' | 'center' | 'end';
}

const elementMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  block: 'div',
  inline: 'span',
};

const Text = ({
  className,
  children,
  variant = 'block',
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
