import { ReactNode } from 'react';
import cn from 'classnames';
import './index.scss';

export interface TdProps {
  children?: ReactNode;
  align?: React.TdHTMLAttributes<HTMLTableCellElement>['align'];
  className?: string;
}

const Td = ({ children, align = 'left', className }: TdProps) => {
  return (
    <td className={cn('_Td_', className)} align={align}>
      {children}
    </td>
  );
};

export default Td;
