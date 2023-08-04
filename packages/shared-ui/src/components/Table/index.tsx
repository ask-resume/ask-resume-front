import { ReactNode } from 'react';
import cn from 'classnames';

import './index.scss';

interface TableProps {
  className?: string;
  children?: ReactNode;
}

const Table = ({ className, children }: TableProps) => {
  return <table className={cn('_TABLE_', className)}>{children}</table>;
};

export default Table;

export { default as Thead } from './Thead';
export { default as Tbody } from './Tbody';
export { default as Tr } from './Tr';
export { default as Th } from './Th';
export { default as Td } from './Td';
