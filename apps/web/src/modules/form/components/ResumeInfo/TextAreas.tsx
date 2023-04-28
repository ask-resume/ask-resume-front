import React from 'react';
import { uid } from 'react-uid';
import { useTranslation } from 'next-i18next';

import Select, { Option } from 'shared-ui/src/components/Select';
import TextArea from 'shared-ui/src/components/TextArea';
import { TranslateNamespaces } from 'modules/form/constants';
import { getResumeSelectObj } from 'modules/form/lib/getResumeSelectObj';

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
  const resumeSelectObj = getResumeSelectObj(t);

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
      <div>
        {resumeSelect.map(
          (selectEl, idx) =>
            select === idx && (
              <Select
                key={uid(idx)}
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
                text={textareaEl ?? ''}
                onChangeText={event => handleChangeResumeTextArea(event, idx)}
              />
            ),
        )}
      </div>
    </>
  );
};

export default ResumeTextAreas;
