import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import { getI18nProps } from 'modules/i18n/lib/getStatic';
import styles from '../../page.module.scss';
import MySubmitTable from 'modules/myPage/components/MySubmitTable';
import { withGetServerSideProps } from 'modules/auth/withGetServerSideProps';
import { Page, SubmitListItemResponse, getMySubmits } from 'modules/myPage/api/mySubmit';
import { MyPageTranslateNamespaces } from 'modules/myPage/constants';
import MySubmitPagination from 'modules/myPage/components/MySubmitPagination';
import MySubmitTableHeader from 'modules/myPage/components/MySubmitTableHeader';
import Text from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';

interface MySubmitPageProps {
  mySubmitsPage?: Page<SubmitListItemResponse>;
}

export default function MySubmitPage({ mySubmitsPage }: MySubmitPageProps) {
  const { t } = useTranslation(MyPageTranslateNamespaces);

  return (
    <>
      <Head>
        <title>{t('common:my_page_title')}</title>
        <meta name="description" content={t('common:description') ?? ''} />
        <meta name="keyword" content={t('common:keywords') ?? ''} />
      </Head>

      <main className={styles._MY_PAGE_}>
        <div className={styles.title_wrapper}>
          <Text weight="bold" variant="h1" size="xx_large">
            {t('title')}
          </Text>
          <Text color={ColorMap.gray_5} variant="h2" size="xx_small">
            {t('sub_title')}
          </Text>
        </div>

        <div className={styles.table_wrapper}>
          <MySubmitTableHeader />
          <MySubmitTable
            mySubmits={mySubmitsPage?.list}
            totalElements={mySubmitsPage?.totalElements}
            currentPage={mySubmitsPage?.page}
            pageSize={mySubmitsPage?.pageSize}
          />
          <MySubmitPagination pageData={mySubmitsPage} />
        </div>
      </main>
    </>
  );
}

export const getServerSideProps = withGetServerSideProps(async ctx => {
  const {
    locale,
    page = '1',
    pageSize = '10',
  } = ctx.query as { locale: string; page: string; pageSize: string };
  const mySubmitsPage = await getMySubmits(locale, parseInt(page), parseInt(pageSize));

  return {
    props: {
      ...(await getI18nProps(ctx, MyPageTranslateNamespaces)),
      mySubmitsPage,
    },
  };
});
