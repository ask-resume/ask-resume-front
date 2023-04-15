import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Select, { isObjectOption } from 'shared-ui/src/components/Select';
import Text from 'shared-ui/src/components/Text';

import { Option } from 'shared-ui/src/components/Select';
import { Logo } from '@/Icon/Logo';

import styles from './index.module.scss';
import { ShadowMap } from 'shared-ui/src/config/colorMap';

const languageOptions: Option[] = [
  { name: 'English', value: 'en' },
  { name: '한국어', value: 'ko' },
];

const Gnb = () => {
  const router = useRouter();
  const { locale = 'en' } = router;

  const [selectedOption, setSelectedOption] = React.useState<Option | null>(
    languageOptions.find(opt => isObjectOption(opt) && opt.value === locale) || languageOptions[0],
  );

  const handleLanguageChange = (selectedOption: Option) => {
    setSelectedOption(selectedOption);

    if (isObjectOption(selectedOption)) {
      router.push(router.pathname, router.asPath, {
        locale: selectedOption.value,
      });
    }
  };

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
          <Text variant="h4">Ask Resume</Text>
        </Link>
        <Select
          className={styles._select_width}
          border={false}
          selectedOption={selectedOption}
          onChangeSelectedOption={handleLanguageChange}
          options={languageOptions}
        />
      </div>
    </header>
  );
};

export default Gnb;
