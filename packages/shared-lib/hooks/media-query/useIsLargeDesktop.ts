import React from 'react';
import { useMediaSize } from './useMediaSize';

const useIsLargeDesktop = () => {
  const [isLargeDesktop, setIsLargeDesktop] = React.useState(false);
  const { isLargeDesktop: isLargeDesktopMedia } = useMediaSize();

  React.useEffect(() => {
    setIsLargeDesktop(isLargeDesktopMedia);
  }, [isLargeDesktopMedia]);

  return isLargeDesktop;
};

export { useIsLargeDesktop };
