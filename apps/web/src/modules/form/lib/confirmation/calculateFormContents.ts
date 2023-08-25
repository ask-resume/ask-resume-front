import { ObjectOption } from 'shared-ui/src/components/Select';
import { ResumeInfoState, ResumeContent } from 'modules/form/components/Confirmation';
import { UserInfoState } from 'modules/form/components/UserInfo';
import { InterviewQuestionCreationForm } from 'modules/interviewQuestion/api/interviewQuestions';
import { getUserInfoForm } from 'modules/pdf/hooks';

interface CalculateFormContentsProps {
  userInfo: UserInfoState;
  resumeInfo: ResumeInfoState;
}

const calculateFormContents = ({
  userInfo,
  resumeInfo,
}: CalculateFormContentsProps): InterviewQuestionCreationForm => {
  const userInfoForm = getUserInfoForm({ userInfo });

  const contents = resumeInfo.reduce((contents, info) => {
    const { select, textarea } = info;
    const contentsId = (select as ObjectOption)?.id ?? 1;

    if (!contents[contentsId]) contents[contentsId] = [];

    contents[contentsId]?.push({ content: textarea });
    return contents;
  }, {} as ResumeContent);

  return {
    information: userInfoForm,
    contents,
  };
};

export { calculateFormContents };
