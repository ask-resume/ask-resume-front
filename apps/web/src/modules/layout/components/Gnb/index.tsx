import React from 'react';
import styles from '../index.module.scss';
import { ShadowMap } from 'shared-ui/src/config/colorMap';

import LanguageSwitcher from 'modules/i18n/components/LanguageSwitcher';
import HomeRouter from './HomeRouter';

const Gnb = () => {
  const boxShadow = ShadowMap['two'];

  return (
    <header
      className={styles._GNB_}
      style={{
        boxShadow,
      }}
    >
      <div className={styles._wrapper}>
        <HomeRouter />
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Gnb;
