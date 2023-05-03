import { initResumeInfo } from '../../constants';
import { Option, isObjectOption } from 'shared-ui/src/components/Select';
import { ResumeInfoName } from '../../types/resume-info';

interface GetResumeInfoProps {
  resumeTextArea: string[];
  resumeSelect: Option[];
}

const getResumeInfo = ({ resumeTextArea, resumeSelect }: GetResumeInfoProps) => {
  return resumeSelect.reduce((resumeInfo, currSelectedOption, idx) => {
    const currSelectedId = isObjectOption(currSelectedOption) && currSelectedOption.id;
    const currTextAreaValue = resumeTextArea[idx];
    if (!currTextAreaValue.length) return resumeInfo;

    const newValue = {
      content: resumeTextArea[idx],
    };

    resumeInfo[currSelectedId as ResumeInfoName].push(newValue);
    return resumeInfo;
  }, initResumeInfo);
};

export { getResumeInfo };
