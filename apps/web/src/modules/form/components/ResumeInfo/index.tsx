import React from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { TranslateNamespaces } from 'modules/form/constants';
import ResumeTabs from './Tabs';
import ResumeTextAreas from './TextAreas';
import { Option } from 'shared-ui/src/components/Select';
import styles from '../index.module.scss';

interface ResumeInfoProps {
  isMobile: boolean;
  resumeTextArea: string[];
  resumeSelect: Option[];
  onChangeResumeTextArea: (event: React.ChangeEvent<HTMLTextAreaElement>, idx: number) => void;
  onChangeResumeSelect: (newSelectedOption: Option, idx: number) => void;
}

const INIT_SELECT_IDX = 0;
const ResumeInfo = ({
  isMobile,
  resumeTextArea,
  resumeSelect,
  onChangeResumeTextArea,
  onChangeResumeSelect,
}: ResumeInfoProps) => {
  const { t } = useTranslation(TranslateNamespaces);
  const { locale } = useRouter().query as { locale: string };

  const [selectedIdx, setSelectedIdx] = React.useState(INIT_SELECT_IDX);
  const handleSelectedIdxChange = React.useCallback(
    (newSelect: number) => setSelectedIdx(newSelect),
    [],
  );

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
            onChangeResumeTextArea={onChangeResumeTextArea}
            resumeSelect={resumeSelect}
            onChangeResumeSelect={onChangeResumeSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeInfo;
