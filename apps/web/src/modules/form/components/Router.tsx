import { useRouter } from 'next/router';
import { TFunction } from 'next-i18next';

import Text from 'shared-ui/src/components/Text';
import styles from './index.module.scss';
import Link from 'next/link';

interface RouterProps {
  t: TFunction;
}

// Router changing form's type query string
const Router = ({ t }: RouterProps) => {
  const router = useRouter();
  const { type } = router.query as { type: string };

  return (
    <section className={styles._ROUTER_}>
      <Link
        href={{ pathname: '/form', query: { type: 'user-info' } }}
        className={type === 'user-info' ? styles.selected : ''}
      >
        <Text weight="bold" size="medium">
          {t('router.user-info')}
        </Text>
      </Link>

      <div className={styles.divider} />

      <Link
        href={{ pathname: '/form', query: { type: 'resume' } }}
        className={type === 'resume' ? styles.selected : ''}
      >
        <Text weight="bold" size="medium">
          {t('router.resume')}
        </Text>
      </Link>

      <div className={styles.divider} />

      <Link
        href={{ pathname: '/form', query: { type: 'confirmation' } }}
        className={type === 'confirmation' ? styles.selected : ''}
      >
        <Text weight="bold" size="medium">
          {t('router.input-confirmation')}
        </Text>
      </Link>
    </section>
  );
};

export default Router;
