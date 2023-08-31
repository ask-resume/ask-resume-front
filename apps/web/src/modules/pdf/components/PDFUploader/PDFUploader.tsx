import styles from './PDFUploader.module.scss';

import React, { useState } from 'react';
import DropZone from 'shared-ui/src/components/DropZone';
import Button from 'shared-ui/src/components/Button';
import { useTranslation } from 'next-i18next';
import Icon from 'shared-ui/src/components/Icon';
import { useIsMobile, useMediaSize } from 'shared-lib/hooks/media-query';
import { useFormRouter } from 'modules/form/hooks/useFormRouter';
import { FormTranslateNamespaces } from 'modules/form/constants';
import dynamic from 'next/dynamic';
import { toast } from 'react-hot-toast';

const PDFViewer = dynamic(() => import('../PDFViewer'), {
  ssr: false,
});

interface PDFUploaderProps {
  onSubmit: (pdfFile: File) => void;
}

const FILE_SIZE = 3;
const FILE_SIZE_LABEL = `${FILE_SIZE}MB`;
const FILE_UNIT_SIZE = 1024 * 1024;
const CONTENT = {
  MIN_LENGTH: 300,
  MAX_LENGTH: 6000,
};

const PDFUploader = ({ onSubmit }: PDFUploaderProps) => {
  // 다국어 번역
  const { t } = useTranslation(FormTranslateNamespaces);

  const { isTablet } = useMediaSize();
  const { changeFormRouter } = useFormRouter();

  const [pdfFile, setPDFFile] = useState(null);

  // 함수 :
  const isFileUploadable = (files: FileList) => {
    if (!files || !files[0]) return false;

    const maxSize = FILE_SIZE * FILE_UNIT_SIZE;
    const fileSize = files[0].size;

    if (fileSize > maxSize) {
      const errorMessage = t('pdf:restriction.file_size', {
        fileSize: FILE_SIZE_LABEL,
      });
      toast.error(errorMessage);
      return false;
    }

    return true;
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    const { files } = event.target;

    if (!isFileUploadable(files)) return;

    setPDFFile(files[0]);
  };

  // 이벤트 핸들러 : 드랍다운
  const handleDrop: React.DragEventHandler = event => {
    const { files } = event.dataTransfer;

    if (!isFileUploadable(files)) return;

    setPDFFile(files[0]);
  };

  // 이벤트 핸들러 : PDF 업로드 폼 제출
  const handleSubmit = (event: React.FormEvent, pdfFile: File) => {
    event.preventDefault();
    onSubmit(pdfFile);
  };

  // 이벤트 핸들러 : PDF 제거
  const handleClickRemovePDF = () => {
    setPDFFile(null);
  };

  return (
    <article className={styles.PDFUploader}>
      <form>
        <div className={styles.content}>
          <p className={styles.hintText}>
            <Icon.Wanning />
            {t('pdf:restriction.hint_text', {
              fileSize: FILE_SIZE_LABEL,
              content: {
                minLength: CONTENT.MIN_LENGTH,
                maxLength: CONTENT.MAX_LENGTH,
              },
            })}
          </p>
          {pdfFile ? (
            <PDFViewer file={pdfFile} />
          ) : (
            <DropZone
              accept=".pdf"
              hintText={t('pdf:drag_and_drop.hint_text')}
              onChange={handleChange}
              onDrop={handleDrop}
            />
          )}
        </div>
        <footer>
          <section>
            <Button
              size={isTablet ? 'sm' : 'lg'}
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
                size={isTablet ? 'sm' : 'lg'}
                buttonColor="red"
                onClick={handleClickRemovePDF}
                label={{
                  labelText: t('pdf:button.remove_pdf') ?? '',
                  labelTailingIcon: (
                    <Icon.Trash color="currentColor" size={isTablet ? 16 : undefined} />
                  ),
                }}
              />
            )}
            <Button
              type="submit"
              size={isTablet ? 'sm' : 'lg'}
              disabled={!pdfFile}
              buttonColor="blue"
              label={{
                labelText: t('common:button.submit') ?? '',
                labelTailingIcon: <Icon.AirPlane size={isTablet ? 12 : undefined} />,
              }}
              onClick={event => handleSubmit(event, pdfFile)}
            />
          </section>
        </footer>
      </form>
    </article>
  );
};

export default PDFUploader;
