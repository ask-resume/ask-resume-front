import { TFunction } from 'next-i18next';
import React from 'react';
import { uid } from 'react-uid';

import Text from 'shared-ui/src/components/Text';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import Divider from 'shared-ui/src/components/Divider';
import Button from 'shared-ui/src/components/Button';
import InputSelect from 'shared-ui/src/components/InputSelect';
import Select, { Option, isObjectOption } from 'shared-ui/src/components/Select';
import Slider from 'shared-ui/src/components/Slider';
import Icon from 'shared-ui/src/components/Icon';
import TextArea from 'shared-ui/src/components/TextArea';
import Tabs from 'shared-ui/src/components/Tabs';
import TabItem from 'shared-ui/src/components/Tabs/TabItem';
import Tooltip from 'shared-ui/src/components/Tooltip';

import { useJobs } from '../api/job';
import { formatYearsOfCareer, validateUserInfoForm } from '../lib';
import styles from './index.module.scss';
import { StateName, ChangedValue } from '../hooks/useUserInfoState';
import { useQueryParams } from 'common/hooks/router/useQueryParams';
import { UserInfoState } from './UserInfo';
import { useResumeInfoState } from '../hooks/useResumeInfoState';

interface ResumeInfoProps {
  t: TFunction;
  isMobile: boolean;
  locale: string;
}

const TAB_CNT = 4;
const INIT_SELECT_IDX = 0;

const ResumeInfo = ({ t, isMobile, locale }: ResumeInfoProps) => {
  const [select, setSelect] = React.useState(INIT_SELECT_IDX);
  const handleSelectChange = React.useCallback((newSelect: number) => setSelect(newSelect), []);

  const { resumeInfoState, resumeInfoSetter } = useResumeInfoState({ t, locale, tabCnt: TAB_CNT });
  console.log(resumeInfoState);

  return (
    <div className={styles._CONTAINER_}>
      <div className={styles.resume_content}>
        <ResumeTabs t={t} isMobile={isMobile} select={select} onChangeSelect={handleSelectChange} />

        <div>
          <ResumeTextAreas
            select={select}
            resumeInfo={resumeInfoState}
            onChangeResumeInfo={resumeInfoSetter}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeInfo;

export interface ResumeTabsProps {
  t: TFunction;
  isMobile: boolean;
  select: number;
  onChangeSelect: (newSelect: number) => void;
}

const ResumeTabs = ({ t, isMobile, select, onChangeSelect }: ResumeTabsProps) => {
  const TAB_SIZE = isMobile ? 'sm' : 'md';

  return (
    <Tabs size={TAB_SIZE}>
      {[...Array(TAB_CNT)].map((_, idx) => (
        <TabItem
          key={idx}
          size={TAB_SIZE}
          label={t('resume_info.tab', { idx: idx + 1 }) ?? ''}
          onClick={() => onChangeSelect(idx)}
          selected={select === idx}
        />
      ))}
    </Tabs>
  );
};

export type ResumeInfoName =
  | 'acc'
  | 'career'
  | 'education'
  | 'introduction'
  | 'outsideActivities'
  | 'project'
  | 'technical';
interface ResumeTextAreaProps {
  select: number;
  resumeInfo: { name: ResumeInfoName; value: string }[];
  onChangeResumeInfo: (event: React.ChangeEvent<HTMLTextAreaElement>, idx: number) => void;
}

const ResumeTextAreas = ({ select, resumeInfo, onChangeResumeInfo }: ResumeTextAreaProps) => {
  const handleChangeResumeInfo = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>, idx: number) => {
      onChangeResumeInfo(event, idx);
    },
    [onChangeResumeInfo],
  );

  return (
    <>
      {resumeInfo.map(
        (el, idx) =>
          select === idx && (
            <TextArea
              key={idx}
              text={el?.value ?? ''}
              onChangeText={event => handleChangeResumeInfo(event, idx)}
            />
          ),
      )}
    </>
  );
};
