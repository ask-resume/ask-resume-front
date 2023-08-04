import axios, { AxiosRequestConfig } from 'axios';
import { NotFoundError, ForbiddenError, AuthError, InternalServerError } from './CustomError';

export const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_PRODUCTION_API_URL
    : process.env.NEXT_PUBLIC_API_URL;

// TODO: implement Google OAuth
export const axiosConfig = {
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
};

const axiosInstance = axios.create(axiosConfig);

const refreshToken = async (originalRequest: AxiosRequestConfig) => {
  await axios.get('/refresh', originalRequest);
};

axiosInstance.interceptors.response.use(
  res => res.data,
  async error => {
    const errorStatus = error.response?.status ?? 0;

    switch (errorStatus) {
      case 401:
        try {
          await refreshToken(error.config);
        } catch (e) {
          throw new AuthError();
        }
        break;
      case 403:
        throw new ForbiddenError();
      case 404:
        throw new NotFoundError();
      case 500:
        throw new InternalServerError();
      default:
        break;
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
