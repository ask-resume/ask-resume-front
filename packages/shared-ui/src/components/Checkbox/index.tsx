import React from 'react';
import cn from 'classnames';
import './index.scss';
import { FontSize } from '../../config/size';

import { CheckIcon } from '../Icon/CheckIcon';
import Text from '../Text';

export interface CheckboxProps extends React.HTMLAttributes<HTMLButtonElement> {
  selected: boolean;
  disabled?: boolean;
  label?: string;
  labelSize?: FontSize;
  labelWeight?: 'light' | 'regular' | 'medium' | 'bold';
  size?: number;
  variant?: 'square' | 'circle';
}

const Checkbox = ({
  className,
  selected,
  disabled,
  label,
  labelSize,
  labelWeight,
  size = 16,
  variant,
  ...props
}: CheckboxProps) => {
  return (
    <button
      tabIndex={!label ? -1 : disabled === true ? -1 : 0}
      className={cn('_CHECKBOX_', className, { onlyBtn: !label })}
      {...props}
    >
      <div
        tabIndex={!label && !disabled ? 0 : -1}
        className={cn('btn', variant, {
          selected,
          disabled,
          sm: size === 16,
          md: size === 20,
          lg: size === 24,
        })}
        style={{ width: size, minWidth: size, height: size }}
      >
        <CheckIcon size={size} color={selected ? 'white' : 'transparent'} />
      </div>
      {label && (
        <Text
          className={cn('label', { disabled })}
          variant="inline"
          size={labelSize}
          weight={labelWeight}
        >
          {label}
        </Text>
      )}
    </button>
  );
};
export default Checkbox;
