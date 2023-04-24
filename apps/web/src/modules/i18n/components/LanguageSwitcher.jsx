import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import i18nextConfig from '../../../../next-i18next.config';
import cn from 'classnames';

import languageDetector from '../lib/languageDetector';
import CloseBoxOnOutside from 'shared-ui/src/components/CloseBoxOnOutside';
import Icon from 'shared-ui/src/components/Icon';
import { HeightOption } from 'shared-ui/src/components/Select';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import styles from './index.module.scss';
import { generateUrl } from 'shared-lib/utils/location';

const height = 'lg';
const languageOptions = {
  en: 'English',
  ko: '한국어',
};

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOptionListOpen = () => setIsOpen(true);
  const handleOptionListClose = () => setIsOpen(false);

  const handleIconClick = event => {
    event.stopPropagation();
    setIsOpen(isOpen => !isOpen);
  };

  const router = useRouter();
  const locale = router.query.locale || '';

  return (
    <CloseBoxOnOutside onClose={handleOptionListClose}>
      <div className={styles._SWITCHER_}>
        <div
          className={cn('_wrapper', height, styles.switcher_wrapper)}
          style={{
            margin: 0,
            padding: 0,
          }}
          onClick={handleOptionListOpen}
        >
          <div className={cn('select')}>
            <span style={{ paddingRight: '1rem' }}>{languageOptions[locale] ?? '...'}</span>
          </div>
          <button className={cn('_icon', { open: isOpen })} onClick={handleIconClick}>
            <Icon.Arrow size={HeightOption.md} color={isOpen ? ColorMap.gray_8 : ColorMap.gray_6} />
          </button>
          {isOpen && (
            <div className={styles._options}>
              {i18nextConfig.i18n.locales.map(locale => {
                return <LanguageSwitchLink locale={locale} key={locale} />;
              })}
            </div>
          )}
        </div>
      </div>
    </CloseBoxOnOutside>
  );
};

export default LanguageSwitcher;

const LanguageSwitchLink = ({ locale, href }) => {
  const router = useRouter();

  const newPathname = generateUrl({
    pathname: router.pathname,
    query: { ...router.query, locale },
  });

  const newHref = href ? `/${locale}${href}` : newPathname;

  return (
    <>
      <Link href={newHref}>
        <button className={styles._option} onClick={() => languageDetector.cache(locale)}>
          {languageOptions[locale]}
        </button>
      </Link>
    </>
  );
};
