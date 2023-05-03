import { ObjectOption } from 'shared-ui/src/components/Select';
import { ResumeInfoState, ResumeContent } from 'modules/form/components/Confirmation';
import { UserInfoState } from 'modules/form/components/UserInfo';

interface CalculateFormContentsProps {
  locale: string;
  userInfo: UserInfoState;
  resumeInfo: ResumeInfoState;
}

const calculateFormContents = ({ locale, userInfo, resumeInfo }: CalculateFormContentsProps) => {
  const contents = resumeInfo.reduce((contents, info) => {
    const { select, textarea } = info;
    const contentsId = (select as ObjectOption)?.id ?? 1;

    if (!contents[contentsId]) contents[contentsId] = [];

    contents[contentsId]?.push({ content: textarea });
    return contents;
  }, {} as ResumeContent);

  return {
    careerYear: userInfo.selectedYearsOfCareer,
    difficulty: (userInfo.selectedDifficulty as ObjectOption)!.value,
    jobId: (userInfo.selectedJob as ObjectOption)!.id,
    locale,
    contents,
  };
};

export { calculateFormContents };
