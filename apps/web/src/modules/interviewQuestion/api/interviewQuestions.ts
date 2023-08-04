import { useMutation } from 'react-query';
import { LanguageType } from 'common/types/api/languageType';

import axiosInstance from '../../auth/axiosInstance';
import { LANGUAGE_HEADER } from 'common/config/locale';

export interface PredictionResponse {
  bestAnswer: string;
  question: string;
  type: string;
}

export type InterviewDifficulty = 'easy' | 'medium' | 'hard';

interface ResumeRequest {
  content: string;
}

export interface InterviewQuestionCreationForm {
  careerYear: number;
  contents: {
    introduction?: ResumeRequest[];
    career?: ResumeRequest[];
    technical?: ResumeRequest[];
    project?: ResumeRequest[];
    education?: ResumeRequest[];
    outsideActivities?: ResumeRequest[];
    aac?: ResumeRequest[];
  };
  difficulty: InterviewDifficulty;
  jobId: number;
  language: LanguageType;
}

export const generateInterviewQuestions = async ({
  form,
  language,
}: {
  form: InterviewQuestionCreationForm;
  language: LanguageType;
}) => {
  return axiosInstance.post('/generative/interview-maker', form, {
    headers: { 'Accept-Language': LANGUAGE_HEADER[language] },
  });
};

// When implementing i18next, change useErrorboundary and suspense to true to handle client errors.
export const useGenerateInterviewQuestions = () => {
  return useMutation(generateInterviewQuestions);
};
