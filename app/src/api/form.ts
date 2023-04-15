import axiosInstance from './axiosInstance';

export const getJobs = async (locale: string) => {
  return axiosInstance.get(`/v1/jobs?locale=${locale}`);
};
