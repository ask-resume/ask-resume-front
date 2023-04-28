import React from 'react';
import { useTranslation } from 'next-i18next';

import { Option } from 'shared-ui/src/components/Select';
import { getResumeSelectObj } from '../lib/getResumeSelectObj';
import { TranslateNamespaces } from '../constants';

interface UseResumeTextAreaProps {
  tabCnt: number;
  locale: string;
}

export const useResumeTextAreaState = ({ tabCnt, locale }: UseResumeTextAreaProps) => {
  const initTextAreaState: string[] = [...Array(tabCnt)].map(() => '');
  const [resumeTextArea, setResumeTextArea] = React.useState(initTextAreaState);

  React.useEffect(() => {
    setResumeTextArea(initTextAreaState);
  }, [locale]);

  /**
   * Updates the resumeTextArea state based on the input event and index.
   * @param {React.ChangeEvent<HTMLTextAreaElement>} event - The input event.
   * @param {number} idx - The index of the current item to be updated.
   * @returns {void}
   */
  const handleResumeTextAreaChange = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>, idx: number) => {
      setResumeTextArea(prevState => {
        const newResumeInfo = [...prevState];
        newResumeInfo[idx] = event.target.value;
        return newResumeInfo;
      });
    },
    [],
  );

  return { resumeTextArea, resumeTextAreaSetter: handleResumeTextAreaChange };
};

interface UseResumeSelectProps {
  tabCnt: number;
  locale: string;
}

export const useResumeSelectState = ({ tabCnt, locale }: UseResumeSelectProps) => {
  const { t } = useTranslation(TranslateNamespaces);
  const resumeSelectOptions = React.useMemo(() => getResumeSelectObj(t), [t, locale]);

  const initSelectState: Option[] = [...Array(tabCnt)].map(() => resumeSelectOptions[0]);
  const [resumeSelect, setResumeSelect] = React.useState(initSelectState);

  React.useEffect(() => {
    setResumeSelect(() => [...Array(tabCnt)].map(() => resumeSelectOptions[0]));
  }, [resumeSelectOptions]);

  /**
   * Updates the resumeSelect state based on the input event and index.
   * @param {React.ChangeEvent<HTMLSelectElement>} event - The input event.
   * @param {number} idx - The index of the current item to be updated.
   * @returns {void}
   */
  const handleResumeSelectChange = React.useCallback((newSelectedOption: Option, idx: number) => {
    setResumeSelect(prevState => {
      const newResumeSelect = [...prevState];
      newResumeSelect[idx] = newSelectedOption;
      return newResumeSelect;
    });
  }, []);

  return { resumeSelect, resumeSelectSetter: handleResumeSelectChange };
};
