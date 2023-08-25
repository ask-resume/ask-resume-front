import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { i18n, useTranslation } from 'next-i18next';
import { useIsMobile } from 'shared-lib/hooks/media-query';
import { getI18nProps } from 'modules/i18n/lib/getStatic';

import { useUserInfoState } from 'modules/form/hooks/useUserInfoState';
import { FormTranslateNamespaces } from 'modules/form/constants';
import {
  useResumeTextAreaState,
  useResumeSelectState,
} from 'modules/form/hooks/useResumeInfoState';
import { TAB_CNT } from 'modules/form/constants';
import { validateUserInfoForm, validateResumeInfoForm } from 'modules/form/lib';
import { FormRouterType } from 'modules/form/types';
import { getJobs } from 'modules/form/api/job';

import styles from '../page.module.scss';
import Router from 'modules/form/components/Router';
import { UserInfo, ResumeInfo, Confirmation } from 'modules/form/components';
import { withGetServerSideProps } from 'modules/auth/withGetServerSideProps';
import { PDFForm } from 'modules/pdf/components/PdfForm';
import { useCheckLogin } from 'modules/myPage/hooks/useCheckLogin';

// After receiving jobs data for all languages, modify it so that you can select related option values
// (ex. Enter web development after selecting English language -> web develop is displayed)
export default function FormPage({ jobs }) {
  const { t } = useTranslation(FormTranslateNamespaces);
  const router = useRouter();
  const isMobile = useIsMobile();
  const locale = i18n.language;
  const { type } = React.useMemo(() => router.query as { type: FormRouterType }, [router.query]);

  // Initialize the query string with user-info when page refresh.
  // const { changeFormRouter } = useFormRouter();
  // React.useEffect(() => {
  //   changeFormRouter('user-info');
  // }, [changeFormRouter]);

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

  const { isLoggedIn } = useCheckLogin();

  if (!isLoggedIn) return;

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

        {type === 'pdf' && (
          <main>
            <PDFForm isMobile={isMobile} userInfo={userInfo} />
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

export const getServerSideProps = withGetServerSideProps(async ctx => {
  const jobs = await getJobs({ headers: { Cookie: ctx.req.headers.cookie } });
  return {
    props: {
      ...(await getI18nProps(ctx, FormTranslateNamespaces)),
      jobs,
    },
  };
});
