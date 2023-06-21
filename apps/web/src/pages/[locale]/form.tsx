import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useIsMobile } from 'shared-lib/hooks/media-query';

import { getJobs } from 'modules/form/api/job';
import { FormTranslateNamespaces, TAB_CNT } from 'modules/form/constants';
import { useFormRouter } from 'modules/form/hooks/useFormRouter';
import {
  useResumeSelectState,
  useResumeTextAreaState,
} from 'modules/form/hooks/useResumeInfoState';
import { useUserInfoState } from 'modules/form/hooks/useUserInfoState';
import { validateResumeInfoForm, validateUserInfoForm } from 'modules/form/lib';
import { FormRouterType } from 'modules/form/types';

import { Confirmation, ResumeInfo, UserInfo } from 'modules/form/components';
import Router from 'modules/form/components/Router';
import styles from '../../page.module.scss';

// After receiving jobs data for all languages, modify it so that you can select related option values
// (ex. Enter web development after selecting English language -> web develop is displayed)
export default function FormPage({ jobs }) {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isMobile = useIsMobile();
  const { locale, type } = React.useMemo(
    () => router.query as { locale: string; type: FormRouterType },
    [router.query],
  );

  // Initialize the query string with user-info when page refresh.
  const { changeFormRouter } = useFormRouter();
  React.useEffect(() => {
    changeFormRouter('user-info');
  }, []);

  // userInfo: user information entered by the user
  const { userInfo, userInfoSetter } = useUserInfoState(t);
  const { resumeTextArea, resumeTextAreaSetter } = useResumeTextAreaState(TAB_CNT);
  const { resumeSelect, resumeSelectSetter } = useResumeSelectState(TAB_CNT);

  // resumeInfo = resume information entered by the user
  const resumeInfo = React.useMemo(
    () =>
      resumeTextArea
        .filter(textArea => textArea.trim())
        .map((textArea, index) => {
          const curr = resumeSelect[index];
          return { select: curr, textarea: textArea };
        }),
    [resumeSelect, resumeTextArea],
  );

  return (
    <>
      <Head>
        <title>{t('form_user_info_title')}</title>
        <meta name="description" content={t('description') ?? ''} />
        <meta name="keyword" content={t('keywords') ?? ''} />
      </Head>

      <div className={styles._FORM_}>
        <Router
          type={type}
          userInfoChecked={validateUserInfoForm(userInfo)}
          resumeInfoChecked={validateResumeInfoForm(resumeTextArea)}
        />

        {type === 'user-info' && (
          <main className={styles.user_info_content}>
            <UserInfo
              isMobile={isMobile}
              jobs={jobs[locale]}
              userInfo={userInfo}
              onChangeUserInfo={userInfoSetter}
            />
          </main>
        )}

        {type === 'resume' && (
          <main className={styles._CONFIRM_CONTENT_}>
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
          <main className={styles._CONFIRM_CONTENT_}>
            <Confirmation isMobile={isMobile} userInfo={userInfo} resumeInfo={resumeInfo} />
          </main>
        )}
      </div>
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const jobs = await getJobs();
  return {
    props: {
      jobs,
      ...(await getI18nProps(ctx, FormTranslateNamespaces)),
    },
    revalidate: 86400, // 1 day
  };
}

export { getStaticPaths };
