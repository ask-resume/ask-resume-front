import { useQuery } from '@tanstack/react-query';
import { ApiResult } from 'common/types/api/responseType';
import axiosInstance from '../../auth/axiosInstance';
import { currentMemberKeys } from 'common/constants/currentMemberKeys';

export interface CurrentMemberResponse {
  memberId: number;
  email: string;
  username: string;
  profile: string;
  role: string;
  locale: string;
}

const getCurrentMember = async (): Promise<ApiResult<CurrentMemberResponse>> => {
  return axiosInstance.get('/my-member');
};

export const useCurrentMember = () => {
  return useQuery(currentMemberKeys.detail(), () => getCurrentMember(), {
    select: response => response.data,
    cacheTime: 0,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};
