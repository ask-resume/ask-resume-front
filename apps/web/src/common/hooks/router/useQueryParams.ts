import { useRouter } from 'next/router';

const useQueryParams = () => {
  const router = useRouter();

  const changeQueryParams = <T extends Record<string, string | string[]>>(
    pathname: string,
    query: T,
  ) => {
    router.push(
      {
        pathname,
        query,
      },
      undefined,
      { shallow: true },
    );
  };

  return { changeQueryParams };
};

export { useQueryParams };
