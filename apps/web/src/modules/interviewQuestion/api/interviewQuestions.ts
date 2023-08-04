import axiosInstance from '../../auth/axiosInstance';
import { LanguageType } from 'common/types/api/languageType';
import { useMutation } from 'react-query';

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

export const generateInterviewQuestions = async (form: InterviewQuestionCreationForm) => {
  return axiosInstance.post('/generative/interview-maker', form);
};

// When implementing i18next, change useErrorboundary and suspense to true to handle client errors.
export const useGenerateInterviewQuestions = () => {
  return useMutation(generateInterviewQuestions);
};
