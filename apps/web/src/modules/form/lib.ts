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

interface UserInputSelectedStateProps {
  locale: string;
  initSelected: Option | null;
}

export const useInputSelectedState = ({
  locale,
  initSelected,
}: UserInputSelectedStateProps): [Option | null, (option: Option | null) => void] => {
  const [selected, setSelected] = React.useState<Option | null>(initSelected);
  const handleInputSelectChange = React.useCallback((option: Option | null) => {
    setSelected(option);
  }, []);

  React.useEffect(() => {
    setSelected(initSelected);
  }, [locale]);

  return [selected, handleInputSelectChange];
};

interface UseSelectStateProps {
  locale: string;
  initialSelected: Option | null;
  options: Option[];
}

export const useSelectState = ({
  locale,
  initialSelected,
  options,
}: UseSelectStateProps): [Option | null, (option: Option) => void] => {
  const [selected, setSelected] = React.useState(initialSelected);
  const handleSelectChange = React.useCallback((option: Option) => {
    if (isObjectOption(option)) {
      setSelected(option.value!);
      return;
    }
    setSelected(option);
  }, []);

  React.useEffect(() => {
    setSelected(initialSelected);
  }, [locale]);

  const selectedOption =
    options.find(option => isObjectOption(option) && option.value === selected) || null;

  return [selectedOption, handleSelectChange];
};

interface UseSliderStateProps {
  locale: string;
  initialValue: number;
}

export const useSliderState = ({
  locale,
  initialValue,
}: UseSliderStateProps): [number, (option: number) => void] => {
  const [value, setValue] = React.useState(initialValue);
  const handleChangeValue = React.useCallback((newValue: number) => {
    setValue(newValue);
  }, []);

  React.useEffect(() => {
    setValue(initialValue);
  }, [locale]);

  return [value, handleChangeValue];
};
