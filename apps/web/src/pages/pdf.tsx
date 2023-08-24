import { useTranslation } from 'next-i18next';
import styles from '../page.module.scss';

import PDFUploader from 'modules/pdf/components/PDFUploader';
import { PDFPageTranslateNamespaces } from 'modules/pdf/constants';
import { getI18nProps } from 'modules/i18n/lib/getStatic';
import { GetStaticPropsContext } from 'next';
import { useIsMobile } from 'shared-lib/hooks/media-query';
import Button from 'shared-ui/src/components/Button';
import Icon from 'shared-ui/src/components/Icon';

export default function PDFPage() {
  const { t } = useTranslation(PDFPageTranslateNamespaces);

  const isMobile = useIsMobile();

  const handleSubmit = () => {
    alert('hi');
  };

  return (
    <main className={styles._PDF_}>
      <PDFUploader
        hintText={t('drag_and_drop.hint_text')}
        footer={
          <>
            <Button
              size={isMobile ? 'sm' : 'lg'}
              buttonColor="blue"
              label={{
                labelText: t('common:button.submit') ?? '',
                labelTailingIcon: <Icon.AirPlane />,
              }}
              onClick={handleSubmit}
            />
          </>
        }
      />
    </main>
  );
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return {
    props: {
      ...(await getI18nProps(ctx, PDFPageTranslateNamespaces)),
    },
  };
}
