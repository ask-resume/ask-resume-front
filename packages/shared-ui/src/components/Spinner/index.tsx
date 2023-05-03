import React from 'react';
import cn from 'classnames';
import './index.scss';
import { ButtonSize } from '../../config/size';

export interface SpinnerProps {
  className?: string;
  size?: ButtonSize;
}

const Spinner = ({ className, size = 'md', ...props }: SpinnerProps) => {
  return <div className={cn('_SPINNER_', className, size)} {...props} />;
};

export default Spinner;
