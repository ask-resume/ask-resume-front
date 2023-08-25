import styles from './PDFUploader.module.scss';

import React, { useState } from 'react';
import PDFViewer from '../PDFViewer';
import DropZone from '../DropZone';
import Button from 'shared-ui/src/components/Button';
import { useTranslation } from 'next-i18next';
import Icon from 'shared-ui/src/components/Icon';
import { useIsMobile } from 'shared-lib/hooks/media-query';
import { useFormRouter } from 'modules/form/hooks/useFormRouter';
import { FormTranslateNamespaces } from 'modules/form/constants';

interface PDFUploaderProps {
  onSubmit: (pdfFile: File) => void;
}

const PDFUploader = ({ onSubmit }: PDFUploaderProps) => {
  const isMobile = useIsMobile();
  const { changeFormRouter } = useFormRouter();

  const [pdfFile, setPdfFile] = useState(null);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setPdfFile(event.target.files[0]);
  };

  // 이벤트 핸들러 : PDF 업로드 폼 제출
  const handleSubmit = (event: React.FormEvent, pdfFile: File) => {
    event.preventDefault();
    onSubmit(pdfFile);
  };

  // 이벤트 핸들러 : PDF 제거
  const handleClickRemovePDF = () => {
    setPdfFile(null);
  };

  // 다국어 번역
  const { t } = useTranslation(FormTranslateNamespaces);

  return (
    <article className={styles.PDFUploader}>
      <form onSubmit={event => handleSubmit(event, pdfFile)}>
        <div className={styles.content}>
          {pdfFile ? (
            <PDFViewer file={pdfFile} />
          ) : (
            <DropZone
              accept=".pdf"
              hintText={t('pdf:drag_and_drop.hint_text')}
              onChange={handleChange}
            />
          )}
        </div>
        <footer>
          <section>
            <Button
              size={isMobile ? 'sm' : 'lg'}
              buttonColor="blue"
              label={{
                labelText: t('button.prev-page') ?? '',
                labelLeadingIcon: <Icon.Arrow />,
              }}
              onClick={() => changeFormRouter('user-info')}
            />
          </section>
          <section>
            {pdfFile && (
              <Button
                size={isMobile ? 'sm' : 'lg'}
                buttonColor="red"
                onClick={handleClickRemovePDF}
                label={{
                  labelText: t('pdf:button.remove_pdf') ?? '',
                  labelTailingIcon: <Icon.Trash color="currentColor" />,
                }}
              />
            )}
            <Button
              type="submit"
              size={isMobile ? 'sm' : 'lg'}
              disabled={!pdfFile}
              buttonColor="blue"
              label={{
                labelText: t('common:button.submit') ?? '',
                labelTailingIcon: <Icon.AirPlane />,
              }}
            />
          </section>
        </footer>
      </form>
    </article>
  );
};

export default PDFUploader;
