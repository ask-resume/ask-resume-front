import { ObjectOption } from 'shared-ui/src/components/Select';
import { ResumeInfoState, ResumeContent } from 'modules/form/components/Confirmation';
import { UserInfoState } from 'modules/form/components/UserInfo';
import {
  InterviewDifficulty,
  InterviewQuestionCreationForm,
} from 'modules/interviewQuestion/api/interviewQuestions';
import { LanguageType } from 'common/types/api/languageType';

interface CalculateFormContentsProps {
  locale: LanguageType;
  userInfo: UserInfoState;
  resumeInfo: ResumeInfoState;
}

const calculateFormContents = ({
  locale,
  userInfo,
  resumeInfo,
}: CalculateFormContentsProps): InterviewQuestionCreationForm => {
  const contents = resumeInfo.reduce((contents, info) => {
    const { select, textarea } = info;
    const contentsId = (select as ObjectOption)?.id ?? 1;

    if (!contents[contentsId]) contents[contentsId] = [];

    contents[contentsId]?.push({ content: textarea });
    return contents;
  }, {} as ResumeContent);

  return {
    careerYear: userInfo.selectedYearsOfCareer,
    difficulty: (userInfo.selectedDifficulty as ObjectOption)!.value as InterviewDifficulty,
    jobId: (userInfo.selectedJob as ObjectOption)!.id as number,
    language: locale,
    contents,
  };
};

export { calculateFormContents };
