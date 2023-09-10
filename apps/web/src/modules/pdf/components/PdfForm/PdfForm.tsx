import styles from './PdfForm.module.scss';

import PDFUploader from 'modules/pdf/components/PDFUploader';
import { UserInfoState } from 'modules/form/components/UserInfo';
import { useSubmitPDFResume } from 'modules/pdf/api/submitPdf';
import { getUserInfoForm } from 'modules/pdf/hooks';
import { useQueryParams } from 'common/hooks/router/useQueryParams';
import { useTranslation } from 'next-i18next';
import { FormTranslateNamespaces } from 'modules/form/constants';

interface PDFFormProps {
  isMobile: boolean;
  userInfo: UserInfoState;
}

export function PDFForm({ userInfo }: PDFFormProps) {
  const { t } = useTranslation(FormTranslateNamespaces);
  const { mutate: submitPdfResume } = useSubmitPDFResume();

  const { changeQueryParams } = useQueryParams();
  const onSubmit = (pdfFile: File) => {
    const userInfoForm = getUserInfoForm({ userInfo });
    const pathname = `/result`;

    submitPdfResume(
      { form: userInfoForm, pdfFile },
      {
        onSuccess: () => {
          changeQueryParams({
            pathname,
          });
        },
        onError: (error: any) => {
          alert(error.response?.data.errorMessage);
        },
      },
    );
  };

  return (
    <main className={styles._PDF_}>
      <PDFUploader onSubmit={onSubmit} />
    </main>
  );
}
