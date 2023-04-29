import { TEXTAREA_REGEX } from 'modules/form/constants';

const validateResumeInfoForm = (textAreaList: string[]) => {
  const isAllTextAreaValid = textAreaList.every(textArea => {
    return !TEXTAREA_REGEX.test(textArea);
  });
  return isAllTextAreaValid;
};

export { validateResumeInfoForm };
