import { useTranslation } from 'next-i18next';
import styles from './PDFViewer.module.scss';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { File } from 'react-pdf/dist/cjs/shared/types';
import { PDFPageTranslateNamespaces } from 'modules/pdf/constants';
import Spinner from 'shared-ui/src/components/Spinner';
import Icon from 'shared-ui/src/components/Icon';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PDFViewerProps {
  file: File;
}

const SCALING_FACTOR = 1.3;

const PDFViewer = ({ file }: PDFViewerProps) => {
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);
  const [scale, setScale] = useState(2);

  const handleClickPageButton = (diff: number) => {
    setPage(currentPage => {
      const nextPage = currentPage + diff;
      if (nextPage > totalPages) return currentPage;
      if (nextPage < 1) return currentPage;

      return nextPage;
    });
  };

  function onDocumentLoadSuccess({ numPages }) {
    setTotalPages(numPages);
  }

  // 다국어 번역
  const { t } = useTranslation(PDFPageTranslateNamespaces);

  return (
    <div className={styles.PDFViewer}>
      <section className={styles.buttonSection}>
        <ul></ul>

        <ul className={styles.pageButton}>
          <li>
            <button type="button" onClick={() => handleClickPageButton(-1)}>
              <Icon.Arrow />
            </button>
          </li>
          <li>
            <span>
              Page {page} of {totalPages}
            </span>
          </li>
          <li>
            <button type="button" onClick={() => handleClickPageButton(1)}>
              <Icon.Arrow flip />
            </button>
          </li>
        </ul>

        <ul className={styles.rightButtonGroup}>
          <li>
            <button type="button" onClick={() => setScale(scale / SCALING_FACTOR)}>
              <Icon.ZoomOut />
            </button>
          </li>
          <li>
            <button type="button" onClick={() => setScale(scale * SCALING_FACTOR)}>
              <Icon.ZoomIn />
            </button>
          </li>
        </ul>
      </section>

      <section className={styles.documentSection}>
        <Document
          className={styles.document}
          file={file}
          loading={<Spinner />}
          error={t('error')}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page
            className={styles.page}
            scale={scale}
            pageNumber={page}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </section>
    </div>
  );
};

export default PDFViewer;
