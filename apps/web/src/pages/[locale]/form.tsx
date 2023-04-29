import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useIsMobile } from 'shared-lib/hooks/media-query';

import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';
import { useUserInfoState } from 'modules/form/hooks/useUserInfoState';
import { TranslateNamespaces } from 'modules/form/constants';
import {
  useResumeTextAreaState,
  useResumeSelectState,
} from 'modules/form/hooks/useResumeInfoState';
import { TAB_CNT } from 'modules/form/constants';
import { useFormRouter } from 'modules/form/hooks/useFormRouter';
import { getJobs } from 'modules/form/api/job';
import styles from './index.module.scss';

const Router = dynamic(() => import('modules/form/components/Router'), { ssr: false });
const UserInfo = dynamic(() => import('modules/form/components/UserInfo'), { ssr: false });
const ResumeInfo = dynamic(() => import('modules/form/components/ResumeInfo'), { ssr: false });
const Confirmation = dynamic(() => import('modules/form/components/Confirmation'), { ssr: false });

export default function FormPage() {
  const { t } = useTranslation(TranslateNamespaces);
  const router = useRouter();
  const isMobile = useIsMobile();

  const { locale, type } = router.query as { locale: string; type: string };
  // Initialize the query string with user-info when the language is refreshed
  const { changeFormRouter } = useFormRouter();
  React.useEffect(() => {
    changeFormRouter('user-info');
  }, []);

  // userInfo: user information entered by the user
  const { userInfo, userInfoSetter } = useUserInfoState(t);

  // resumeTextArea = value entered by the user in the resume textarea
  // resumeSelect = type of option selected by the user in the resume
  const { resumeTextArea, resumeTextAreaSetter } = useResumeTextAreaState(TAB_CNT);
  const { resumeSelect, resumeSelectSetter } = useResumeSelectState(TAB_CNT);

  return (
    <>
      <Head>
        <title>{t('common:form_user_info_title')}</title>
        <meta name="description" content={t('common:description') ?? ''} />
        <meta name="keyword" content={t('common:keywords') ?? ''} />
      </Head>

      <div className={styles._FORM_}>
        <Router isMobile={isMobile} />

        {type === 'user-info' && (
          <main className={styles.user_info_content}>
            <UserInfo
              isMobile={isMobile}
              locale={locale}
              userInfo={userInfo}
              onChangeUserInfo={userInfoSetter}
            />
          </main>
        )}

        {type === 'resume' && (
          <main className={styles.confirm_content}>
            <ResumeInfo
              isMobile={isMobile}
              resumeTextArea={resumeTextArea}
              resumeSelect={resumeSelect}
              onChangeResumeTextArea={resumeTextAreaSetter}
              onChangeResumeSelect={resumeSelectSetter}
            />
          </main>
        )}

        {type === 'confirmation' && (
          <main className={styles.confirm_content}>
            <Confirmation isMobile={isMobile} userInfo={userInfo} />
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

export { getStaticProps, getStaticPaths };
