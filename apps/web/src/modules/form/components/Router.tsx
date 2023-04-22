import { useRouter } from 'next/router';
import { TFunction } from 'next-i18next';

import Text from 'shared-ui/src/components/Text';
import styles from './index.module.scss';
import { useQueryParams } from 'common/lib/router/useQueryParams';

interface RouterProps {
  t: TFunction;
}

const Router = ({ t }: RouterProps) => {
  const router = useRouter();
  const { type, locale } = router.query as { type: string; locale: string };

  const pathname = `/${locale}/form`;
  const { changeQueryParams } = useQueryParams();

  return (
    <section className={styles._ROUTER_}>
      <button
        onClick={() => {
          const query = { type: 'user-info' };
          changeQueryParams(pathname, query);
        }}
        className={type === 'user-info' ? styles.selected : ''}
      >
        <Text weight="bold" size="medium">
          {t('router.user-info')}
        </Text>
      </button>

      <div className={styles.divider} />

      <button
        onClick={() => {
          const query = { type: 'resume' };
          changeQueryParams(pathname, query);
        }}
        className={type === 'resume' ? styles.selected : ''}
      >
        <Text weight="bold" size="medium">
          {t('router.resume')}
        </Text>
      </button>

      <div className={styles.divider} />

      <button
        onClick={() => {
          const query = { type: 'confirmation' };
          changeQueryParams(pathname, query);
        }}
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
