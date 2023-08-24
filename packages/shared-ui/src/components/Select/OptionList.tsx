import React from 'react';
import cn from 'classnames';
import { uid } from 'react-uid';

import { Option, HeightOption, getOptionName } from '.';
import { ColorMap } from '../../config/colorMap';
import Text from '../Text';

interface OptionListProps {
  options: Option[];
  height?: keyof typeof HeightOption;
  boxShadow?: boolean;
  selectedOption: Option | null;
  onChangeOption: (option: Option) => void;
  locale?: string;
}

const OptionList = ({
  options,
  height,
  boxShadow,
  selectedOption,
  onChangeOption,
  locale = 'en',
}: OptionListProps) => {
  const listRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const options = Array.from(listRef.current?.querySelectorAll<HTMLLIElement>('.option') ?? []);

    const handleKeyDownEvent = (event: KeyboardEvent) =>
      handleKeyDown({ event, options, onChangeOption });

    document.addEventListener('keydown', handleKeyDownEvent);
    return () => {
      document.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, [onChangeOption, listRef]);

  if (!options?.length) {
    return <NoResultPhrases locale={locale} />;
  }

  return (
    <ul className={cn('_options', height, boxShadow)} ref={listRef}>
      {options.map((option, index) => {
        const optionName = getOptionName(option);

        return (
          <li
            className={cn('option', height, {
              selected: getOptionName(selectedOption ?? '') === getOptionName(option),
            })}
            key={uid(index)}
            onClick={() => onChangeOption(option)}
            data-value={JSON.stringify(option)}
            tabIndex={0}
          >
            {optionName}
          </li>
        );
      })}
    </ul>
  );
};

const NoResultPhrases = ({ locale }: { locale: string }) => {
  type ResultPhrases = {
    [key: string]: string;
  };

  const NO_RESULT_PHRASES: ResultPhrases = {
    en: 'No Result Found',
    ko: '검색 결과 없음',
  };

  return (
    <div className="_options no-content">
      <Text align="center" textColor={ColorMap.gray_6} size="small" lineHeight="wide">
        {NO_RESULT_PHRASES[locale]}
      </Text>
    </div>
  );
};

export default OptionList;

interface KeyDowmHandlerProps {
  event: KeyboardEvent;
  options: HTMLLIElement[];
  onChangeOption: (option: Option) => void;
}

const handleKeyDown = ({ event, options, onChangeOption }: KeyDowmHandlerProps) => {
  const selectedIndex = options.findIndex(option => option === document.activeElement);

  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault();
      if (selectedIndex > 0) {
        options[selectedIndex - 1].focus();
      } else {
        options[options.length - 1].focus();
      }
      break;
    case 'ArrowDown':
      event.preventDefault();
      if (selectedIndex === -1 || selectedIndex === options.length - 1) {
        options[0].focus();
      } else {
        options[selectedIndex + 1].focus();
      }
      break;
    case 'Enter':
      event.preventDefault();
      if (selectedIndex !== -1) {
        const selectedOption = JSON.parse(options[selectedIndex].dataset.value!);
        onChangeOption(selectedOption);
      }
      break;
  }
};
