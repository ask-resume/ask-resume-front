import { GetStaticPropsContext } from 'next';
import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';
import { useTranslation } from 'next-i18next';

import CustomErrorPage from 'modules/error/components/CustomErrorPage';

const Custom404 = () => {
  const { t } = useTranslation('error-page');
  return <CustomErrorPage t={t} errorCode="404" />;
};

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {
      ...(await getI18nProps(ctx, ['error-page'])),
    },
  };
};

export { getStaticProps, getStaticPaths };

export default Custom404;
