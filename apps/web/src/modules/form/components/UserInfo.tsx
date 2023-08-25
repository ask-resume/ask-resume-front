import React from 'react';
import { i18n, useTranslation } from 'next-i18next';

import Text from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import Divider from 'shared-ui/src/components/Divider';
import Button from 'shared-ui/src/components/Button';
import InputSelect from 'shared-ui/src/components/InputSelect';
import Select, { Option } from 'shared-ui/src/components/Select';
import Slider from 'shared-ui/src/components/Slider';
import Icon from 'shared-ui/src/components/Icon';

import { formatYearsOfCareer, validateUserInfoForm } from '../lib';
import { StateName, ChangedValue } from '../hooks/useUserInfoState';
import { useQueryParams } from 'common/hooks/router/useQueryParams';

import styles from './index.module.scss';
import { FormTranslateNamespaces } from '../constants';
import Image from 'next/image';

export interface UserInfoState {
  selectedJob: Option | null;
  selectedLanguage: Option | null;
  selectedDifficulty: Option | null;
  selectedYearsOfCareer: number;
}

interface UserInfoProps {
  isMobile: boolean;
  jobs: Option[];
  userInfo: UserInfoState;
  onChangeUserInfo: (stateName: StateName, changedValue: ChangedValue) => void;
}

const UserInfo = ({ isMobile, jobs, userInfo, onChangeUserInfo }: UserInfoProps) => {
  const { t } = useTranslation(FormTranslateNamespaces);
  const language = i18n.language;

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

  const pathname = `/${language}/form`;
  const { changeQueryParams } = useQueryParams();
  const isNavigationEnabled = !validateUserInfoForm(userInfo);

  return (
    <div className={styles._CONTAINER_}>
      <div className={styles._USER_CONTENT_}>
        {/* Job InputSelect */}
        <InputSelect
          className={styles._select}
          selectedOption={userInfo.selectedJob}
          onChangeSelectedOption={changed => onChangeUserInfo('selectedJob', changed)}
          options={jobs}
          label={{
            labelText: t('user_info.label.job') ?? '',
            labelWeight: LABEL_WEIGHT,
            labelSize: LABEL_SIZE,
          }}
          placeholder={t('user_info.placeholder.job') ?? ''}
          locale={language}
          height={isMobile ? 'md' : 'lg'}
        />

        {/* Nation InputSelect */}
        <Select
          className={styles._select}
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
          className={styles._select}
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
                locale: language,
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
            onChangeSelectedOption={changed => onChangeUserInfo('selectedYearsOfCareer', changed)}
          />
        </div>

        <div className={styles._button_wrapper}>
          <Button
            size={isMobile ? 'sm' : 'lg'}
            buttonColor="blue"
            disabled={isNavigationEnabled}
            label={{
              labelText: t('button.go_to_form') ?? '',
              labelTailingIcon: <Icon.Write />,
            }}
            onClick={() => {
              if (isNavigationEnabled) return;
              const query = { type: 'resume' };
              changeQueryParams({ pathname, query });
            }}
          />
          <Button
            size={isMobile ? 'sm' : 'lg'}
            buttonColor="red"
            disabled={isNavigationEnabled}
            label={{
              labelText: t('button.go_to_pdf') ?? '',
              labelTailingIcon: (
                <Image src="/images/icons/pdf-icon.svg" width={24} height={24} alt="Submit PDF" />
              ),
            }}
            onClick={() => {
              if (isNavigationEnabled) return;
              const query = { type: 'pdf' };
              changeQueryParams({ pathname, query });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
