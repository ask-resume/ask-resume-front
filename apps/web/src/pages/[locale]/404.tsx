import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Button from 'shared-ui/src/components/Button';
import Divider from 'shared-ui/src/components/Divider';
import Text from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import styles from '../../page.module.scss';

const Custom404 = () => {
  const { t } = useTranslation('error-page');

  return (
    <div className={styles._ERROR_PAGE_}>
      <div className={styles._wrapper}>
        <div className={styles.title}>
          <Text variant="h1" size="xxxx_large" weight="bold">
            404
          </Text>
          <Text variant="h1" size="x_large" weight="bold">
            {t('404.description')}
          </Text>
        </div>

        <Divider />

        <div className={styles.explain}>
          <Text align="center" textColor={ColorMap.gray_6} size="small" lineHeight="wide">
            {t('404.content')}
          </Text>
        </div>
      </div>

      <div>
        <Link href="/">
          <Button
            label={{
              labelText: t('404.home-router') ?? '',
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

export { getStaticPaths, getStaticProps };

export default Custom404;
