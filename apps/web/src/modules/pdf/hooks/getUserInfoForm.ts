import { ObjectOption } from 'shared-ui/src/components/Select';
import { UserInfoState } from 'modules/form/components/UserInfo';
import { InterviewDifficulty } from 'modules/interviewQuestion/api/interviewQuestions';
import { LanguageType } from 'common/types/api/languageType';
import { UserInfoForm } from '../api/submitPdf';

interface GetUserInfoFormProps {
  userInfo: UserInfoState;
}

const getUserInfoForm = ({ userInfo }: GetUserInfoFormProps): UserInfoForm => {
  return {
    careerYear: userInfo.selectedYearsOfCareer,
    difficulty: (userInfo.selectedDifficulty as ObjectOption)!.value as InterviewDifficulty,
    jobId: (userInfo.selectedJob as ObjectOption)!.id as number,
    language: (userInfo.selectedLanguage as ObjectOption)!.value as LanguageType,
  };
};

export { getUserInfoForm };
