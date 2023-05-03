import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

const useQueryParams = () => {
  const router = useRouter();

  interface RouterProps {
    pathname: string;
    query?: ParsedUrlQuery;
    options?: {
      shallow?: boolean;
      locale?: string;
      scroll?: boolean;
    };
  }

  const changeQueryParams = ({ pathname, query, options }: RouterProps) => {
    router.push(
      {
        pathname,
        query,
      },
      undefined,
      options,
    );
  };

  const changeQueryParamsWithReplace = ({ pathname, query, options }: RouterProps) => {
    router.replace(
      {
        pathname,
        query,
      },
      undefined,
      options,
    );
  };

  const passQueryParams = ({ pathname, query, options }: RouterProps) => {
    router.push(
      {
        pathname,
        query,
      },
      pathname,
      options,
    );
  };

  const passQueryParamsWithReplace = ({ pathname, query, options }: RouterProps) => {
    router.replace(
      {
        pathname,
        query,
      },
      pathname,
      options,
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
