import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { isInstanceOfAPIError } from './CustomError';

export function withGetServerSideProps(getServerSideProps: GetServerSideProps): GetServerSideProps {
  return async (context: GetServerSidePropsContext) => {
    try {
      return await getServerSideProps(context);
    } catch (error) {
      if (isInstanceOfAPIError(error)) {
        const { redirectUrl, notFound } = error;
        // eslint-disable-next-line max-depth
        if (notFound) {
          return {
            notFound: true,
          };
        }

        return {
          redirect: {
            destination: redirectUrl,
            permanent: false,
          },
        };
      }

      console.error('unhandled error', error);
      throw error;
    }
  };
}
