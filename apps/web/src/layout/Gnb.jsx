import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Text from 'shared-ui/src/components/Text';
import { Logo } from 'common/components/Icon';

import styles from './index.module.scss';
import { ShadowMap } from 'shared-ui/src/config/colorMap';
import i18nextConfig from '../../next-i18next.config';
import LanguageSwitchLink from 'modules/i18n/components/LanguageSwitchLink';

const languageOptions = [
  { name: 'English', value: 'en' },
  { name: '한국어', value: 'ko' },
];

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
        <Link className={styles._logo} href="/">
          <Logo />
          <Text variant="h4">AskResume</Text>
        </Link>
        <div>
          {i18nextConfig.i18n.locales.map(locale => {
            return <LanguageSwitchLink locale={locale} key={locale} />;
          })}
        </div>
      </div>
    </header>
  );
};

export default Gnb;
