import { useRouter } from 'next/router';
import { TFunction } from 'next-i18next';

import Text from 'shared-ui/src/components/Text';
import styles from './index.module.scss';

interface RouterProps {
  t: TFunction;
}

const Router = ({ t }: RouterProps) => {
  const router = useRouter();
  const { type, locale } = router.query as { type: string; locale: string };

  const handleQueryChange = (type: string) => {
    const pathname = `/${locale}/form`;
    router.push(
      {
        pathname: pathname,
        query: { type },
      },
      undefined,
      { shallow: true },
    );
  };

  return (
    <section className={styles._ROUTER_}>
      <button
        onClick={() => handleQueryChange('user-info')}
        className={type === 'user-info' ? styles.selected : ''}
      >
        <Text weight="bold" size="medium">
          {t('router.user-info')}
        </Text>
      </button>

      <div className={styles.divider} />

      <button
        onClick={() => handleQueryChange('resume')}
        className={type === 'resume' ? styles.selected : ''}
      >
        <Text weight="bold" size="medium">
          {t('router.resume')}
        </Text>
      </button>

      <div className={styles.divider} />

      <button
        onClick={() => handleQueryChange('confirmation')}
        className={type === 'confirmation' ? styles.selected : ''}
      >
        <Text weight="bold" size="medium">
          {t('router.input-confirmation')}
        </Text>
      </button>
    </section>
  );
};

export default Router;
