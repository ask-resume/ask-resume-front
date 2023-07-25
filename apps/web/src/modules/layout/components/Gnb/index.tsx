import React from 'react';
import styles from '../index.module.scss';
import { ShadowMap } from 'shared-ui/src/config/colorMap';

import LanguageSwitcher from 'modules/i18n/components/LanguageSwitcher';
import HomeRouter from './HomeRouter';
import UserMenu from './UserMenu';
import { useTranslation } from 'next-i18next';

const Gnb = React.memo(() => {
  const boxShadow = ShadowMap['two'];
  const { t } = useTranslation(['common']);

  return (
    <header
      className={styles._GNB_}
      style={{
        boxShadow,
      }}
    >
      <div className={styles._wrapper}>
        <HomeRouter />
        <div className={styles._menu}>
          <LanguageSwitcher />
          <UserMenu loginLabel={t('user_menu.login')} />
        </div>
      </div>
    </header>
  );
});

export default Gnb;
