import { useEffect } from 'react';
import { useCurrentMember } from '../api/currentMember';
import { useRouter } from 'next/router';

export const useCheckLogin = () => {
  const router = useRouter();

  const { data: currentMember, isLoading } = useCurrentMember();

  useEffect(() => {
    if (!isLoading && !currentMember) {
      router.push('/login');
    }
  }, [isLoading, currentMember]);

  return {
    isLoggedIn: !!currentMember,
  };
};
