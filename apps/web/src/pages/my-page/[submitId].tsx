import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

import { getI18nProps } from 'modules/i18n/lib/getStatic';
import styles from '../../page.module.scss';
import { withGetServerSideProps } from 'modules/auth/withGetServerSideProps';
import { useRouter } from 'next/router';
import Result from 'modules/result/components/Result';
import {
  MySubmitResponse,
  Page,
  SubmitListItemResponse,
  getMySubmits,
  useMySubmit,
} from 'modules/myPage/api/mySubmit';
import { ResultTranslateNamespaces } from 'modules/form/constants';
import MySubmitTableHeader from 'modules/myPage/components/MySubmitTableHeader';
import MySubmitTable from 'modules/myPage/components/MySubmitTable';
import MySubmitPagination from 'modules/myPage/components/MySubmitPagination';
import LoadingFallback from 'modules/result/components/LoadingFallback';
import DefaultErrorFallback from 'common/components/Error/DefaultErrorFallback';
import Text from 'shared-ui/src/components/Text';
import { MyPageTranslateNamespaces } from 'modules/myPage/constants';
import { ColorMap } from 'shared-ui/src/config/colorMap';

interface MySubmitPage {
  mySubmitData: any;
  mySubmitsPage?: Page<SubmitListItemResponse>;
}

export default function MySubmitDetailPage({ mySubmitsPage }: MySubmitPage) {
  const { t } = useTranslation(['result', ...MyPageTranslateNamespaces]);

  const router = useRouter();
  const { locale, submitId: submitIdStr } = router.query as { locale: string; submitId: string };
  const submitId = Number(submitIdStr);

  const {
    data: submitData,
    isLoading,
    isError,
    error,
    refetch,
  } = useMySubmit({ locale, submitId });
  const isDataLoaded = !isLoading && !isError;

  return (
    <>
      <Head>
        <title>{t('common:my_page_title')}</title>
        <meta name="keyword" content={t('common:keywords') ?? ''} />
      </Head>

      <main className={styles._MY_PAGE_}>
        <div className={styles.title_wrapper}>
          <Text weight="bold" variant="h1" size="xx_large">
            {t('my-submit:service_type.interview_maker.title')}
          </Text>
          <Text color={ColorMap.gray_5} variant="h2" size="xx_small">
            {t('my-submit:service_type.interview_maker.sub_title')}
          </Text>
        </div>

        <div className={styles.table_wrapper}>
          {isLoading && <LoadingFallback />}
          {isError && <DefaultErrorFallback error={error} refetch={refetch} />}
          {isDataLoaded && <SubmitDetail submitData={submitData} />}
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

const SubmitDetail = ({ submitData }: { submitData: MySubmitResponse<any> }) => {
  switch (submitData?.serviceType) {
    case 'INTERVIEW_MAKER':
    case 'INTERVIEW_MAKER_PDF': {
      const interviewMakerList = submitData.interviewMakerList;
      return <Result resumeData={interviewMakerList} />;
    }
    default:
      return null;
  }
};

export const getServerSideProps = withGetServerSideProps(async ctx => {
  const {
    locale,
    page = '1',
    pageSize = '10',
  } = ctx.query as { locale: string; page: string; pageSize: string };

  const mySubmitsPage = await getMySubmits(locale, parseInt(page), parseInt(pageSize));

  return {
    props: {
      ...(await getI18nProps(ctx, ['my-submit', ...ResultTranslateNamespaces])),
      mySubmitsPage,
    },
  };
});
