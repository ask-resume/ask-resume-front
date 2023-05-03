import React from 'react';
import { useMediaSize } from './useMediaSize';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const { isMobile: isMobileMedia } = useMediaSize();

  React.useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);

  return isMobile;
};

export { useIsMobile };
