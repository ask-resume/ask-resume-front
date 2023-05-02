import axiosInstance from '../../auth/axiosInstance';
import { Option } from 'shared-ui/src/components/Select';
import { LANGUAGE_HEADER } from 'common/config/locale';
import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

interface CustomError {
  errorCode: string;
  errorMessage: string;
}

const queryKey = 'form-result';
const queryFn = async ({ formInfo, locale }) => {
  return axiosInstance.post('/v1/resume/generate', formInfo, {
    headers: {
      'Accept-Language': LANGUAGE_HEADER[locale],
    },
  });
};

export const useGenerateResume = props => {
  return useQuery(queryKey, () => queryFn(props), {
    refetchOnWindowFocus: false,
    select: (res: { data: Option[] }) => res.data,
  });
};
