import { ReactNode } from 'react';
import cn from 'classnames';
import './index.scss';

export interface TbodyProps {
  children?: ReactNode;
  className?: string;
}

const Tbody = ({ children, className }: TbodyProps) => {
  return (
    <tbody className={cn('_TBODY_', className)}>
      {children ? (
        children
      ) : (
        <tr>
          <td className="empty" colSpan={'100%' as any}>
            No Data
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default Tbody;
