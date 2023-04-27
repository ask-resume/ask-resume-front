import React from 'react';

import { useInputSelectedState } from 'shared-ui/src/components/InputSelect';
import { useSelectState } from 'shared-ui/src/components/Select';
import { useSliderState } from 'shared-ui/src/components/Slider';
import { TFunction } from 'next-i18next';
import { Option } from 'shared-ui/src/components/Select';
import { UserInfoState } from '../components/UserInfo';

interface UseUserInfoProps {
  t: TFunction;
  locale: string;
}

export type StateName =
  | 'selectedJob'
  | 'selectedLanguage'
  | 'selectedDifficulty'
  | 'selectedYearsOfCareer';
export type ChangedValue = Option | null | number;

const INIT_STATE = {
  language: 'en',
  difficulty: 'medium',
  career: 0,
};

export const useUserInfoState = ({
  t,
  locale,
}: UseUserInfoProps): {
  userInfoState: UserInfoState;
  userInfoSetter: (stateName: StateName, changedValue: ChangedValue) => void;
} => {
  const NATION_OPTION: Option[] = [
    { name: t('user_info.nation.english'), value: 'en' },
    { name: t('user_info.nation.korea'), value: 'ko' },
  ];
  const DIFFICULTY_OPTION: Option[] = [
    { name: t('user_info.difficulty.easy'), value: 'easy' },
    { name: t('user_info.difficulty.medium'), value: 'medium' },
    { name: t('user_info.difficulty.hard'), value: 'hard' },
  ];

  // IF You want to add another state, you should add state name to StateName type.
  const [selectedJob, onChangeSelectedJob] = useInputSelectedState({ initSelected: null });
  const [selectedLanguage, onChangeSelectedLanguage] = useSelectState({
    initialSelected: INIT_STATE.language,
    options: NATION_OPTION,
  });
  const [selectedDifficulty, onChangeSelectedDifficulty] = useSelectState({
    initialSelected: INIT_STATE.difficulty,
    options: DIFFICULTY_OPTION,
  });
  const [selectedYearsOfCareer, onChangeSelectedYearsOfCareer] = useSliderState({
    initialValue: INIT_STATE.career,
  });

  // Initialize state when locale is changed.
  React.useEffect(() => {
    console.log('hi');
    onChangeSelectedJob(null);
    onChangeSelectedLanguage(INIT_STATE.language);
    onChangeSelectedDifficulty(INIT_STATE.difficulty);
    onChangeSelectedYearsOfCareer(INIT_STATE.career);
  }, [locale]);

  const onChangeUserInfo = React.useCallback((stateName: StateName, changedValue: ChangedValue) => {
    const callback = {
      selectedJob: onChangeSelectedJob,
      selectedLanguage: onChangeSelectedLanguage,
      selectedDifficulty: onChangeSelectedDifficulty,
      selectedYearsOfCareer: onChangeSelectedYearsOfCareer,
    };

    callback[stateName](changedValue as never);
  }, []);

  return {
    userInfoState: {
      selectedJob,
      selectedLanguage,
      selectedDifficulty,
      selectedYearsOfCareer,
    },
    userInfoSetter: onChangeUserInfo,
  };
};
