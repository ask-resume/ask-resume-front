import { withGetServerSideProps } from 'modules/auth/withGetServerSideProps';
import { GetServerSideProps } from 'next';

export default function ResultPage() {
  // console.log(data);
  console.log(window.localStorage);
  return <div>h</div>;
}

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(async ctx => {
  // const { data } = ctx.query;

  return {
    props: {
      // data: JSON.parse(data),
    },
  };
});
