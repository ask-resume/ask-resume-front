import Link from 'next/link';
import { GetStaticPropsContext } from 'next';
import { getI18nProps, getStaticPaths } from 'modules/i18n/lib/getStatic';

const Custom500 = () => {
  return (
    <div>
      <h1>500 - Server-side error occurred</h1>
      <p>Sorry, we are having technical difficulties. Please try again later.</p>
    </div>
  );
};

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {
      ...(await getI18nProps(ctx, ['common'])),
    },
  };
};

export { getStaticProps, getStaticPaths };

export default Custom500;
