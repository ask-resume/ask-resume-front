import React from 'react';
import { GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import Text from 'shared-ui/src/components/Text';
import Button from 'shared-ui/src/components/Button';
import InputSelect from 'shared-ui/src/components/InputSelect';
import Select, { Option, isObjectOption } from 'shared-ui/src/components/Select';
import Slider from 'shared-ui/src/components/Slider';

import { getI18nProps, getStaticPaths } from '../../../i18n/getStatic';
import { getJobs } from '@/api/form';
import styles from './index.module.scss';

const LABEL_SIZE = 'large';
const LABEL_WEIGHT = 'medium';

export default function UserInfo() {
  const { t } = useTranslation('user-info');
  const [jobs, setJobs] = React.useState<Option[]>([]); // TODO: React query를 이용해서 data fetch
  const router = useRouter();
  const locale = router.query.locale as string; // TODO: locale을 이용해서 jobs data fetch

  React.useEffect(() => {
    getJobs(locale).then(res => setJobs(res.data));
  }, [locale]);

  const NATION_OPTION: Option[] = [
    { name: t('nation.english'), value: 'en' },
    { name: t('nation.korea'), value: 'ko' },
  ];
  const DIFFICULTY_OPTION: Option[] = [
    { name: t('difficulty.easy'), value: 'easy' },
    { name: t('difficulty.medium'), value: 'medium' },
    { name: t('difficulty.hard'), value: 'hard' },
  ];

  const [selectedJob, setSelectedJob] = React.useState<Option | null>(null);
  const [selectedLanguage, setSelectedLanguage] = React.useState('en');
  const [selectedDifficulty, setSelectedDifficulty] = React.useState('medium');
  const [selectedYearsOfCareer, setSelectedYearsOfCareer] = React.useState(0);

  return (
    <main className={styles._CONTAINER_}>
      {/* Job InputSelect */}
      <InputSelect
        className={styles._SELECT_}
        // selectedOption={selectedJob}
        selectedOption={
          jobs.find(option => isObjectOption(option) && option.id === selectedJob) || null
        }
        // onChangeSelectedOption={setSelectedJob}
        onChangeSelectedOption={option => {
          if (option && isObjectOption(option)) {
            setSelectedJob(option.id);
          }
        }}
        options={jobs}
        labelText={t('label.job') ?? ''}
        placeholder={t('placeholder.job') ?? ''}
        labelWeight={LABEL_WEIGHT}
        labelSize={LABEL_SIZE}
      />

      {/* Nation InputSelect */}
      <Select
        className={styles._SELECT_}
        selectedOption={
          NATION_OPTION.find(
            option => isObjectOption(option) && option.value === selectedLanguage,
          ) || null
        }
        onChangeSelectedOption={option => {
          if (isObjectOption(option) && option.value) {
            setSelectedLanguage(option!.value);
          }
        }}
        options={NATION_OPTION}
        labelText={t('label.nation') ?? ''}
        placeholder={t('placeholder.nation') ?? ''}
        labelWeight={LABEL_WEIGHT}
        labelSize={LABEL_SIZE}
      />

      {/* Interview Difficulty InputSelect */}
      <Select
        className={styles._SELECT_}
        selectedOption={
          DIFFICULTY_OPTION.find(
            option => isObjectOption(option) && option.value === selectedDifficulty,
          ) || null
        }
        onChangeSelectedOption={option => {
          if (isObjectOption(option)) {
            setSelectedDifficulty(option.value!);
          }
        }}
        options={DIFFICULTY_OPTION}
        labelText={t('label.difficulty') ?? ''}
        placeholder={t('placeholder.difficulty') ?? ''}
        labelWeight={LABEL_WEIGHT}
        labelSize={LABEL_SIZE}
      />

      <div>
        <div>Years of career</div>
        <p>{selectedYearsOfCareer}</p>
        <Slider
          size="medium"
          min={0}
          max={10}
          step={1}
          inputValue={selectedYearsOfCareer}
          onChangeInputValue={setSelectedYearsOfCareer}
        />
      </div>
      <Link href="/form/user-resume">Go to user resume page</Link>
    </main>
  );
}

const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {
      ...(await getI18nProps(ctx, ['user-info'])),
    },
  };
};

export { getStaticProps, getStaticPaths };
