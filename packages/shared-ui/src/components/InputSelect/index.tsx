import React, { useState } from 'react';
import { ColorMap } from '../../config/colorMap';

import './index.scss';

export interface InputSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  options: string[];
  className?: string;
  placeholder?: string;
  inputSize?:
    | /*24px*/ 'xs'
    | /*32px*/ 'sm'
    | /*40px*/ 'md'
    | /*48px*/ 'lg'
    | /*60px*/ 'xl'
    | /*150px*/ 'xxl';
  color?: ColorMap;
}

// TODO: Modify Dropdown to select options according to key input (ArrowUp, ArrowDown, Enter)
// TODO: Implement Dropdown
const InputSelect = ({ options, className, placeholder, inputSize, color }: InputSelectProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setInputValue(option.toString());
    setIsOpen(false);
  };

  const handleInputClick = () => {
    setIsOpen(true);
  };

  const handleIconClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    setIsOpen(isOpen => !isOpen);
  };

  const filteredOptions = options.filter(option =>
    option.toString().toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <div className={`select-box select-box--${inputSize}`}>
      <div className="select-box__input" onClick={handleInputClick}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          style={{ borderColor: color }}
        />
        <span
          className={`select-box__icon ${isOpen ? 'select-box__icon--open' : ''}`}
          style={{ color }}
          onClick={handleIconClick}
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <ul
          className={`select-box__options select-box__options--${inputSize}`}
          style={{ borderColor: color }}
        >
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className={`select-box__option ${
                selectedOption === option ? 'select-box__option--selected' : ''
              }`}
              onClick={() => handleOptionClick(option)}
              style={{ backgroundColor: selectedOption === option && color }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSelect;
