import axiosInstance from '../../auth/axiosInstance';
import { LANGUAGE_HEADER } from 'common/config/locale';

type Section = {
  content: string;
};

type ResumeData = {
  aac: Section[];
  career: Section[];
  education: Section[];
  introduction: Section[];
  outsideActivities: Section[];
  project: Section[];
  technical: Section[];
};

interface FormData {
  careerYear: number;
  contents: ResumeData;
  difficulty: 'easy' | 'medium' | 'hard';
  jobId: number;
  locale: string;
}

export const postFormData = async (locale: string, formData: FormData) => {
  return axiosInstance.post('/v1/resume/generate', formData, {
    headers: {
      'Accept-Language': LANGUAGE_HEADER[locale],
    },
  });
};
