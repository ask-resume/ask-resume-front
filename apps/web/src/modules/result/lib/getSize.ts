import { FontSize } from 'shared-ui/src/config/size';

export const getSize = (isMobile: boolean) => ({
  title: (isMobile ? 'large' : 'x_large') as FontSize,
  description: (isMobile ? 'small' : 'medium') as FontSize,
});
