import React, { useState } from 'react';
import cn from 'classnames';
import { ColorMap } from '../../config/colorMap';
import { FontSize } from '../../config/size';

import Icon from '../Icon';
import Text from '../Text';
import OptionList from './OptionList';
import CloseBoxOnOutside from '../CloseBoxOnOutside';
export { useSelectState } from './useSelectState';

import './index.scss';

export const HeightOption = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

export type ObjectOption = { name: string; id?: string | number; value?: string };
export type StringOption = string;
export type Option = ObjectOption | StringOption;

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedOption: Option | null;
  onChangeSelectedOption: (value: Option) => void;
  options: Option[];
  height?: keyof typeof HeightOption;
  className?: string;
  label?: {
    labelText?: string;
    labelSize?: FontSize;
    labelWeight?: 'light' | 'regular' | 'medium' | 'bold';
  };
  locale?: string;
  border?: boolean;
  style?: React.CSSProperties;
}

export const isObjectOption = (option: Option): option is ObjectOption =>
  typeof option !== 'string';

export const getOptionName = (option: Option) => {
  return option ? (isObjectOption(option) ? option.name : option) : '';
};

const Select = ({
  selectedOption,
  onChangeSelectedOption,
  options,
  className,
  height = 'sm',
  label = {
    labelText: '',
    labelSize: 'medium',
    labelWeight: 'regular',
  },
  locale = 'en',
  border = true,
  style,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (option: Option) => {
    onChangeSelectedOption(option);
    setIsOpen(false);
  };

  const handleOptionListOpen = () => setIsOpen(true);
  const handleOptionListClose = () => setIsOpen(false);

  const handleIconClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    setIsOpen(isOpen => !isOpen);
  };

  return (
    <CloseBoxOnOutside onClose={handleOptionListClose}>
      <div className={cn('_SELECT_', className)} style={style}>
        {label.labelText && (
          <div>
            <Text
              className={cn('_label')}
              size={label.labelSize}
              weight={label.labelWeight}
              onClick={handleOptionListOpen}
            >
              {label.labelText}
            </Text>
          </div>
        )}
        <div
          className={cn('_wrapper', height, { open: isOpen, border })}
          onClick={handleOptionListOpen}
        >
          <div className={cn('select')}>
            <span>{getOptionName(selectedOption ?? '')}</span>
          </div>
          <button
            aria-label="dropdown_icon"
            className={cn('_icon', height, { open: isOpen })}
            onClick={handleIconClick}
          >
            <Icon.Arrow
              size={HeightOption[height]}
              color={isOpen ? ColorMap.gray_8 : ColorMap.gray_6}
            />
          </button>
        </div>
        {isOpen && (
          <OptionList
            options={options}
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

export default Select;
