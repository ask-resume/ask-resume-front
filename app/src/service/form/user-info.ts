import React from 'react';
import { TFunction } from 'next-i18next';
import { Option, isObjectOption } from 'shared-ui/src/components/Select';

// @function: format years of career label
type Labels = {
  [key: string]: {
    [key: number]: string;
  };
};

interface FormatYearsOfCareerProps {
  selectedYearsOfCareer: number;
  locale: string;
  t: TFunction;
}

export const formatYearsOfCareer = ({
  selectedYearsOfCareer,
  locale,
  t,
}: FormatYearsOfCareerProps) => {
  const labels: Labels = {
    ko: {
      0: t('career.newbie'),
      10: t('career.more-than-10-years'),
    },
    en: {
      0: t('career.newbie'),
      10: t('career.more-than-10-years'),
    },
  };

  if (labels[locale][selectedYearsOfCareer]) {
    return labels[locale][selectedYearsOfCareer];
  }

  return `${selectedYearsOfCareer} ${t('career.years')}`;
};

// @function: Check that all appropriate data has been entered in the user info form.
interface ValidateUserInputProps {
  selectedJob: Option | null;
  selectedLanguage: Option | null;
  selectedDifficulty: Option | null;
  selectedYearsOfCareer: number;
}

export const validateUserInfoForm = ({
  selectedJob,
  selectedLanguage,
  selectedDifficulty,
  selectedYearsOfCareer,
}: ValidateUserInputProps) => {
  const isSelectedJobExist = selectedJob !== null;
  const isSelectedLanguageExist =
    isObjectOption(selectedLanguage!) && ['en', 'ko'].includes(selectedLanguage!.value!);
  const isSelectedDifficultyExist =
    isObjectOption(selectedDifficulty!) &&
    ['easy', 'medium', 'hard'].includes(selectedDifficulty!.value!);
  const isSelectedYearsOfCareerInRange = selectedYearsOfCareer >= 0 && selectedYearsOfCareer <= 10;

  return (
    isSelectedJobExist &&
    isSelectedLanguageExist &&
    isSelectedDifficultyExist &&
    isSelectedYearsOfCareerInRange
  );
};
