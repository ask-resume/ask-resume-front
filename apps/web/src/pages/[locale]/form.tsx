import Head from 'next/head';
import React from 'react';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';
import styles from './index.module.scss';
import { UserInfo, Router } from 'modules/form/components';

const TranslateNamespaces = ['form', 'common'];

export default function FormPage() {
  const { t } = useTranslation(TranslateNamespaces);
  const router = useRouter();
  const { locale, type } = router.query as { locale: string; type: string };

  return (
    <>
      <Head>
        <title>{t('common:form_user_info_title')}</title>
        <meta name="description" content={t('common:description') ?? ''} />
        <meta name="keyword" content={t('common:keywords') ?? ''} />
      </Head>

      <div className={styles._FORM_}>
        <Router t={t} />

        <main className={styles._content}>
          <UserInfo t={t} locale={locale} />
        </main>
      </div>
    </>
  );
}

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {
      ...(await getI18nProps(ctx, TranslateNamespaces)),
    },
  };
};

export { getStaticProps, getStaticPaths };
