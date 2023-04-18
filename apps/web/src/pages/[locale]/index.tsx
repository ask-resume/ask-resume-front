import Link from 'next/link';
import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
import { useTranslation } from 'next-i18next';

import Text from 'shared-ui/src/components/Text';
import Button from 'shared-ui/src/components/Button';
import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';

// Introducing AskResume
// AskResume gives you answers to questions you might ask on your resume in a job interview.
export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('common:page_title')}</title>
        <meta name="description" content={t('common:description') ?? ''} />
        <meta name="keyword" content={t('common:keyword') ?? ''} />
      </Head>

      <main>
        <div>
          <Text lineHeight="narrow">
            Find out what questions to ask on your resume in a job interview. Typing the options you
            want and upload your resume pdf file.
          </Text>
          <Link href="/form/user-info">
            <Button>Go to form page</Button>
          </Link>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return {
    props: {
      ...(await getI18nProps(ctx, ['common'])),
    },
  };
}

export { getStaticPaths };
