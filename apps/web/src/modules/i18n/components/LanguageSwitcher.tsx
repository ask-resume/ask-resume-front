import React from 'react';
import { useRouter } from 'next/router';

import Select from 'shared-ui/src/components/Select';
import languageDetector from '../lib/languageDetector';
import { i18n } from 'next-i18next';

const languageOptions = [{ key: "en", name: "English (en)" }, { key: "ko", name: "한국어 (ko)" }];

// TODO: Modified by using the select box of shared-ui
const LanguageSwitcher = () => {
  const router = useRouter();
  const locale = Array.isArray(router.query.locale) ? router.query.locale[0] : router.query.locale || 'ko';

  // Select Box
  const currentLanguageOption = languageOptions.find(option => option.key === locale);
  const [selectedOption, setSelectedOption] = React.useState(currentLanguageOption);

  const handleChangeSelectedOption = (option: { key: string; name: string; }) => {
    router.push(router.asPath, undefined, { locale: option.key });
    languageDetector.cache(locale);
    setSelectedOption(option);

  }

  return (
        <Select 
          selectedOption={selectedOption}
          onChangeSelectedOption={handleChangeSelectedOption}
          options={languageOptions}
          style={{ width: '14.4rem'}}
        />
  );
};

export default LanguageSwitcher;