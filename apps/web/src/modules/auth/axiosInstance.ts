import axios, { AxiosRequestConfig } from 'axios';
import { useRouter } from 'next/router';

let _retry_count = 0;
const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);

const timeDelay = (k: number) => {
  const base_interval = 0.5;
  const base_multiplier = 1.5;
  const retry_interval = base_interval * base_multiplier ** (k - 1) * 1000;
  const max = k === 5 ? 500 : retry_interval;

  return retry_interval + randomInt(0, max);
};

const wait = (delay: number): Promise<void> => new Promise(resolve => setTimeout(resolve, delay));
const baseURL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_PRODUCTION_API_URL
    : process.env.NEXT_PUBLIC_DEV_API_URL;

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const signUpUrl = `${baseURL}/sign-up`;
const signUpMessage = 'Please Sign up!';

axiosInstance.interceptors.response.use(
  res => res.data,
  async error => {
    const origReqConfig = error.config as AxiosRequestConfig;
    const errorStatus = error.response?.status ?? 0;

    if (errorStatus >= 500 && _retry_count < 4) {
      _retry_count++;
      return wait(timeDelay(_retry_count)).then(() => axiosInstance.request(origReqConfig));
    }

    // const router = useRouter();
    switch (errorStatus) {
      // TODO: Implement login function
      case 401:
        // router.push({
        //   pathname: signUpUrl,
        //   query: { message: signUpMessage },
        // });
        break;
      case 403:
        // router.push({
        //   pathname: signUpUrl,
        //   query: { message: signUpMessage },
        // });
        break;
      default:
        break;
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
