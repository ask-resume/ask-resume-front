import { TFunction } from 'next-i18next';

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
      0: t('user_info.career.newbie'),
      10: t('user_info.career.more-than-10-years'),
    },
    en: {
      0: t('user_info.career.newbie'),
      10: t('user_info.career.more-than-10-years'),
    },
  };

  const localeLabels = labels[locale];
  const selectedYearLabel = localeLabels && localeLabels[selectedYearsOfCareer];

  if (selectedYearLabel) {
    return selectedYearLabel;
  }

  return `${selectedYearsOfCareer} ${t('user_info.career.years')}`;
};
