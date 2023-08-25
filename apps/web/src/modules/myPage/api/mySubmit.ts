import { useQuery } from '@tanstack/react-query';
import { LANGUAGE_HEADER } from 'common/config/locale';
import axiosInstance from '../../auth/axiosInstance';
import { PredictionResponse } from 'modules/interviewQuestion/api/interviewQuestions';
import { mySubmitKeys } from '../constants';

export interface Page<T> {
  page: number;
  pageSize: number;
  totalElements: number;
  list: T[];
}

export interface SubmitListItemResponse {
  submitId: number;
  title: string;
  service: string;
  submitStatus: string;
  createdAt: string;
  updatedAt: string;
}

export const getMySubmits = async (locale: string, page: number, pageSize: number) => {
  const response = await axiosInstance.get<Page<SubmitListItemResponse>>('/submits', {
    headers: {
      'Accept-Language': LANGUAGE_HEADER[locale],
    },
    params: {
      page: page,
      pageSize,
      sort: 'id,DESC',
    },
  });

  return { ...response.data, page: response.data?.page + 1 };
};

interface GetMySubmitProps {
  locale: string;
  submitId: number;
}

export type ServiceType = 'INTERVIEW_MAKER';

export type MySubmitResponse<T> = T & {
  serviceType: ServiceType;
};

export interface InterviewMakerResponse {
  interviewMakerList: PredictionResponse[];
}

const getMySubmit = async ({ locale, submitId }: GetMySubmitProps) => {
  return axiosInstance.get<MySubmitResponse<any>>(`/submits/${submitId}`, {
    headers: {
      'Accept-Language': LANGUAGE_HEADER[locale],
    },
  });
};

export const useMySubmit = (props: GetMySubmitProps) => {
  return useQuery(mySubmitKeys.detail(props.submitId), () => getMySubmit(props), {
    select: (res: { data: MySubmitResponse<any> }) => res.data,
    cacheTime: 0,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};
