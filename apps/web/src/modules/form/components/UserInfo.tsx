import { TFunction } from 'next-i18next';
import React from 'react';

import Text from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import Divider from 'shared-ui/src/components/Divider';
import Button from 'shared-ui/src/components/Button';
import InputSelect from 'shared-ui/src/components/InputSelect';
import Select, { Option } from 'shared-ui/src/components/Select';
import Slider from 'shared-ui/src/components/Slider';
import Icon from 'shared-ui/src/components/Icon';

import { useJobs } from '../api/job';
import { formatYearsOfCareer, validateUserInfoForm } from '../lib';
import styles from './index.module.scss';
import { StateName, ChangedValue } from '../hooks/useUserInfoState';
import { useQueryParams } from 'common/hooks/router/useQueryParams';

export interface UserInfoState {
  selectedJob: Option | null;
  selectedLanguage: Option | null;
  selectedDifficulty: Option | null;
  selectedYearsOfCareer: number;
}

interface UserInfoProps {
  t: TFunction;
  locale: string;
  isMobile: boolean;
  userInfo: UserInfoState;
  onChangeUserInfo: (stateName: StateName, changedValue: ChangedValue) => void;
}

const LABEL_SIZE = 'large';
const LABEL_WEIGHT = 'medium';

const UserInfo = ({ t, locale, isMobile, userInfo, onChangeUserInfo }: UserInfoProps) => {
  const NATION_OPTION: Option[] = [
    { name: t('nation.english'), value: 'en' },
    { name: t('nation.korea'), value: 'ko' },
  ];
  const DIFFICULTY_OPTION: Option[] = [
    { name: t('difficulty.easy'), value: 'easy' },
    { name: t('difficulty.medium'), value: 'medium' },
    { name: t('difficulty.hard'), value: 'hard' },
  ];

  const { data: jobs, isLoading: isJobsLoading } = useJobs(locale);
  const pathname = `/${locale}/form`;
  const { changeQueryParams } = useQueryParams();

  return (
    <div className={styles._CONTAINER_}>
      {isJobsLoading && <div style={{ minWidth: '500px' }}></div>}

      {!isJobsLoading && (
        <>
          <div className={styles.content}>
            {/* Job InputSelect */}
            <InputSelect
              className={styles._SELECT_}
              selectedOption={userInfo.selectedJob}
              onChangeSelectedOption={changed => onChangeUserInfo('selectedJob', changed)}
              options={jobs!}
              labelText={t('label.job') ?? ''}
              placeholder={t('placeholder.job') ?? ''}
              labelWeight={LABEL_WEIGHT}
              labelSize={LABEL_SIZE}
            />

            {/* Nation InputSelect */}
            <Select
              className={styles._SELECT_}
              selectedOption={userInfo.selectedLanguage}
              onChangeSelectedOption={changed => onChangeUserInfo('selectedLanguage', changed)}
              options={NATION_OPTION}
              labelText={t('label.nation') ?? ''}
              placeholder={t('placeholder.nation') ?? ''}
              labelWeight={LABEL_WEIGHT}
              labelSize={LABEL_SIZE}
            />

            {/* Interview Difficulty InputSelect */}
            <Select
              className={styles._SELECT_}
              selectedOption={userInfo.selectedDifficulty}
              onChangeSelectedOption={changed => onChangeUserInfo('selectedDifficulty', changed)}
              options={DIFFICULTY_OPTION}
              labelText={t('label.difficulty') ?? ''}
              placeholder={t('placeholder.difficulty') ?? ''}
              labelWeight={LABEL_WEIGHT}
              labelSize={LABEL_SIZE}
            />

            {/* Years of Experience Slider */}
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Text className="_label" size={LABEL_SIZE} weight={LABEL_WEIGHT}>
                  {t('label.years-of-experience')}
                </Text>
                <Divider variant="vertical" color={ColorMap.gray_5} width={2} />
                <Text variant="block" size="small" weight="medium" textColor={ColorMap.blue_5}>
                  {formatYearsOfCareer({
                    t,
                    locale,
                    selectedYearsOfCareer: userInfo.selectedYearsOfCareer,
                  })}
                </Text>
              </div>

              <Slider
                size="medium"
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
            style={{ width: '100%' }}
            onClick={() => {
              const query = { type: 'resume' };
              changeQueryParams(pathname, query);
            }}
          >
            <Button
              size={isMobile ? 'sm' : 'lg'}
              buttonColor="blue"
              fullWidth
              disabled={!validateUserInfoForm(userInfo)}
              label={{
                labelText: t('label.go-to-resume-page') ?? '',
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
