import { ReactNode } from 'react';

export interface TbodyProps {
  children?: ReactNode;
}

const Tbody = ({ children }: TbodyProps) => {
  return <tbody>{children}</tbody>;
};

export default Tbody;
