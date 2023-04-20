import Link from 'next/link';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';

import Text from 'shared-ui/src/components/Text';
import Button from 'shared-ui/src/components/Button';
import Icon from 'shared-ui/src/components/Icon';
import { ColorMap } from 'shared-ui/src/config/colorMap';

import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';
import styles from './index.module.scss';

const TranslateNamespaces = ['landing', 'common'];

// TODO: Add content explaining the expected effect of Ask resume.
// Ex. AskResume gives you answers to questions you might ask on your resume in a job interview.
export default function Home() {
  const { t } = useTranslation(TranslateNamespaces);

  return (
    <>
      <Head>
        <title>{t('common:page_title')}</title>
        <meta name="description" content={t('common:description') ?? ''} />
        <meta name="keyword" content={t('common:keywords') ?? ''} />
      </Head>

      <main className={styles._LANDING_}>
        <div className={styles._wrapper}>
          <div className={styles._title}>
            <Text variant="h1" size="xxxx_large">
              Ask
            </Text>
            <Text variant="h1" size="xxxx_large" textColor={ColorMap.blue_6}>
              Resume
            </Text>
          </div>
          <Text variant="h5" size="x_large">
            {t('sub_title')}
          </Text>
        </div>

        <Link href="/form/user-info" prefetch>
          <Button
            className={styles._button}
            size="lg"
            buttonColor="blue"
            variant="ghost"
            fullWidth
            label={{
              labelTailingIcon: <Icon.AirPlane color={ColorMap.blue_5} />,
              labelText: t('button_label') ?? '',
            }}
          />
        </Link>
      </main>
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return {
    props: {
      ...(await getI18nProps(ctx, TranslateNamespaces)),
    },
  };
}

export { getStaticPaths };
