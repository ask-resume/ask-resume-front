import React from 'react';
import { useRouter } from 'next/router';
import { withGetServerSideProps } from 'modules/auth/withGetServerSideProps';

import styles from '../../page.module.scss';
import { useGenerateResume } from 'modules/result/api/result';
import { getI18nProps } from 'modules/i18n/lib/getStatic';
import LoadingFallback from 'modules/result/components/LoadingFallback';
import { ResultTranslateNamespaces } from 'modules/form/constants';
import Result from 'modules/result/components/Result';
import DefaultErrorFallback from 'common/components/Error/DefaultErrorFallback';

export default function ResultPage() {
  const router = useRouter();
  const { locale, formInfo } = router.query as { locale: string; formInfo: string };
  const {
    data: resumeData,
    isLoading,
    isError,
    error,
    refetch,
  } = useGenerateResume({ formInfo, locale });
  const isDataLoaded = !isLoading && !isError;

  return (
    <div className={styles._RESULT_}>
      {isLoading && <LoadingFallback />}
      {isError && <DefaultErrorFallback error={error} refetch={refetch} />}
      {isDataLoaded && <Result resumeData={resumeData} />}
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
