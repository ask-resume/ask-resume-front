import React from 'react';
import { useMedia } from './useMedia';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const { isMobile: isMobileMedia } = useMedia();

  React.useEffect(() => {
    setIsMobile(isMobileMedia);
  }, [isMobileMedia]);

  return isMobile;
};

export { useIsMobile };
