import styles from './PDFUploader.module.scss';

import { useState } from 'react';
import PDFViewer from '../PDFViewer';
import DropZone from '../DropZone';
import Button from 'shared-ui/src/components/Button';
import { useTranslation } from 'next-i18next';
import { PDFPageTranslateNamespaces } from 'modules/pdf/constants';
import Image from 'next/image';
import Icon from 'shared-ui/src/components/Icon';

interface PDFUploaderProps {
  hintText: string;
  footer?: React.ReactNode;
}

const PDFUploader = ({ hintText, footer }: PDFUploaderProps) => {
  const [pdfFile, setPdfFile] = useState(null);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setPdfFile(event.target.files[0]);
  };

  const handleClickRemovePDF = () => {
    setPdfFile(null);
  };

  // 다국어 번역
  const { t } = useTranslation(PDFPageTranslateNamespaces);

  return (
    <article className={styles.PDFUploader}>
      <div className={styles.content}>
        {pdfFile ? (
          <PDFViewer file={pdfFile} />
        ) : (
          <DropZone accept=".pdf" hintText={hintText} onChange={handleChange} />
        )}
      </div>
      {footer && (
        <footer>
          {pdfFile && (
            <Button
              size="lg"
              buttonColor="red"
              onClick={handleClickRemovePDF}
              label={{
                labelText: t('button.remove_pdf') ?? '',
                labelTailingIcon: <Icon.Trash color="currentColor" />,
              }}
            />
          )}
          {footer}
        </footer>
      )}
    </article>
  );
};

export default PDFUploader;
