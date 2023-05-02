import React from 'react';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';

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
import errorPageStyles from '../../error/components/index.module.scss';
import { TranslateNamespaces } from '../constants';
import { useJobs } from '../api/job';
import { useRouter } from 'next/router';

export interface UserInfoState {
  selectedJob: Option | null;
  selectedLanguage: Option | null;
  selectedDifficulty: Option | null;
  selectedYearsOfCareer: number;
}

interface UserInfoProps {
  isMobile: boolean;
  userInfo: UserInfoState;
  onChangeUserInfo: (stateName: StateName, changedValue: ChangedValue) => void;
}

const UserInfo = ({ isMobile, userInfo, onChangeUserInfo }: UserInfoProps) => {
  const { t } = useTranslation(TranslateNamespaces);
  const { locale } = useRouter().query as { locale: string };

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

  const { data: jobs, isLoading: isJobsLoading, isError, refetch } = useJobs(locale);
  const isNavigationEnabled = !validateUserInfoForm(userInfo);
  const isDataLoaded = !isJobsLoading && !isError;

  return (
    <div className={styles._CONTAINER_}>
      {isJobsLoading && <LoadingSpinner />}
      {isError && <ErrorFallback onRefetch={refetch} />}
      {isDataLoaded && (
        <>
          <div className={styles._USER_CONTENT_}>
            {/* Job InputSelect */}
            <InputSelect
              className={styles._select}
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
        </>
      )}

      <div
        className={styles._button_wrapper}
        onClick={() => {
          if (isNavigationEnabled) return;
          const query = { type: 'resume' };
          changeQueryParams({ pathname, query });
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
    </div>
  );
};

export default UserInfo;

const LoadingSpinner = () => (
  <div className={styles.loading}>
    <Spinner size="xl" />
  </div>
);

interface ErrorFallbackProps {
  onRefetch: () => void;
}

const ErrorFallback = ({ onRefetch }: ErrorFallbackProps) => {
  const { t } = useTranslation(TranslateNamespaces);

  return (
    <div className={cn(errorPageStyles._ERROR_PAGE_, styles.error_fallback)}>
      <div className={errorPageStyles._wrapper}>
        <div className={errorPageStyles.title}>
          <Text variant="h1" size="xxxx_large" weight="bold">
            {t('user_info.error_fallback.title')}
          </Text>
          <Text variant="h1" size="x_large" weight="bold">
            {t('user_info.error_fallback.description')}
          </Text>
        </div>

        <Divider />

        <div className={errorPageStyles.explain}>
          <Text align="center" textColor={ColorMap.gray_6} size="small" lineHeight="wide">
            {t('user_info.error_fallback.content')}
          </Text>
        </div>
      </div>

      <Button
        label={{
          labelText: t('user_info.error_fallback.button') ?? '',
        }}
        rounded
        variant="ghost"
        buttonColor="blue"
        onClick={onRefetch}
      />
    </div>
  );
};
