import React from 'react';
import { Option } from '.';
import './options-list.scss';

interface OptionsListProps {
  options: Option[];
  selectedOption: Option | null;
  handleOptionClick: (option: Option) => void;
}

const OptionsList = ({ options, selectedOption, handleOptionClick }: OptionsListProps) => {
  const listRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const options = [...(listRef.current?.querySelectorAll<HTMLLIElement>('.option') ?? [])];

    const handleKeyDownEvent = (event: KeyboardEvent) =>
      handleKeyDown({ event, options, handleOptionClick });

    document.addEventListener('keydown', handleKeyDownEvent);
    return () => {
      document.removeEventListener('keydown', handleKeyDownEvent);
    };
  }, [handleOptionClick, listRef]);

  if (options.length === 0) {
    return <li className="option no-content">No Content</li>;
  }

  return (
    <ul ref={listRef}>
      {options.map((option, index) => {
        return (
          <li
            key={index}
            className={`option ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
            data-value={option}
            tabIndex={0}
          >
            {option.toString()}
          </li>
        );
      })}
    </ul>
  );
};

export default OptionsList;

interface KeyDowmHandlerProps {
  event: KeyboardEvent;
  options: HTMLLIElement[];
  handleOptionClick: (option: Option) => void;
}

const handleKeyDown = ({ event, options, handleOptionClick }: KeyDowmHandlerProps) => {
  const selectedIndex = Array.from(options).findIndex(option => option === document.activeElement);

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
        handleOptionClick(options[selectedIndex].dataset.value!);
      }
      break;
  }
};
