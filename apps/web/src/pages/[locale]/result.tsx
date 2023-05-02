import { withGetServerSideProps } from 'modules/auth/withGetServerSideProps';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { getI18nProps } from 'modules/i18n/lib/getStatic';
import React from 'react';
import { useRouter } from 'next/router';

const TranslateNamespaces = ['common'];
export default function ResultPage() {
  const router = useRouter();
  console.log(router.query.formInfo);
  const { t } = useTranslation(['common', 'result']);

  return <div>h</div>;
}

export const getServerSideProps = withGetServerSideProps(async ctx => {
  return {
    props: {
      ...(await getI18nProps(ctx, TranslateNamespaces)),
    },
  };
});
