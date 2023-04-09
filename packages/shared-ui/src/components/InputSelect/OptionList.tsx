import React from 'react';
import cn from 'classnames';
import { uid } from 'react-uid';

import { Option, HeightOption, getOptionName } from '.';

interface OptionListProps {
  options: Option[];
  height?: keyof typeof HeightOption;
  selectedOption: Option | null;
  onChangeOption: (option: Option) => void;
}

const OptionList = ({ options, height, selectedOption, onChangeOption }: OptionListProps) => {
  const listRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const options = [...(listRef.current?.querySelectorAll<HTMLLIElement>('.option') ?? [])];

    const handleKeyDownEvent = (event: KeyboardEvent) =>
      handleKeyDown({ event, options, onChangeOption });

    document.addEventListener('keydown', handleKeyDownEvent);
    return () => {
      document.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, [onChangeOption, listRef]);

  if (options.length === 0) {
    return <ul className="_options no-content">No Content</ul>;
  }

  return (
    <ul className={cn('_options', height)} ref={listRef}>
      {options.map((option, index) => {
        const optionName = getOptionName(option);

        return (
          <li
            className={cn('option', height, {
              selected: selectedOption === option,
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
