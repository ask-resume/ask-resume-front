import React, { useState } from 'react';
import cn from 'classnames';
import { ColorMap } from '../../config/colorMap';
import { FontSize } from '../../config/size';

import Icon from '../Icon';
import Text from '../Text';
import { Option, HeightOption, getOptionName } from '../Select';
import OptionList from '../Select/OptionList';
import CloseBoxOnOutside from '../CloseBoxOnOutside';

export { useInputSelectedState } from './useInputSelectedState';
import './index.scss';

export interface InputSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedOption: Option | null;
  onChangeSelectedOption: (value: Option | null) => void;
  options: Option[];
  height?: keyof typeof HeightOption;
  className?: string;
  label?: {
    labelText?: string;
    labelSize?: FontSize;
    labelWeight?: 'light' | 'regular' | 'medium' | 'bold';
  };
  placeholder?: string;
  locale?: string;
  border?: boolean;
}

// If you want to change the width, you must pass the class or style from the parent component.
const InputSelect = ({
  selectedOption,
  onChangeSelectedOption,
  options,
  placeholder,
  className,
  height = 'sm',
  label = {
    labelText: '',
    labelSize: 'medium',
    labelWeight: 'regular',
  },
  locale = 'en',
  border = true,
}: InputSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  React.useEffect(() => {
    if (!selectedOption) {
      setInputValue('');
      return;
    }
    const optionName = getOptionName(selectedOption);
    setInputValue(optionName);
  }, [selectedOption]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
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

  const filteredOptions = options?.filter(option => {
    return getOptionName(option).toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <CloseBoxOnOutside onClose={handleOptionListClose}>
      <div className={cn('_SELECT_', className)}>
        {label.labelText && (
          <div>
            <Text
              className={cn('_label')}
              size={label.labelSize}
              weight={label.labelWeight}
              variant="label"
              htmlFor="dropdown-input"
            >
              {label.labelText}
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
            className={cn('_INPUT_', 'select')}
            id="dropdown-input"
            autoComplete="false"
          />
          <button className={cn('_icon', height, { open: isOpen })} onClick={handleIconClick}>
            <Icon.Arrow
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
            locale={locale}
          />
        )}
      </div>
    </CloseBoxOnOutside>
  );
};

export default InputSelect;
