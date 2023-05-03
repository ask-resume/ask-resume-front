import React from 'react';
import { useMediaSize } from './useMediaSize';

const useIsTablet = () => {
  const [isTablet, setIsTablet] = React.useState(false);
  const { isTablet: isTabletMedia } = useMediaSize();

  React.useEffect(() => {
    setIsTablet(isTabletMedia);
  }, [isTabletMedia]);

  return isTablet;
};

export { useIsTablet };
