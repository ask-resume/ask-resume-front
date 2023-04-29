import { useRouter } from 'next/router';
import { useQueryParams } from 'common/hooks/router/useQueryParams';

const useFormRouter = () => {
  const router = useRouter();
  const { type, locale } = router.query as { type: string; locale: string };

  const pathname = `/${locale}/form`;
  const { changeQueryParams } = useQueryParams();

  const changeFormRouter = (type: 'user-info' | 'resume' | 'confirmation') => {
    const query = { type };
    changeQueryParams(pathname, query);
  };

  return { type, changeFormRouter };
};

export { useFormRouter };
