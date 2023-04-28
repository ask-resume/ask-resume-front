import React from 'react';
import { TFunction } from 'next-i18next';
import { ResumeInfoName } from '../components/ResumeInfo';

interface UseResumeInfoProps {
  t: TFunction;
  locale: string;
  tabCnt: number;
}

export const useResumeInfoState = ({ t, locale, tabCnt }: UseResumeInfoProps) => {
  const initState: { name: ResumeInfoName; value: string }[] = [...Array(tabCnt)].map((_, idx) => ({
    name: 'acc' as ResumeInfoName,
    value: '',
  }));
  const [resumeInfo, setResumeInfo] = React.useState(initState);

  /**
   * Updates the resumeInfo state based on the input event and index.
   * @param {React.ChangeEvent<HTMLTextAreaElement>} event - The input event.
   * @param {number} idx - The index of the current item to be updated.
   * @returns {void}
   */
  const handleResumeInfoChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>, idx: number) => {
      const newResumeInfo = [...resumeInfo];
      newResumeInfo[idx].value = event.target.value;
      setResumeInfo(newResumeInfo);
    },
    [],
  );

  return {
    resumeInfoState: resumeInfo,
    resumeInfoSetter: handleResumeInfoChange,
  };
};
