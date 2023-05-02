import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

const useQueryParams = () => {
  const router = useRouter();

  interface Option {
    pathname: string;
    query?: ParsedUrlQuery;
  }

  const changeQueryParams = ({ pathname, query }: Option) => {
    router.push(
      {
        pathname,
        query,
      },
      undefined,
      { shallow: true },
    );
  };

  const changeQueryParamsWithReplace = ({ pathname, query }: Option) => {
    router.replace(
      {
        pathname,
        query,
      },
      undefined,
      { shallow: true },
    );
  };

  const passQueryParams = ({ pathname, query }: Option) => {
    router.push(
      {
        pathname,
        query,
      },
      pathname,
      { shallow: true },
    );
  };

  const passQueryParamsWithReplace = ({ pathname, query }: Option) => {
    router.replace(
      {
        pathname,
        query,
      },
      pathname,
      { shallow: true },
    );
  };

  return {
    changeQueryParams,
    changeQueryParamsWithReplace,
    passQueryParams,
    passQueryParamsWithReplace,
  };
};

export { useQueryParams };
