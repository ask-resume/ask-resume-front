import React from 'react';
import { useTranslation } from 'next-i18next';
import { FormTranslateNamespaces } from 'modules/form/constants';

import { Option } from 'shared-ui/src/components/Select';
import Button from 'shared-ui/src/components/Button';
import Icon from 'shared-ui/src/components/Icon';
import ResumeTabs from './Tabs';
import ResumeTextAreas from './TextAreas';
import { useFormRouter } from 'modules/form/hooks/useFormRouter';
import styles from '../index.module.scss';
import { validateResumeInfoForm } from 'modules/form/lib';

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
  const { t } = useTranslation(FormTranslateNamespaces);
  const { changeFormRouter } = useFormRouter();

  const [selectedIdx, setSelectedIdx] = React.useState(INIT_SELECT_IDX);
  const handleSelectedIdxChange = React.useCallback(
    (newSelect: number) => setSelectedIdx(newSelect),
    [],
  );

  return (
    <div className={styles._CONTAINER_}>
      <div className={styles._RESUME_CONTENT_}>
        <ResumeTabs
          t={t}
          isMobile={isMobile}
          select={selectedIdx}
          onChangeSelect={handleSelectedIdxChange}
        />

        <ResumeTextAreas
          select={selectedIdx}
          resumeTextArea={resumeTextArea}
          onChangeResumeTextArea={onChangeResumeTextArea}
          resumeSelect={resumeSelect}
          onChangeResumeSelect={onChangeResumeSelect}
        />

        <div className={styles._button_wrapper}>
          <Button
            onClick={() => changeFormRouter('user-info')}
            size={isMobile ? 'sm' : 'lg'}
            buttonColor="blue"
            label={{
              labelText: t('button.prev-page') ?? '',
              labelLeadingIcon: <Icon.Arrow />,
            }}
          />
          <Button
            size={isMobile ? 'sm' : 'lg'}
            buttonColor="blue"
            onClick={() => changeFormRouter('confirmation')}
            disabled={!validateResumeInfoForm(resumeTextArea)}
            label={{
              labelText: t('button.next-page') ?? '',
              labelTailingIcon: <Icon.Arrow flip />,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeInfo;
