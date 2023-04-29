import React from 'react';
import { uid } from 'react-uid';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import Select, { Option } from 'shared-ui/src/components/Select';
import TextArea from 'shared-ui/src/components/TextArea';
import { TranslateNamespaces } from 'modules/form/constants';
import { getResumeSelectObj } from 'modules/form/lib';
import styles from '../index.module.scss';
import { TEXTAREA_REGEX as regex } from 'modules/form/constants';

interface ResumeTextAreaProps {
  select: number;
  resumeTextArea: string[];
  onChangeResumeTextArea: (event: React.ChangeEvent<HTMLTextAreaElement>, idx: number) => void;
  resumeSelect: Option[];
  onChangeResumeSelect: (newSelectedOption: Option, idx: number) => void;
}

const ResumeTextAreas = ({
  select,
  resumeTextArea,
  onChangeResumeTextArea,
  resumeSelect,
  onChangeResumeSelect,
}: ResumeTextAreaProps) => {
  const { t } = useTranslation(TranslateNamespaces);
  const { locale } = useRouter().query as { locale: string };

  const resumeSelectObj = React.useMemo(() => getResumeSelectObj(t), [t]);
  const handleChangeResumeTextArea = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>, idx: number) => {
      onChangeResumeTextArea(event, idx);
    },
    [],
  );

  const handleSelectChange = React.useCallback((newSelectedOption: Option, idx: number) => {
    onChangeResumeSelect(newSelectedOption, idx);
  }, []);

  return (
    <>
      <div className={styles._RESUME_TEXTAREA_}>
        {resumeSelect.map(
          (selectEl, idx) =>
            select === idx && (
              <Select
                key={uid(idx)}
                className={styles.select}
                selectedOption={selectEl}
                options={resumeSelectObj}
                onChangeSelectedOption={newSelectedOption =>
                  handleSelectChange(newSelectedOption, idx)
                }
                border={false}
                height="md"
              />
            ),
        )}

        {resumeTextArea.map(
          (textareaEl, idx) =>
            select === idx && (
              <TextArea
                key={uid(idx)}
                className={styles.textarea}
                text={textareaEl ?? ''}
                placeholder={t('resume_info.placeholder.textarea') ?? ''}
                onChangeText={event => handleChangeResumeTextArea(event, idx)}
                error={{
                  message: t('resume_info.textarea.error') ?? '',
                  regex,
                }}
              />
            ),
        )}
      </div>
    </>
  );
};

export default ResumeTextAreas;
