import Link from 'next/link';
import { GetStaticPropsContext } from 'next';
import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';
import { useTranslation } from 'next-i18next';

import styles from './index.module.scss';
import Text from 'shared-ui/src/components/Text';
import Divider from 'shared-ui/src/components/Divider';
import Button from 'shared-ui/src/components/Button';
import { ColorMap } from 'shared-ui/src/config/colorMap';

const Custom500 = () => {
  const { t } = useTranslation('error-page');

  return (
    <div className={styles._ERROR_PAGE_}>
      <div className={styles._wrapper}>
        <div className={styles.title}>
          <Text variant="h1" size="xxxx_large" weight="bold">
            500
          </Text>
          <Text variant="h1" size="x_large" weight="bold">
            {t('500.description')}
          </Text>
        </div>

        <Divider />

        <div className={styles.explain}>
          <Text align="center" textColor={ColorMap.gray_6} size="small" lineHeight="wide">
            {t('500.content')}
          </Text>
        </div>
      </div>

      <div>
        <Link href="/">
          <Button
            label={{
              labelText: t('500.home-router') ?? '',
            }}
            rounded
            variant="ghost"
            buttonColor="blue"
          />
        </Link>
      </div>
    </div>
  );
};

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {
      ...(await getI18nProps(ctx, ['error-page'])),
    },
  };
};

export { getStaticProps, getStaticPaths };

export default Custom500;
