import React, { useState } from 'react';
import cn from 'classnames';
import { ColorMap } from '../../config/colorMap';
import { FontSize } from '../../config/size';

import Icon from '../Icon';
import Text from '../Text';
import OptionList from './OptionList';
import { CloseBoxOnOutside } from 'shared-lib/hooks';

import * as Spacer from '../../config/spacer';

import './index.scss';

export const HeightOption = {
  sm: 16,
  md: 20,
  lg: 24,
} as const;

type ObjectOption = { name: string; value?: string };
type StringOption = string;
export type Option = ObjectOption | StringOption;

export interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedOption: Option | null;
  onChangeSelectedOption: (value: Option) => void;
  options: Option[];
  height?: keyof typeof HeightOption;
  className?: string;
  border?: boolean;
  labelText?: string;
  labelSize?: FontSize;
  labelWeight?: 'light' | 'regular' | 'medium' | 'bold';
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
  labelText,
  labelSize = 'medium',
  labelWeight = 'regular',
  border = true,
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
      <div className={cn('_SELECT_', className)}>
        {labelText && (
          <div style={{ padding: `${Spacer.spacer_small} 0` }}>
            <Text
              className={cn('_label')}
              size={labelSize}
              weight={labelWeight}
              onClick={handleOptionListOpen}
            >
              {labelText}
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
          <button className={cn('_icon', height, { open: isOpen })} onClick={handleIconClick}>
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
          />
        )}
      </div>
    </CloseBoxOnOutside>
  );
};

export default Select;
