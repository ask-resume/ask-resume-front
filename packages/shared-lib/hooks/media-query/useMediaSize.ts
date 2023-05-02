import { useMediaQuery } from 'react-responsive';

const useMediaSize = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 375px)',
  });
  const isTablet = useMediaQuery({ query: '(max-width: 960px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const isLargeDesktop = useMediaQuery({ query: '(min-width: 1920px)' });

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  };
};

export { useMediaSize };
