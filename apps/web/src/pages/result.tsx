import React from 'react';
import { withGetServerSideProps } from 'modules/auth/withGetServerSideProps';

import styles from '../page.module.scss';
import { getI18nProps } from 'modules/i18n/lib/getStatic';
import { ResultTranslateNamespaces } from 'modules/form/constants';
import { useTranslation } from 'next-i18next';
import Text from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';

export default function ResultPage() {
  const { t } = useTranslation(ResultTranslateNamespaces);

  return (
    <div className={styles._RESULT_}>
      <div className={styles.title}>
        <Text weight="bold" variant="h1" size="xx_large">
          {t('result.title')}
        </Text>
        <Text color={ColorMap.gray_5} variant="h2" size="xx_small">
          {t('result.subtitle')}
        </Text>
      </div>
    </div>
  );
}

export const getServerSideProps = withGetServerSideProps(async ctx => {
  return {
    props: {
      ...(await getI18nProps(ctx, ResultTranslateNamespaces)),
    },
  };
});
