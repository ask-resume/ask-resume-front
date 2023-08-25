import { InterviewDifficulty } from 'modules/interviewQuestion/api/interviewQuestions';
import axiosInstance from '../../auth/axiosInstance';
import { useMutation } from '@tanstack/react-query';
import { LanguageType } from 'common/types/api/languageType';
import { mapToUpperCase } from 'shared-lib/utils/object/mapToUpperCase';

export interface UserInfoForm {
  careerYear: number;
  difficulty: InterviewDifficulty;
  jobId: number;
  language: LanguageType;
}

export interface SubmitPdfResumeRequest {
  form: UserInfoForm;
  pdfFile: File;
}

const submitPdfResume = async ({ form, pdfFile }: SubmitPdfResumeRequest): Promise<void> => {
  const formData = new FormData();
  formData.append('resume', pdfFile);

  const upperCaseProps = mapToUpperCase({ keyList: ['language', 'difficulty'], obj: form });

  console.log(upperCaseProps);

  const upperCaseForm = { ...form, ...upperCaseProps };

  Object.keys(upperCaseForm).forEach(key => {
    formData.append(key, upperCaseForm[key]);
  });

  return axiosInstance.post('/generative/interview-maker/pdf', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const useSubmitPdfResume = () => {
  return useMutation(submitPdfResume);
};
