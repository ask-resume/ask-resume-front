import Head from 'next/head';
import dynamic from 'next/dynamic';
import { GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useIsMobile } from 'shared-lib/hooks/media-query';

import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';
import { useUserInfoState } from 'modules/form/hooks/useUserInfoState';
import { TranslateNamespaces } from 'modules/form/constants';
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
  const { userInfoState, userInfoSetter } = useUserInfoState({ t, locale });

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
              userInfo={userInfoState}
              onChangeUserInfo={userInfoSetter}
            />
          </main>
        )}

        {type === 'resume' && (
          <main className={styles.confirm_content}>
            <ResumeInfo isMobile={isMobile} locale={locale} />
          </main>
        )}

        {type === 'confirmation' && (
          <main className={styles.confirm_content}>
            <Confirmation isMobile={isMobile} locale={locale} userInfo={userInfoState} />
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
