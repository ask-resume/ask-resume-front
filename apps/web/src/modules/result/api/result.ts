import axiosInstance from '../../auth/axiosInstance';
import { Option } from 'shared-ui/src/components/Select';
import { LANGUAGE_HEADER } from 'common/config/locale';
import { useQuery } from 'react-query';

const queryKey = 'form-result';
export const generateResume = async ({ formInfo, locale }) => {
  return axiosInstance.post('/v1/resume/generate', formInfo, {
    headers: {
      'Accept-Language': LANGUAGE_HEADER[locale],
    },
  });
};

export const useGenerateResume = props => {
  return useQuery(queryKey, () => generateResume(props), {
    refetchOnWindowFocus: false,
    select: (res: { data: Option[] }) => res.data,
  });
};
