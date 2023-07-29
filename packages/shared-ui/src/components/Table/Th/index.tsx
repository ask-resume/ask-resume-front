import { ReactNode } from 'react';
import cn from 'classnames';
import './index.scss';

export interface ThProps {
  children?: ReactNode;
  align?: React.TdHTMLAttributes<HTMLTableCellElement>['align'];
  className?: string;
}

const Th = ({ children, align = 'left', className }: ThProps) => {
  return (
    <th className={cn('_Th_', className)} align={align}>
      {children}
    </th>
  );
};

export default Th;
