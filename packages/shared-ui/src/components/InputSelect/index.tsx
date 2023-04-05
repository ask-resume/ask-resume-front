import React, { useState } from 'react';
import cn from 'classnames';
import { ColorMap } from '../../config/colorMap';
import { FontSize } from '../../config/size';

import { ArrowIcon } from '../Icon/ArrowIcon';
import './index.scss';
import Text from '../Text';

export interface InputSelectOption {
  [key: string]: any;
  name?: string;
}

export interface InputSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  inputValue: string;
  onChangeInputValue: (value: string) => void;
  options: InputSelectOption[];
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
  label?: string;
  labelSize?: FontSize;
  labelWeight?: 'light' | 'regular' | 'medium' | 'bold';
}

// TODO: implement optional label ✅
// TODO: styling
// TODO: Modify Dropdown to select options according to key input (ArrowUp, ArrowDown, Enter)
// TODO: Implement Dropdown
const InputSelect = ({
  inputValue,
  onChangeInputValue,
  options,
  className,
  placeholder,
  inputSize,
  color,
  label,
  labelSize = 'medium',
  labelWeight = 'regular',
}: InputSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<InputSelectOption | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeInputValue(event.target.value);
  };

  const handleOptionClick = (option: InputSelectOption) => {
    setSelectedOption(option);
    onChangeInputValue(option.toString());
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
    (option.name?.toString() || option.toString()).toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <div
      className={cn('_INPUT_SELECT_', className, {
        inputSize,
      })}
    >
      {label && (
        <Text className={cn('label')} variant="inline" size={labelSize} weight={labelWeight}>
          {label}
        </Text>
      )}
      <div className="input" onClick={handleInputClick}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          style={{ borderColor: color, color }}
        />
        <span
          className={`icon ${isOpen ? 'open' : ''}`}
          style={{ color }}
          onClick={handleIconClick}
        >
          <ArrowIcon />
        </span>
      </div>
      {isOpen && (
        <ul
          className={cn(className, {
            inputSize,
          })}
          style={{ borderColor: color }}
        >
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              className={`option ${selectedOption === option ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option?.name?.toString() ?? option.toString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSelect;
