import { GetStaticPropsContext } from 'next';
import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';
import CustomErrorPage from 'modules/error/components/CustomErrorPage';

const Custom404 = () => {
  return <CustomErrorPage errorCode="404" />;
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
