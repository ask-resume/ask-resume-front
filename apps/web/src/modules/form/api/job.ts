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

export const useJobs = (locale: string) => {
  return useQuery(['jobs'], () => getJobs(locale), {
    cacheTime: Infinity,
    retry: false,
    select: (res: { data: Option[] }) => res.data,
  });
};
