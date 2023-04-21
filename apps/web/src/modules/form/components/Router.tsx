import { TFunction } from 'next-i18next';

import Text from 'shared-ui/src/components/Text';
import styles from './index.module.scss';

interface RouterProps {
  t: TFunction;
}

// Router changing form's type query string
const Router = ({ t }: RouterProps) => {
  return (
    <section className={styles._ROUTER_}>
      <Text weight="bold" size="medium">
        {t('router.user-info')}
      </Text>

      <div className={styles.divider} />

      <Text weight="bold" size="medium">
        {t('router.resume')}
      </Text>

      <div className={styles.divider} />

      <Text weight="bold" size="medium">
        {t('router.input-confirmation')}
      </Text>
    </section>
  );
};

export default Router;
