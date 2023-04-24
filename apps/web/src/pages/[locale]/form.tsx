import Head from 'next/head';
import React from 'react';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useIsMobile } from 'common/hooks/media-query';

import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';
import styles from './index.module.scss';
import Router from 'modules/form/components/Router';
import UserInfo from 'modules/form/components/UserInfo';
import { useUserInfoState } from 'modules/form/hooks/useUserInfoState';
import Confirmation from 'modules/form/components/Confirmation';

const TranslateNamespaces = ['form', 'common'];

export default function FormPage() {
  const { t } = useTranslation(TranslateNamespaces);
  const router = useRouter();
  const isMobile = useIsMobile();

  const { locale, type } = router.query as { locale: string; type: string };
  const { userInfoState, userInfoSetter } = useUserInfoState({ t, locale });

  return (
    <>
      <Head>
        <title>{t('common:form_user_info_title')}</title>
        <meta name="description" content={t('common:description') ?? ''} />
        <meta name="keyword" content={t('common:keywords') ?? ''} />
      </Head>

      <div className={styles._FORM_}>
        <Router t={t} isMobile={isMobile} />

        {/* TODO: dynamic importing form components */}
        {type === 'user-info' && (
          <main className={styles.user_info_content}>
            <UserInfo
              t={t}
              isMobile={isMobile}
              locale={locale}
              userInfo={userInfoState}
              onChangeUserInfo={userInfoSetter}
            />
          </main>
        )}

        {type === 'confirmation' && (
          <main className={styles.confirm_content}>
            <Confirmation t={t} isMobile={isMobile} locale={locale} userInfo={userInfoState} />
          </main>
        )}
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

// Dynamic importing Example
// const FormTypeA = dynamic(() => import('./FormTypeA'), { ssr: false });
// const FormTypeB = dynamic(() => import('./FormTypeB'), { ssr: false });

// export default function FormComponent() {
//   const router = useRouter();
//   const { type } = router.query;

//   if (type === 'a') {
//     return <FormTypeA />;
//   } else if (type === 'b') {
//     return <FormTypeB />;
//   } else {
//     return <div>Invalid Form Type</div>;
//   }
// }

export { getStaticProps, getStaticPaths };
