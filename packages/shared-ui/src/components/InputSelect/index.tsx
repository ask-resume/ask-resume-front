import React, { useState } from 'react';
import cn from 'classnames';
import { ColorMap } from '../../config/colorMap';
import { FontSize } from '../../config/size';

import Icon from '../Icon';
import Text from '../Text';
import './index.scss';

export type Option = { [key: string]: any; name: string } | string;
const HeightOption = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 30,
} as const;

export interface InputSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  inputValue: string;
  onChangeInputValue: (value: string) => void;
  options: Option[];
  width?: number;
  height?: keyof typeof HeightOption;
  className?: string;
  placeholder?: string;
  labelText?: string;
  labelSize?: FontSize;
  labelWeight?: 'light' | 'regular' | 'medium' | 'bold';
}

// TODO: implement optional label ✅
// TODO: styling
//  - Input component ✅
//  - Dropdown component
// TODO: Modify Dropdown to select options according to key input (ArrowUp, ArrowDown, Enter)
const InputSelect = ({
  inputValue,
  onChangeInputValue,
  options,
  className,
  placeholder,
  labelText,
  width = 200,
  height = 'md',
  labelSize = 'medium',
  labelWeight = 'regular',
}: InputSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeInputValue(event.target.value);
  };

  const handleOptionClick = (option: Option) => {
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

  const filteredOptions = options.filter(option => {
    const isNamePropertyExist =
      typeof option === 'object' && Object.prototype.hasOwnProperty.call(option, 'name');

    return (isNamePropertyExist ? option.name : option.toString())
      .toLowerCase()
      .includes(inputValue.toLowerCase());
  });

  return (
    <div
      className={cn('_INPUT_SELECT_', className)}
      style={{
        width: `${width}px`,
      }}
    >
      {labelText && (
        <Text
          className={cn('_label')}
          style={{ color: ColorMap.blue_gray }}
          size={labelSize}
          weight={labelWeight}
          variant="label"
          htmlFor="dropdown-input"
        >
          {labelText}
        </Text>
      )}
      <div className={cn('_wrapper', height)} onClick={handleInputClick}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={cn('_INPUT_')}
          id="dropdown-input"
        />
        <button className={cn('_icon', height, { open: isOpen })} onClick={handleIconClick}>
          <Icon.ArrowIcon size={HeightOption[height]} color={ColorMap.blue_gray} />
        </button>
      </div>
      {isOpen && (
        <ul>
          {filteredOptions.length === 0 ? (
            <li className="option no-content">No Content</li>
          ) : (
            filteredOptions.map((option, index) => {
              return (
                <li
                  key={index}
                  className={`option ${selectedOption === option ? 'selected' : ''}`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.toString()}
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
};

export default InputSelect;
