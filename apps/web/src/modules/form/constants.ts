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

export const TranslateNamespaces = ['form', 'common'];
