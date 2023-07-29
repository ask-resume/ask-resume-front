import axiosInstance from '../../auth/axiosInstance';

export const logout = async () => {
  return axiosInstance.post('/logout');
};
