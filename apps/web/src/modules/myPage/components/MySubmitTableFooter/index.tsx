import Button from 'shared-ui/src/components/Button';
import { useTranslation } from 'next-i18next';
import { MyPageTranslateNamespaces } from 'modules/myPage/constants';
import styles from './index.module.scss';
import { useRouter } from 'next/router';

const MySubmitTableFooter = () => {
  const { t } = useTranslation(MyPageTranslateNamespaces);

  const router = useRouter();
  const onClickReload = () => {
    router.reload();
  };

  return (
    <div className={styles._MY_SUBMIT_TABLE_FOOTER_}>
      <Button onClick={onClickReload}>{t('my_submit_table.footer.refresh_button')}</Button>
    </div>
  );
};

export default MySubmitTableFooter;
