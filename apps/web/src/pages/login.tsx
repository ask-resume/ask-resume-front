import React from 'react';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';

import { getI18nProps } from 'modules/i18n/lib/getStatic';
import styles from '../page.module.scss';
import { SocialLoginButton } from 'modules/login/components/SocialLoginButton';
import { LoginPageTranslateNamespaces } from 'modules/login/constants';
import Title from 'modules/home/components/Title';

export default function Home() {
  const { t } = useTranslation(LoginPageTranslateNamespaces);

  return (
    <>
      <Head>
        <title>{t('common:login_title')}</title>
        <meta name="description" content={t('common:description') ?? ''} />
        <meta name="keyword" content={t('common:keywords') ?? ''} />
      </Head>

      <main className={styles._LOGIN_}>
        <div className={styles.title}>
          <Title isMobile={true} />
        </div>

        <div className={styles.social_login_button}>
          <SocialLoginButton provider="google" />
          <SocialLoginButton provider="linked-in" />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return {
    props: {
      ...(await getI18nProps(ctx, ['landing', ...LoginPageTranslateNamespaces])),
    },
  };
}
