import { useMediaQuery } from 'react-responsive';

const useMedia = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 375px)',
  });
  const isTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

export { useMedia };
