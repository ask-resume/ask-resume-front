import { useQuery } from 'react-query';
import axiosInstance from './axiosInstance';
import { Option } from 'shared-ui/src/components/Select';

export const getJobs = async (locale: string) => {
  return axiosInstance.get(`/v1/jobs?locale=${locale}`);
};

export const useJobs = (locale: string) => {
  return useQuery(['jobs', locale], () => getJobs(locale), {
    cacheTime: Infinity,
    select: (res: { data: Option[] }) => res.data,
  });
};
