import React, { lazy, Suspense } from 'react';
import { useRouter } from 'next/router';
import { useGenerateResume } from 'modules/result/api/result';
import styles from '../../page.module.scss';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';

import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';
import LoadingFallback from 'modules/result/components/LoadingFallback';
import DefaultErrorFallback from 'common/components/Error/DefaultErrorFallback';
import { ResultTranslateNamespaces } from 'modules/form/constants';

const resumeData = {
  predictionResponse: [
    {
      type: 'open-ended',
      question:
        'React 프레임워크를 사용하면서 컴포넌트를 재사용하고 모듈화할 때 실수했던 경험이 있으신가요? 있다면, 어떤 것이었나요?',
      bestAnswer:
        '제가 작성한 코드에서, 컴포넌트 이름만 다르고 내용물이 동일한 컴포넌트들이 존재하는 것을 발견하였습니다. 이 때문에 나중에 컴포넌트를 추가하거나 수정할 때 일관성 있게 처리하기가 어려웠습니다.',
    },
    {
      type: 'multiple-choice',
      question:
        "Next.js에서 말하는 CSR, SSR, SSG에 대해 설명해주세요. 다음 중 올바른 설명은 무엇인가요? 'CSR은 서버에서 초기 HTML 및 리액트 코드를 전송하고, 클라이언트에서 이를 받아 렌더링합니다. SSR은 서버에서 요청된 URL에 해당하는 페이지의 HTML을 렌더링하여 클라이언트에 보내줍니다. SSG은 개발자가 미리 정해둔 URL의 HTML 파일을 렌더링하여 서버에 저장하고, 요청 시점에 이를 클라이언트에 보내줍니다.'",
      bestAnswer:
        'SSR은 서버에서 요청된 URL에 해당하는 페이지의 HTML을 렌더링하여 클라이언트에 보낸다는 것이 맞습니다.',
    },
    {
      type: 'open-ended',
      question:
        'Webpack과 Babel을 사용한 경험이 있으신가요? 웹팩이나 바벨 설정에서 처음 접하면서 어려웠던 부분은 무엇이었나요?',
      bestAnswer:
        '저는 처음에 웹팩 설정에서 entry, output, module, plugins 등의 개념을 이해하는 데 어려움을 겪었습니다. 예제 코드를 많이 참조하며, 점차 이해하는 데 성공했습니다.',
    },
  ],
};

export default function ResultPage() {
  const { t } = useTranslation(['common', 'result']);

  const router = useRouter();
  const { locale, formInfo } = router.query as { locale: string; formInfo: string };
  const { data: resumeData, isLoading, isError, error } = useGenerateResume({ formInfo, locale });

  return (
    <div className={styles._RESULT_}>
      {isLoading && <LoadingFallback />}
      {isError && <DefaultErrorFallback error={error} />}
      {/* <div>{JSON.stringify(resumeData)}</div> */}
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
