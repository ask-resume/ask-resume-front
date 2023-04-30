import { TEXTAREA_REGEX } from 'modules/form/constants';

const validateResumeInfoForm = (textAreaList: string[]): boolean => {
  const trimmedTextAreaList = textAreaList.filter(textArea => textArea.trim().length);
  if (!trimmedTextAreaList.length) return false;

  const isAllTextAreaValid = trimmedTextAreaList.every(textArea => {
    return !TEXTAREA_REGEX.test(textArea);
  });

  return isAllTextAreaValid;
};

export { validateResumeInfoForm };
