import React from 'react';
import { useTranslation } from 'next-i18next';

import Text from 'shared-ui/src/components/Text';
import { useIsMobile } from 'shared-lib/hooks/media-query';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import Spinner from 'shared-ui/src/components/Spinner';
import { ResultTranslateNamespaces } from 'modules/form/constants';

import styles from './index.module.scss';
import { getSize } from '../lib';

const LoadingFallback = () => {
  const { t } = useTranslation(ResultTranslateNamespaces);
  const isMobile = useIsMobile();

  const size = getSize(isMobile);

  return (
    <div className={styles._loading}>
      <Spinner size="xl" />

      <div className={styles.content}>
        <Text size={size.title} weight="bold" textColor={ColorMap.gray_7}>
          {t('common:loading_fallback.title')}
        </Text>

        <Text
          size={size.description}
          variant="p"
          lineHeight="narrow"
          align="center"
          textColor={ColorMap.gray_6}
        >
          {t('common:loading_fallback.description')}
        </Text>
      </div>
    </div>
  );
};

export default LoadingFallback;
