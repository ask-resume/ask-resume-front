import React from 'react';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import { useIsMobile } from 'shared-lib/hooks/media-query';

import { getI18nProps } from 'modules/i18n/lib/getStatic';
import styles from '../page.module.scss';
import Title from 'modules/home/components/Title';
import GoToFormButton from 'modules/home/components/GoToFormButton';

const TranslateNamespaces = ['landing', 'common'];

// TODO: implement Dark mode switcher

// TODO: Add content explaining the expected effect of Ask resume.
// Ex. AskResume gives you answers to questions you might ask on your resume in a job interview.
export default function Home() {
  const { t } = useTranslation(TranslateNamespaces);
  const isMobile = useIsMobile();

  return (
    <>
      <Head>
        <title>{t('common:page_title')}</title>
        <meta name="description" content={t('common:description') ?? ''} />
        <meta name="keyword" content={t('common:keywords') ?? ''} />
      </Head>

      <main className={styles._LANDING_}>
        <Title isMobile={isMobile} />
        <GoToFormButton t={t} isMobile={isMobile} />
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
