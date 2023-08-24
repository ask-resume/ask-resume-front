import React from 'react';
import { useRouter } from 'next/router';
import { useQueryParams } from 'common/hooks/router/useQueryParams';
import { FormRouterType } from '../types';

const useFormRouter = () => {
  const router = useRouter();
  const { type } = React.useMemo(() => router.query as { type: FormRouterType }, [router.query]);

  const pathname = `/form`;
  const { changeQueryParams } = useQueryParams();

  const changeFormRouter = (type: 'user-info' | 'resume' | 'confirmation') => {
    const query = { type };
    changeQueryParams({ pathname, query });
  };

  return { type, changeFormRouter };
};

export { useFormRouter };
