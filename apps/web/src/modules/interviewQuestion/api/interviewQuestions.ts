import { useMutation } from '@tanstack/react-query';
import { LanguageType } from 'common/types/api/languageType';

import axiosInstance from '../../auth/axiosInstance';
import { LANGUAGE_HEADER } from 'common/config/locale';
import { mapToUpperCase } from 'shared-lib/utils/object/mapToUpperCase';
import { toast } from 'react-hot-toast';
import { AxiosError } from 'axios';

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
  information: {
    jobId: number;
    difficulty: InterviewDifficulty;
    careerYear: number;
    language: LanguageType;
  };
  contents: {
    introduction?: ResumeRequest[];
    career?: ResumeRequest[];
    technical?: ResumeRequest[];
    project?: ResumeRequest[];
    education?: ResumeRequest[];
    outsideActivities?: ResumeRequest[];
    aac?: ResumeRequest[];
  };
}

export const generateInterviewQuestions = async ({
  form,
}: {
  form: InterviewQuestionCreationForm;
}) => {
  const upperCaseKeyList = ['language' as const, 'difficulty' as const];

  const upperCaseInformation = mapToUpperCase({ keyList: upperCaseKeyList, obj: form.information });

  return axiosInstance.post(
    '/generative/interview-maker/manual',
    { ...form, information: { ...form.information, ...upperCaseInformation } },
    {
      headers: { 'Accept-Language': LANGUAGE_HEADER[form.information.language] },
    },
  );
};

// When implementing i18next, change useErrorboundary and suspense to true to handle client errors.
export const useGenerateInterviewQuestions = () => {
  return useMutation(generateInterviewQuestions, {
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data.errorMessage);
    },
  });
};
