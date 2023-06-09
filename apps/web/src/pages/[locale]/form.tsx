import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useIsMobile } from 'shared-lib/hooks/media-query';
import { GetStaticPropsContext } from 'next';
import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';

import { useUserInfoState } from 'modules/form/hooks/useUserInfoState';
import { FormTranslateNamespaces } from 'modules/form/constants';
import {
  useResumeTextAreaState,
  useResumeSelectState,
} from 'modules/form/hooks/useResumeInfoState';
import { TAB_CNT } from 'modules/form/constants';
import { useFormRouter } from 'modules/form/hooks/useFormRouter';
import { validateUserInfoForm, validateResumeInfoForm } from 'modules/form/lib';
import { FormRouterType } from 'modules/form/types';
import { getJobs } from 'modules/form/api/job';

import styles from '../../page.module.scss';
import Router from 'modules/form/components/Router';
import { UserInfo, ResumeInfo, Confirmation } from 'modules/form/components';

// After receiving jobs data for all languages, modify it so that you can select related option values
// (ex. Enter web development after selecting English language -> web develop is displayed)
export default function FormPage({ jobs }) {
  const { t } = useTranslation(FormTranslateNamespaces);
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
        <title>{t('common:form_user_info_title')}</title>
        <meta name="description" content={t('common:description') ?? ''} />
        <meta name="keyword" content={t('common:keywords') ?? ''} />
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
