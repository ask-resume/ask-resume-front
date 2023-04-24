import React from 'react';
import { useMediaSize } from './useMediaSize';

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = React.useState(false);
  const { isDesktop: isDesktopMedia } = useMediaSize();

  React.useEffect(() => {
    setIsDesktop(isDesktopMedia);
  }, [isDesktopMedia]);

  return isDesktop;
};

export { useIsDesktop };
