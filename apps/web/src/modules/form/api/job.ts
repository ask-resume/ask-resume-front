import axiosInstance from '../../auth/axiosInstance';
import { Option } from 'shared-ui/src/components/Select';
import { LANGUAGE_HEADER } from 'common/config/locale';
import { useQuery } from 'react-query';

export const getJobs = async () => {
  const [ko, en] = await Promise.all([
    axiosInstance.get('/v1/jobs', {
      headers: { 'Accept-Language': LANGUAGE_HEADER.ko },
    }),
    axiosInstance.get('/v1/jobs', {
      headers: { 'Accept-Language': LANGUAGE_HEADER.en },
    }),
  ]);
  return { ko: ko.data as Option[], en: en.data as Option[] };
};

export const useJobs = () => {
  return useQuery('jobs', getJobs);
};
