import Head from 'next/head';
import dynamic from 'next/dynamic';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useIsMobile } from 'shared-lib/hooks/media-query';

import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';
import { useUserInfoState } from 'modules/form/hooks/useUserInfoState';
import styles from './index.module.scss';
import { getJobs } from 'modules/form/api/job';
import { Option } from 'shared-ui/src/components/Select';

const TranslateNamespaces = ['form', 'common'];

const Router = dynamic(() => import('modules/form/components/Router'), { ssr: false });
const UserInfo = dynamic(() => import('modules/form/components/UserInfo'), { ssr: false });
const ResumeInfo = dynamic(() => import('modules/form/components/ResumeInfo'), { ssr: false });
const Confirmation = dynamic(() => import('modules/form/components/Confirmation'), { ssr: false });

interface FormPageProps {
  jobs: Option[];
}

export default function FormPage({ jobs }: FormPageProps) {
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

        {type === 'user-info' && (
          <main className={styles.user_info_content}>
            <UserInfo
              t={t}
              isMobile={isMobile}
              locale={locale}
              initialJobs={jobs}
              userInfo={userInfoState}
              onChangeUserInfo={userInfoSetter}
            />
          </main>
        )}

        {type === 'resume' && (
          <main className={styles.confirm_content}>
            <ResumeInfo t={t} isMobile={isMobile} locale={locale} />
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
  const locale = ctx.locale as string;
  const { data } = await getJobs(locale);

  return {
    props: {
      jobs: data,
      ...(await getI18nProps(ctx, TranslateNamespaces)),
    },
    revalidate: 86400, // 24 hours in seconds
  };
};

export { getStaticProps, getStaticPaths };
