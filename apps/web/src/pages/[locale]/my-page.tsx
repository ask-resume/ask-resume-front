import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useIsMobile } from 'shared-lib/hooks/media-query';

import { getI18nProps } from 'modules/i18n/lib/getStatic';
import styles from '../../page.module.scss';
import MySubmitTable from 'modules/myPage/components/MySubmitTable';
import { withGetServerSideProps } from 'modules/auth/withGetServerSideProps';
import { Page, SubmitListItemResponse, getMySubmits } from 'modules/myPage/api/my-submit';
import { MyPageTranslateNamespaces } from 'modules/myPage/constants';
import MySubmitPagination from 'modules/myPage/components/MySubmitPagination';
import MySubmitTableFooter from 'modules/myPage/components/MySubmitTableFooter';
import MySubmitTableHeader from 'modules/myPage/components/MySubmitTableHeader';
import MyPageTitle from 'modules/myPage/components/MyPageTitle';

const mySubmits = [
  {
    id: 1,
    title: '프론트엔드 이력서',
    service: 'INTERVIEW_MAKER',
    status: 'WAITING',
    createdAt: '2023-06-01T21:43:27+09:00',
    updatedAt: '2023-06-06T21:43:27+09:00',
  },
  {
    id: 2,
    title: '프론트엔드 이력서',
    service: 'INTERVIEW_MAKER',
    status: 'WAITING',
    createdAt: '2023-06-02T21:43:27+09:00',
    updatedAt: '2023-06-06T21:43:27+09:00',
  },
];

interface MyPage {
  mySubmitsPage?: Page<SubmitListItemResponse>;
}

export default function MyPage({ mySubmitsPage }) {
  const { t } = useTranslation(MyPageTranslateNamespaces);
  const isMobile = useIsMobile();

  return (
    <>
      <Head>
        <title>{t('common:my_page_title')}</title>
        <meta name="description" content={t('common:description') ?? ''} />
        <meta name="keyword" content={t('common:keywords') ?? ''} />
      </Head>

      <main className={styles._MY_PAGE_}>
        <MyPageTitle />

        <div className={styles.table_wrapper}>
          <MySubmitTableHeader />
          <MySubmitTable
            mySubmits={mySubmitsPage?.content}
            totalElements={mySubmitsPage?.totalElements}
            currentPage={mySubmitsPage?.page}
            pageSize={mySubmitsPage?.pageSize}
          />
          <MySubmitPagination pageData={mySubmitsPage} />
          <MySubmitTableFooter />
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
