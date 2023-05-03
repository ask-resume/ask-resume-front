import React, { lazy, Suspense } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPropsContext } from 'next';

import styles from '../../page.module.scss';
import { useGenerateResume } from 'modules/result/api/result';
import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';
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

// FIX: To use i18n in CSR in next.js, you need to additionally use i18next-http-backend.
// However, when CSR is performed using the library, only the default language is received.
// If the issue is resolved, it will be changed to CSR
export async function getStaticProps(ctx: GetStaticPropsContext) {
  return {
    props: {
      ...(await getI18nProps(ctx, ResultTranslateNamespaces)),
    },
  };
}

export { getStaticPaths };
