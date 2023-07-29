import { ReactNode } from 'react';

export interface TrProps {
  children?: ReactNode;
}

const Tr = ({ children }: TrProps) => {
  return <tr>{children}</tr>;
};

export default Tr;
