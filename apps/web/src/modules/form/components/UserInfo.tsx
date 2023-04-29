import React from 'react';
import { useTranslation } from 'next-i18next';

import Text from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import Divider from 'shared-ui/src/components/Divider';
import Button from 'shared-ui/src/components/Button';
import InputSelect from 'shared-ui/src/components/InputSelect';
import Select, { Option } from 'shared-ui/src/components/Select';
import Slider from 'shared-ui/src/components/Slider';
import Icon from 'shared-ui/src/components/Icon';
import Spinner from 'shared-ui/src/components/Spinner';

import { formatYearsOfCareer, validateUserInfoForm } from '../lib';
import { StateName, ChangedValue } from '../hooks/useUserInfoState';
import { useQueryParams } from 'common/hooks/router/useQueryParams';

import styles from './index.module.scss';
import { TranslateNamespaces } from '../constants';
import { useJobs } from '../api/job';

export interface UserInfoState {
  selectedJob: Option | null;
  selectedLanguage: Option | null;
  selectedDifficulty: Option | null;
  selectedYearsOfCareer: number;
}

interface UserInfoProps {
  locale: string;
  isMobile: boolean;
  userInfo: UserInfoState;
  onChangeUserInfo: (stateName: StateName, changedValue: ChangedValue) => void;
}

const UserInfo = ({ locale, isMobile, userInfo, onChangeUserInfo }: UserInfoProps) => {
  const { t } = useTranslation(TranslateNamespaces);

  const LABEL_SIZE = isMobile ? 'medium' : 'large';
  const LABEL_WEIGHT = 'medium';

  const NATION_OPTION: Option[] = [
    { name: t('user_info.nation.english'), value: 'en' },
    { name: t('user_info.nation.korea'), value: 'ko' },
  ];
  const DIFFICULTY_OPTION: Option[] = [
    { name: t('user_info.difficulty.easy'), value: 'easy' },
    { name: t('user_info.difficulty.medium'), value: 'medium' },
    { name: t('user_info.difficulty.hard'), value: 'hard' },
  ];

  const pathname = `/${locale}/form`;
  const { changeQueryParams } = useQueryParams();

  const { data: jobs, isLoading: isJobsLoading } = useJobs(locale);
  const isNavigationEnabled = !validateUserInfoForm(userInfo);

  return (
    <div className={styles._CONTAINER_}>
      {isJobsLoading && (
        <div className={styles.loading}>
          <Spinner size="xl" />
        </div>
      )}

      {!isJobsLoading && (
        <>
          <div className={styles.user_content}>
            {/* Job InputSelect */}
            <InputSelect
              className={styles._SELECT_}
              selectedOption={userInfo.selectedJob}
              onChangeSelectedOption={changed => onChangeUserInfo('selectedJob', changed)}
              options={jobs!}
              label={{
                labelText: t('user_info.label.job') ?? '',
                labelWeight: LABEL_WEIGHT,
                labelSize: LABEL_SIZE,
              }}
              placeholder={t('user_info.placeholder.job') ?? ''}
              locale={locale}
              height={isMobile ? 'md' : 'lg'}
            />

            {/* Nation InputSelect */}
            <Select
              className={styles._SELECT_}
              selectedOption={userInfo.selectedLanguage}
              onChangeSelectedOption={changed => onChangeUserInfo('selectedLanguage', changed)}
              options={NATION_OPTION}
              label={{
                labelText: t('user_info.label.nation') ?? '',
                labelWeight: LABEL_WEIGHT,
                labelSize: LABEL_SIZE,
              }}
              placeholder={t('user_info.placeholder.nation') ?? ''}
              height={isMobile ? 'md' : 'lg'}
            />

            {/* Interview Difficulty InputSelect */}
            <Select
              className={styles._SELECT_}
              selectedOption={userInfo.selectedDifficulty}
              onChangeSelectedOption={changed => onChangeUserInfo('selectedDifficulty', changed)}
              options={DIFFICULTY_OPTION}
              label={{
                labelText: t('user_info.label.difficulty') ?? '',
                labelWeight: LABEL_WEIGHT,
                labelSize: LABEL_SIZE,
              }}
              placeholder={t('user_info.placeholder.difficulty') ?? ''}
              height={isMobile ? 'md' : 'lg'}
            />

            {/* Years of Experience Slider */}
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Text className="_label" size={LABEL_SIZE} weight={LABEL_WEIGHT}>
                  {t('user_info.label.years-of-experience')}
                </Text>
                <Divider variant="vertical" color={ColorMap.gray_5} width={2} />
                <Text variant="block" size={LABEL_SIZE} weight="medium" textColor={ColorMap.blue_5}>
                  {formatYearsOfCareer({
                    t,
                    locale,
                    selectedYearsOfCareer: userInfo.selectedYearsOfCareer,
                  })}
                </Text>
              </div>

              <Slider
                size={isMobile ? 'medium' : 'large'}
                min={0}
                max={10}
                step={1}
                inputValue={userInfo.selectedYearsOfCareer}
                onChangeSelectedOption={changed =>
                  onChangeUserInfo('selectedYearsOfCareer', changed)
                }
              />
            </div>
          </div>

          <div
            className={styles.button_wrapper}
            onClick={() => {
              if (isNavigationEnabled) return;
              const query = { type: 'resume' };
              changeQueryParams(pathname, query);
            }}
          >
            <Button
              size={isMobile ? 'sm' : 'lg'}
              buttonColor="blue"
              disabled={isNavigationEnabled}
              label={{
                labelText: t('button.next-page') ?? '',
                labelTailingIcon: <Icon.Arrow flip />,
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default UserInfo;
