import React from 'react';
import { useTranslation } from 'next-i18next';

import styles from '../index.module.scss';
import { useResumeTextAreaState, useResumeSelectState } from '../../hooks/useResumeInfoState';
import ResumeTabs from './Tabs';
import ResumeTextAreas from './TextAreas';
import { TranslateNamespaces } from 'modules/form/constants';

interface ResumeInfoProps {
  isMobile: boolean;
  locale: string;
}

const TAB_CNT = 4;
const INIT_SELECT_IDX = 0;

const ResumeInfo = ({ isMobile, locale }: ResumeInfoProps) => {
  const { t } = useTranslation(TranslateNamespaces);

  const [selectedIdx, setSelectedIdx] = React.useState(INIT_SELECT_IDX);
  const handleSelectedIdxChange = React.useCallback(
    (newSelect: number) => setSelectedIdx(newSelect),
    [],
  );

  const { resumeTextArea, resumeTextAreaSetter } = useResumeTextAreaState({
    tabCnt: TAB_CNT,
    locale,
  });
  const { resumeSelect, resumeSelectSetter } = useResumeSelectState({
    tabCnt: TAB_CNT,
    locale,
  });

  return (
    <div className={styles._CONTAINER_}>
      <div className={styles.resume_content}>
        <ResumeTabs
          t={t}
          isMobile={isMobile}
          select={selectedIdx}
          onChangeSelect={handleSelectedIdxChange}
        />

        <div>
          <ResumeTextAreas
            select={selectedIdx}
            resumeTextArea={resumeTextArea}
            onChangeResumeTextArea={resumeTextAreaSetter}
            resumeSelect={resumeSelect}
            onChangeResumeSelect={resumeSelectSetter}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeInfo;
