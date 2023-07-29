import React from 'react';
import { uid } from 'react-uid';
import { useTranslation } from 'next-i18next';

import Text from 'shared-ui/src/components/Text';
import Select, { Option } from 'shared-ui/src/components/Select';
import Textarea from 'shared-ui/src/components/Textarea';

import { FormTranslateNamespaces } from 'modules/form/constants';
import { getResumeSelectObj } from 'modules/form/lib';
import { TEXTAREA_REGEX as regex } from 'modules/form/constants';
import styles from '../index.module.scss';
import { ColorMap } from 'shared-ui/src/config/colorMap';

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
  const { t } = useTranslation(FormTranslateNamespaces);
  const resumeSelectObj = React.useMemo(() => getResumeSelectObj(t), [t]);
  const handleChangeResumeTextArea = React.useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>, idx: number) => {
      onChangeResumeTextArea(event, idx);
    },
    [onChangeResumeTextArea],
  );

  const handleSelectChange = React.useCallback(
    (newSelectedOption: Option, idx: number) => {
      onChangeResumeSelect(newSelectedOption, idx);
    },
    [onChangeResumeSelect],
  );

  return (
    <>
      <div className={styles._resume_textarea}>
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

        <Text className={styles.text} size="xx_small" textColor={ColorMap.gray_6}>
          {t('resume_info.textarea.explain')}
        </Text>

        {resumeTextArea.map(
          (textareaEl, idx) =>
            select === idx && (
              <Textarea
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
