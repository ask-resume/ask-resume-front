import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import './index.scss';

import { ButtonSize } from '../../config/size';
import { ColorMap } from '../../config/colorMap';

export interface ColorOption {
  font?: ColorMap;
  default?: ColorMap;
  hover?: ColorMap;
  active?: ColorMap;
  icon?: {
    default?: ColorMap;
    hover?: ColorMap;
    active?: ColorMap;
  };
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: 'ghost' | 'solid' | 'quiet' | 'minimal' | 'minimal2';
  buttonColor?: 'black' | 'gray' | 'blue' | 'red';
  colorOption?: ColorOption;
  spacer?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  rounded?: boolean;
  label?: {
    labelLeadingIcon?: React.ReactElement;
    labelTailingIcon?: React.ReactElement;
    labelText?: string;
  };
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      size = 'md',
      variant = 'solid',
      disabled,
      spacer = true,
      fullWidth,
      loading,
      rounded,
      buttonColor = 'black',
      colorOption,
      label,
      ...restProps
    },
    ref,
  ) => {
    // Optional Styling
    //    - Basic styling is basically applied according to the "variant and buttonColor" option.
    //    - Define additional styling according to colorOptions and spacer props.
    const Btn = styled.button`
      &._BUTTON_.${variant} {
        ${!spacer && 'margin-left: 0px;'}
        ${colorOption?.default && `background-color: ${colorOption?.default}; `}
        ${colorOption?.font && `color: ${colorOption?.font};`}
    
        ${colorOption?.icon?.default &&
        `
          i > svg #icon__fill {
            fill: ${colorOption?.icon?.default};
          }`}
    
        &:hover {
          ${colorOption?.hover && `background-color: ${colorOption?.hover};`}
          ${colorOption?.icon?.hover &&
          `
          i > svg #icon__fill {
            fill: ${colorOption?.icon?.hover};
          }`}
        }

        &:active {
          ${colorOption?.active && `background-color: ${colorOption?.active};`}
          ${colorOption?.icon?.active &&
          `
          i > svg #icon__fill {
            fill: ${colorOption?.icon?.active};
          }`}
        }
      }
    `;

    return (
      <Btn
        className={cn('_BUTTON_', className, size, variant, buttonColor, {
          loading,
          rounded,
          disabled,
          fullWidth,
          iconOnly: label && !label.labelText,
        })}
        ref={ref}
        disabled={disabled}
        {...restProps}
      >
        <span
          className={cn({
            none: loading,
          })}
        >
          {label ? (
            <>
              {label.labelLeadingIcon && (
                <div className="_BUTTON_leading-icon">{label.labelLeadingIcon}</div>
              )}
              {label.labelText}
              {label.labelTailingIcon && (
                <div className="_BUTTON_tailing-icon">{label.labelTailingIcon}</div>
              )}
            </>
          ) : (
            children
          )}
        </span>
        {loading && <div className="_BUTTON_spinner" />}
      </Btn>
    );
  },
);

Button.displayName = 'Button';
export default React.memo(Button);
