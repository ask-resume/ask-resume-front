import axiosInstance from '../../auth/axiosInstance';
import { LANGUAGE_HEADER } from 'common/config/locale';
import { useQuery } from 'react-query';

export interface PredictionResponse {
  bestAnswer: string;
  question: string;
  type: string;
}

const queryFn = async ({ formInfo, locale }) => {
  return axiosInstance.post('/v1/resume/generate', formInfo, {
    headers: {
      'Accept-Language': LANGUAGE_HEADER[locale],
    },
  });
};

// When implementing i18next, change useErrorboundary and suspense to true to handle client errors.
export const useGenerateResume = props => {
  const queryKey = ['form-result'];
  return useQuery(queryKey, () => queryFn(props), {
    select: (res: { data: { predictionResponse: PredictionResponse[] } }) =>
      res.data.predictionResponse,
    cacheTime: 0,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};
