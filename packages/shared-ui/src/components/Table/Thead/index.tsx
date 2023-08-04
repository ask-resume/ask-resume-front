import { ReactNode } from 'react';
import cn from 'classnames';
import './index.scss';

export interface TheadProps {
  children?: ReactNode;
  align?: 'left' | 'center' | 'right';
}

const Thead = ({ children, align }: TheadProps) => {
  return <thead className={cn('_Thead_', align)}>{children}</thead>;
};

export default Thead;
