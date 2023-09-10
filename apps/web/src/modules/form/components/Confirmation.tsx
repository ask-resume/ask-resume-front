import React from 'react';
import { i18n, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { uid } from 'react-uid';

import Text from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import Button from 'shared-ui/src/components/Button';
import { Option, isObjectOption } from 'shared-ui/src/components/Select';
import Icon from 'shared-ui/src/components/Icon';

import { formatYearsOfCareer } from '../lib';
import styles from './index.module.scss';
import { useQueryParams } from 'common/hooks/router/useQueryParams';
import { UserInfoState } from './UserInfo';
import { FormTranslateNamespaces } from 'modules/form/constants';
import { calculateFormContents } from '../lib/confirmation';
import { useGenerateInterviewQuestions } from 'modules/interviewQuestion/api/interviewQuestions';

export type ResumeInfoState = {
  select: Option;
  textarea: string;
}[];

export type ResumeContent = { [key: string]: { content: string }[] };
export interface FormattedFormInfo {
  careerYear: number;
  difficulty: Option | null;
  jobId: number;
  locale: string;
  contents: ResumeContent;
}

interface ConfirmationProps {
  isMobile: boolean;
  userInfo: UserInfoState;
  resumeInfo: ResumeInfoState;
}

const Confirmation = ({ isMobile, userInfo, resumeInfo }: ConfirmationProps) => {
  const { t } = useTranslation(FormTranslateNamespaces);
  const { mutate } = useGenerateInterviewQuestions();

  const { changeQueryParams } = useQueryParams();
  const handlePrevPageClick = () => {
    const pathname = `/form`;
    const query = { type: 'resume' };
    changeQueryParams({ pathname, query });
  };

  const handleSubmitClick = () => {
    const pathname = `/result`;
    const calculatedFormContents = calculateFormContents({ userInfo, resumeInfo });

    // Call API : Generate Interview Questions
    mutate(
      { form: calculatedFormContents },
      {
        onSuccess: () => {
          changeQueryParams({
            pathname,
          });
        },
        onError: (error: any) => {
          alert(error.response?.data.errorMessage);
        },
      },
    );
  };

  return (
    <div className={styles._CONTAINER_}>
      <div className={styles._CONFIRM_CONTENT_}>
        <UserInfoConfirmation userInfo={userInfo} />
        <ResumeInfoConfirmation resumeInfo={resumeInfo} />
      </div>

      <div className={styles._button_wrapper}>
        <Button
          size={isMobile ? 'sm' : 'lg'}
          buttonColor="blue"
          label={{
            labelText: t('button.prev-page') ?? '',
            labelLeadingIcon: <Icon.Arrow />,
          }}
          onClick={handlePrevPageClick}
        />
        <Button
          size={isMobile ? 'sm' : 'lg'}
          buttonColor="blue"
          label={{
            labelText: t('common:button.submit') ?? '',
            labelTailingIcon: <Icon.AirPlane />,
          }}
          onClick={handleSubmitClick}
        />
      </div>
    </div>
  );
};

export default Confirmation;

interface ResumeInfoConfirmationProps {
  resumeInfo: ResumeInfoState;
}

const ResumeInfoConfirmation = ({ resumeInfo }: ResumeInfoConfirmationProps) => {
  const { t } = useTranslation(FormTranslateNamespaces);
  return (
    <div className={styles._resume_info_container}>
      {resumeInfo.length > 0 &&
        resumeInfo.map((info, index) => (
          <div key={uid(index)} className={styles.item_container}>
            <Text textColor={ColorMap.gray_7} size="medium" weight="bold">
              [ {isObjectOption(info.select) ? info.select.name : info.select} ]
            </Text>
            <Text size="medium" lineHeight="wide">
              {info.textarea}
            </Text>
          </div>
        ))}
      {resumeInfo.length === 0 && (
        <Text textColor={ColorMap.gray_7} size="medium" weight="bold">
          {t('confirmation.error_message.resume')}
        </Text>
      )}
    </div>
  );
};

interface UserInfoConfirmationProps {
  userInfo: UserInfoState;
}

const UserInfoConfirmation = ({ userInfo }: UserInfoConfirmationProps) => {
  const { t } = useTranslation(FormTranslateNamespaces);
  const { locale } = useRouter().query as { locale: string };

  interface OptionProps {
    title: string;
    value: string;
    className?: string;
  }

  const Option = ({ className, title, value }: OptionProps) => (
    <div>
      <div className={cn(styles.item_content, className)}>
        <Text
          className={styles.item_title}
          size="medium"
          weight="medium"
          textColor={ColorMap.gray_6}
        >
          {title}
        </Text>
        <Text textColor={ColorMap.gray_7} size="medium" weight="bold">
          {value ? value : t('user_info.label.not_selected')}
        </Text>
      </div>
    </div>
  );

  return (
    <div className={styles._user_info_container}>
      <Option
        className={styles.job_option}
        title={t('user_info.label.job')}
        value={
          userInfo.selectedJob && isObjectOption(userInfo.selectedJob)
            ? userInfo.selectedJob.name
            : ''
        }
      />
      <Option
        title={t('user_info.label.nation')}
        value={
          userInfo.selectedLanguage && isObjectOption(userInfo.selectedLanguage)
            ? userInfo.selectedLanguage.name
            : ''
        }
      />
      <Option
        title={t('user_info.label.difficulty')}
        value={
          userInfo.selectedDifficulty && isObjectOption(userInfo.selectedDifficulty)
            ? userInfo.selectedDifficulty.name
            : ''
        }
      />
      <Option
        title={t('user_info.label.years-of-experience')}
        value={formatYearsOfCareer({
          t,
          locale,
          selectedYearsOfCareer: userInfo.selectedYearsOfCareer,
        })}
      />
    </div>
  );
};
