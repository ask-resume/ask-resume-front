import Head from 'next/head';
import React from 'react';
import { GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import Text from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import Divider from 'shared-ui/src/components/Divider';
import Button from 'shared-ui/src/components/Button';
import InputSelect, { useInputSelectedState } from 'shared-ui/src/components/InputSelect';
import Select, { Option, useSelectState } from 'shared-ui/src/components/Select';
import Slider, { useSliderState } from 'shared-ui/src/components/Slider';
import Icon from 'shared-ui/src/components/Icon';

import { getI18nProps, getStaticPaths } from '../../../i18n/getStatic';
import { useJobs } from '@/api/form';
import { formatYearsOfCareer, validateUserInfoForm } from '@/service/form/user-info';
import styles from './index.module.scss';
const LABEL_SIZE = 'large';
const LABEL_WEIGHT = 'medium';

export default function UserInfo() {
  const { t } = useTranslation(['user-info', 'common']);
  const router = useRouter();
  const locale = router.query.locale as string;

  const NATION_OPTION: Option[] = [
    { name: t('nation.english'), value: 'en' },
    { name: t('nation.korea'), value: 'ko' },
  ];
  const DIFFICULTY_OPTION: Option[] = [
    { name: t('difficulty.easy'), value: 'easy' },
    { name: t('difficulty.medium'), value: 'medium' },
    { name: t('difficulty.hard'), value: 'hard' },
  ];

  const [selectedJob, onChangeSelectedJob] = useInputSelectedState(null);
  const [selectedLanguage, onChangeSelectedLanguage] = useSelectState({
    initialSelected: 'en',
    options: NATION_OPTION,
  });
  const [selectedDifficulty, onChangeSelectedDifficulty] = useSelectState({
    initialSelected: 'medium',
    options: DIFFICULTY_OPTION,
  });
  const [selectedYearsOfCareer, setSelectedYearsOfCareer] = useSliderState(0);

  //Initialize the form when the user changes language.
  React.useEffect(() => {
    onChangeSelectedJob(null);
    onChangeSelectedLanguage('en');
    onChangeSelectedDifficulty('medium');
    setSelectedYearsOfCareer(0);
  }, [locale]);

  // TODO: isLoading일 때 Option List에 loading바를 렌더링하게끔 수정
  const { data: jobs, isLoading } = useJobs(locale);
  if (isLoading) return <div>Loading</div>;

  return (
    <>
      <Head>
        <title>{t('common:form_user_info_title')}</title>
        <meta name="description" content={t('common:description') ?? ''} />
        <meta name="keyword" content={t('common:keyword') ?? ''} />
      </Head>

      <main className={styles._CONTAINER_}>
        {/* Job InputSelect */}
        <InputSelect
          className={styles._SELECT_}
          selectedOption={selectedJob}
          onChangeSelectedOption={onChangeSelectedJob}
          options={jobs!}
          labelText={t('label.job') ?? ''}
          placeholder={t('placeholder.job') ?? ''}
          labelWeight={LABEL_WEIGHT}
          labelSize={LABEL_SIZE}
        />

        {/* Nation InputSelect */}
        <Select
          className={styles._SELECT_}
          selectedOption={selectedLanguage}
          onChangeSelectedOption={onChangeSelectedLanguage}
          options={NATION_OPTION}
          labelText={t('label.nation') ?? ''}
          placeholder={t('placeholder.nation') ?? ''}
          labelWeight={LABEL_WEIGHT}
          labelSize={LABEL_SIZE}
        />

        {/* Interview Difficulty InputSelect */}
        <Select
          className={styles._SELECT_}
          selectedOption={selectedDifficulty}
          onChangeSelectedOption={onChangeSelectedDifficulty}
          options={DIFFICULTY_OPTION}
          labelText={t('label.difficulty') ?? ''}
          placeholder={t('placeholder.difficulty') ?? ''}
          labelWeight={LABEL_WEIGHT}
          labelSize={LABEL_SIZE}
        />

        {/* Years of Experience Slider */}
        <div>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Text className="_label" size={LABEL_SIZE} weight={LABEL_WEIGHT}>
              {t('label.years-of-experience')}
            </Text>
            <Divider variant="vertical" color={ColorMap.gray_5} width={2} />
            <Text variant="block" size="small" weight="medium" textColor={ColorMap.blue_5}>
              {formatYearsOfCareer({ selectedYearsOfCareer, locale, t })}
            </Text>
          </div>

          <Slider
            size="medium"
            min={0}
            max={10}
            step={1}
            inputValue={selectedYearsOfCareer}
            onChangeInputValue={setSelectedYearsOfCareer}
          />
        </div>

        {/* Routing Button of User Resume  */}
        <Link href="/form/user-resume">
          <Button
            size="lg"
            buttonColor="blue"
            fullWidth
            disabled={
              !validateUserInfoForm({
                selectedJob,
                selectedLanguage,
                selectedDifficulty,
                selectedYearsOfCareer,
              })
            }
            label={{
              labelText: t('label.go-to-resume-page') ?? '',
              labelTailingIcon: <Icon.Arrow flip />,
            }}
          />
        </Link>
      </main>
    </>
  );
}

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {
      ...(await getI18nProps(ctx, ['user-info', 'common'])),
    },
  };
};

export { getStaticProps, getStaticPaths };
