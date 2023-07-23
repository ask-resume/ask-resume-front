import { LANGUAGE_HEADER } from 'common/config/locale';

import axiosInstance from '../../auth/axiosInstance';

export interface Page<T> {
  page: number;
  pageSize: number;
  totalElements: number;
  list: T[];
}

export interface SubmitListItemResponse {
  id: number;
  title: string;
  service: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export const getMySubmits = async (locale: string, page: number, pageSize: number) => {
  const response = await axiosInstance.get<Page<SubmitListItemResponse>>('/my-member/submit', {
    headers: {
      'Accept-Language': LANGUAGE_HEADER[locale],
    },
    params: {
      page,
      pageSize,
      sort: 'id,DESC',
    },
  });

  return response.data;
};
