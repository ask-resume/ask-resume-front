import React from 'react';
import cn from 'classnames';
import './index.scss';
import { ButtonSize } from '../../config/size';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  variant?: 'ghost' | 'solid' | 'quiet' | 'minimal';
  buttonColor?: 'black' | 'gray' | 'blue' | 'red';
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  rounded?: boolean;
  label?: {
    labelLeadingIcon?: React.ReactElement;
    labelTailingIcon?: React.ReactElement;
    labelText?: string | number;
  };
}

// TODO: Make modifications to allow passing color options.
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      size = 'md',
      variant = 'solid',
      disabled,
      fullWidth,
      loading,
      rounded,
      buttonColor = 'black',
      label,
      ...restProps
    },
    ref,
  ) => {
    return (
      <button
        type="button"
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
      </button>
    );
  },
);

Button.displayName = 'Button';
export default React.memo(Button);
