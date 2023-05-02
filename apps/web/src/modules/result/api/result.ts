import { useQuery } from 'react-query';
import axiosInstance from '../../auth/axiosInstance';
import { Option } from 'shared-ui/src/components/Select';
import { LANGUAGE_HEADER } from 'common/config/locale';

export const getResults = async (locale: string) => {
  return axiosInstance.get('/v1/results', {
    headers: {
      'Accept-Language': LANGUAGE_HEADER[locale],
    },
  });
};
