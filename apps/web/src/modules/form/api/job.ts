import { useQuery } from 'react-query';
import axiosInstance from '../../auth/axiosInstance';
import { Option } from 'shared-ui/src/components/Select';
import { LANGUAGE_HEADER } from 'common/config/locale';

export const getJobs = async (locale: string) => {
  const response = await axiosInstance.get('/v1/jobs', {
    headers: {
      'Accept-Language': LANGUAGE_HEADER[locale],
    },
  });
  return response.data as Option[];
};

export const useJobs = (locale: string) => {
  return useQuery(['jobs', locale], () => getJobs(locale), {
    cacheTime: Infinity,
  });
};
