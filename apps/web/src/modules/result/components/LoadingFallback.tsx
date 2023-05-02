import React, { lazy, Suspense } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import pageStyles from '../../../page.module.scss';
import Text from 'shared-ui/src/components/Text';
import { useIsMobile } from 'shared-lib/hooks/media-query';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import Spinner from 'shared-ui/src/components/Spinner';
import { FontSize } from 'shared-ui/src/config/size';
import { ResultTranslateNamespaces } from 'modules/form/constants';

const LoadingFallback = () => {
  const { t } = useTranslation(ResultTranslateNamespaces);
  const isMobile = useIsMobile();

  const size = {
    title: (isMobile ? 'large' : 'x_large') as FontSize,
    description: (isMobile ? 'small' : 'medium') as FontSize,
  };

  return (
    <div className={pageStyles._loading}>
      <Spinner size="xl" />

      <div className={pageStyles.content}>
        <Text size={size.title} weight="bold" textColor={ColorMap.gray_7}>
          {t('loading_fallback.title')}
        </Text>

        <Text
          size={size.description}
          variant="p"
          lineHeight="narrow"
          align="center"
          textColor={ColorMap.gray_6}
        >
          {t('loading_fallback.description')}
        </Text>
      </div>
    </div>
  );
};

export default LoadingFallback;
