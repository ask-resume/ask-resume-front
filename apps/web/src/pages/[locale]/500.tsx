import { GetStaticPropsContext } from 'next';
import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';
import { useTranslation } from 'next-i18next';

import CustomErrorPage from 'modules/error/components/CustomErrorPage';

const Custom500 = () => {
  return <CustomErrorPage errorCode="500" />;
};

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {
      ...(await getI18nProps(ctx, ['error-page'])),
    },
  };
};

export { getStaticProps, getStaticPaths };

export default Custom500;
