import React, { useState } from 'react';
import cn from 'classnames';
import { ColorMap } from '../../config/colorMap';
import { FontSize } from '../../config/size';

import Icon from '../Icon';
import Text from '../Text';
import OptionList from '../Select/OptionList';
import { CloseBoxOnOutside } from 'shared-lib/hooks';

import * as Spacer from '../../config/spacer';
import './index.scss';
import { Option, HeightOption, getOptionName } from '../Select';

export interface InputSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedOption: Option | null;
  onChangeSelectedOption: (value: Option | null) => void;
  options: Option[];
  width?: number;
  height?: keyof typeof HeightOption;
  className?: string;
  placeholder?: string;
  labelText?: string;
  labelSize?: FontSize;
  labelWeight?: 'light' | 'regular' | 'medium' | 'bold';
  border?: boolean;
}

const InputSelect = ({
  selectedOption,
  onChangeSelectedOption,
  options,
  placeholder,
  className,
  width = 200,
  height = 'sm',
  labelText,
  labelSize = 'medium',
  labelWeight = 'regular',
  border = true,
}: InputSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleOptionChange = (option: Option) => {
    onChangeSelectedOption(option);

    const optionName = getOptionName(option);
    setInputValue(optionName);
    setIsOpen(false);
  };

  const handleInputClick = () => setIsOpen(true);
  const handleOptionListClose = () => setIsOpen(false);

  const handleIconClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    setIsOpen(isOpen => !isOpen);
  };

  const filteredOptions = options.filter(option => {
    return getOptionName(option).toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <CloseBoxOnOutside onClose={handleOptionListClose}>
      <div
        className={cn('_INPUT_SELECT_', className)}
        style={{
          width: `${width}px`,
        }}
      >
        {labelText && (
          <div style={{ padding: `${Spacer.spacer_small} 0` }}>
            <Text
              className={cn('_label')}
              size={labelSize}
              weight={labelWeight}
              variant="label"
              htmlFor="dropdown-input"
            >
              {labelText}
            </Text>
          </div>
        )}
        <div
          className={cn('_wrapper', height, { open: isOpen, border })}
          onClick={handleInputClick}
        >
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={placeholder}
            className={cn('select', '_INPUT_')}
            id="dropdown-input"
          />
          <button className={cn('_icon', height, { open: isOpen })} onClick={handleIconClick}>
            <Icon.ArrowIcon
              size={HeightOption[height]}
              color={isOpen ? ColorMap.gray_8 : ColorMap.gray_6}
            />
          </button>
        </div>
        {isOpen && (
          <OptionList
            options={filteredOptions}
            selectedOption={selectedOption}
            onChangeOption={handleOptionChange}
            height={height}
          />
        )}
      </div>
    </CloseBoxOnOutside>
  );
};

export default InputSelect;
