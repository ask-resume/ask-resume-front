import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import Text from 'shared-ui/src/components/Text';
import styles from './index.module.scss';
import { TranslateNamespaces } from '../constants';
import { useFormRouter } from '../hooks/useFormRouter';

interface RouterProps {
  isMobile: boolean;
}

const Router = ({ isMobile }: RouterProps) => {
  const { t } = useTranslation(TranslateNamespaces);
  const LABEL_SIZE = isMobile ? 'medium' : 'large';

  const { type, changeFormRouter } = useFormRouter();

  return (
    <section className={styles._ROUTER_}>
      <button
        onClick={() => changeFormRouter('user-info')}
        className={type === 'user-info' ? styles.selected : ''}
      >
        <Text weight="bold" size={LABEL_SIZE}>
          {t('user_info.router.user-info')}
        </Text>
      </button>

      <div className={styles.divider} />

      <button
        onClick={() => changeFormRouter('resume')}
        className={type === 'resume' ? styles.selected : ''}
      >
        <Text weight="bold" size={LABEL_SIZE}>
          {t('user_info.router.resume')}
        </Text>
      </button>

      <div className={styles.divider} />

      <button
        onClick={() => changeFormRouter('confirmation')}
        className={type === 'confirmation' ? styles.selected : ''}
      >
        <Text weight="bold" size={LABEL_SIZE}>
          {t('user_info.router.input-confirmation')}
        </Text>
      </button>
    </section>
  );
};

export default Router;
