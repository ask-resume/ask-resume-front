import axios from 'axios';
import { NotFoundError, ForbiddenError, AuthError } from 'modules/error/lib/CustomError';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_PRODUCTION_API_URL
    : process.env.NEXT_PUBLIC_DEV_API_URL;

// TODO: implement Google OAuth
const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  res => res.data,
  async error => {
    const errorStatus = error.response?.status ?? 0;

    switch (errorStatus) {
      case 401:
        throw new AuthError();
      case 403:
        throw new ForbiddenError();
      case 404:
        throw new NotFoundError();
      default:
        break;
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
