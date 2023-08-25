import { ResumeInfoName } from './types/resume-info';

export const initResumeInfo: {
  [key in ResumeInfoName]: { content: string }[];
} = {
  aac: [],
  career: [],
  education: [],
  introduction: [],
  outsideActivities: [],
  project: [],
  technical: [],
};

export const FormTranslateNamespaces = ['form', 'pdf', 'error-page', 'common'];
export const TAB_CNT = 4;
export const TEXTAREA_REGEX = /^.{0,99}$|^.{1001,}$/;

export const ResultTranslateNamespaces = ['result', 'common'];
