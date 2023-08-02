import { ReactNode } from 'react';

export interface TrProps extends React.HTMLProps<HTMLTableRowElement> {
  children?: ReactNode;
}

const Tr = ({ children, ...rest }: TrProps) => {
  return <tr {...rest}>{children}</tr>;
};

export default Tr;
