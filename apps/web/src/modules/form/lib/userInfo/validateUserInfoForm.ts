import { Option, isObjectOption } from 'shared-ui/src/components/Select';

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
