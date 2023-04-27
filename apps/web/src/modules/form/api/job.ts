import { useQuery } from 'react-query';
import axiosInstance from '../../auth/axiosInstance';
import { Option } from 'shared-ui/src/components/Select';
import { LANGUAGE_HEADER } from 'common/config/locale';

export const getJobs = async (locale: string) => {
  return axiosInstance.get('/v1/jobs', {
    headers: {
      'Accept-Language': LANGUAGE_HEADER[locale],
    },
  });
};

interface UseJobsProps {
  locale: string;
  initialJobs: Option[];
}

export const useJobs = ({ locale, initialJobs }: UseJobsProps) => {
  return useQuery(['jobs', locale], () => getJobs(locale), {
    initialData: () => ({ data: initialJobs }),
    cacheTime: Infinity,
    select: (res: { data: Option[] }) => res.data,
  });
};
