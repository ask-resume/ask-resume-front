import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { uid } from 'react-uid';

import Text, { TextWeight } from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import Divider from 'shared-ui/src/components/Divider';
import Button from 'shared-ui/src/components/Button';
import InputSelect from 'shared-ui/src/components/InputSelect';
import Select, { Option, isObjectOption } from 'shared-ui/src/components/Select';
import Slider from 'shared-ui/src/components/Slider';
import Icon from 'shared-ui/src/components/Icon';
import { FontSize } from 'shared-ui/src/config/size';

import { formatYearsOfCareer } from '../lib';
import styles from './index.module.scss';
import { StateName, ChangedValue } from '../hooks/useUserInfoState';
import { useQueryParams } from 'common/hooks/router/useQueryParams';
import { UserInfoState } from './UserInfo';
import { TranslateNamespaces } from 'modules/form/constants';

type ResumeInfo = {
  [x: string]: string;
}[];
interface ConfirmationProps {
  isMobile: boolean;
  userInfo: UserInfoState;
  resumeInfo: ResumeInfo;
}

const Confirmation = ({ isMobile, userInfo, resumeInfo }: ConfirmationProps) => {
  const { t } = useTranslation(TranslateNamespaces);
  const { locale } = useRouter().query as { locale: string };

  const pathname = `/${locale}/form`;
  const { changeQueryParams } = useQueryParams();

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
          onClick={() => {
            const query = { type: 'resume' };
            changeQueryParams(pathname, query);
          }}
        />
        <Button
          size={isMobile ? 'sm' : 'lg'}
          buttonColor="blue"
          label={{
            labelText: t('button.submit') ?? '',
            labelTailingIcon: <Icon.AirPlane />,
          }}
          // TODO: Resume page로 이동하는 기능 구현
          // onClick={() => {
          // }}
        />
      </div>
    </div>
  );
};

export default Confirmation;

interface ResumeInfoConfirmationProps {
  resumeInfo: ResumeInfo;
}

const ResumeInfoConfirmation = ({ resumeInfo }: ResumeInfoConfirmationProps) => {
  const { t } = useTranslation(TranslateNamespaces);

  return (
    <div className={styles._resume_info_container}>
      {resumeInfo.length > 0 &&
        resumeInfo.map((info, index) => (
          <div key={uid(index)} className={styles.item_container}>
            <Text textColor={ColorMap.gray_7} size="medium" weight="bold">
              [ {info.name} ]
            </Text>
            <Text size="medium" lineHeight="wide">
              {info.value}
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
  const { t } = useTranslation(TranslateNamespaces);
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
