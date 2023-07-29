import { ReactNode } from 'react';

export interface TheadProps {
  children?: ReactNode;
}

const Thead = ({ children }: TheadProps) => {
  return <thead>{children}</thead>;
};

export default Thead;
