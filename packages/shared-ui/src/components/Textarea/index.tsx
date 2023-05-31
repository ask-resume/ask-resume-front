import React from 'react';
import { useUID } from 'react-uid';
import cn from 'classnames';

import Icon from '../Icon';
import Text from '../Text';
import { isNotBlank } from 'shared-lib/utils/string';
import { ColorMap } from '../../config/colorMap';
import { FontSize } from '../../config/font';
import { FontSize as FontSizeType } from '../../config/size';
import './index.scss';

export interface TextareaProps {
  className?: string;
  text: string;
  onChangeText: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  height?: number;
  maxLength?: number;
  placeholder?: string;
  label?: {
    labelText?: string;
    labelSize?: FontSizeType;
    labelWeight?: 'light' | 'regular' | 'medium' | 'bold';
  };
  error?: {
    message?: string;
    regex?: RegExp;
  };
}

const Textarea = ({
  text,
  onChangeText,
  className,
  height = 300,
  maxLength = 1000,
  placeholder = 'Type the text.',
  label = {
    labelText: '',
    labelSize: 'large',
    labelWeight: 'regular',
  },
  error = {
    message: '',
    regex: undefined,
  },
}: TextareaProps) => {
  const uid = useUID();
  const [isFocused, setIsFocused] = React.useState(false);
  const isError = !isFocused && isNotBlank(text) && error.regex && error.regex.test(text);

  return (
    <div className={cn('_TEXTAREA_', className)}>
      {label.labelText && (
        <div className="label">
          <Text
            className="_header"
            variant="label"
            size={label.labelSize}
            weight={label.labelWeight}
            htmlFor={uid}
          >
            {label.labelText}
          </Text>
        </div>
      )}

      <div className="_wrapper">
        <textarea
          style={{
            height,
            fontSize: getFontSize(text),
          }}
          className={cn({ error: isError })}
          placeholder={placeholder}
          value={text}
          onChange={onChangeText}
          maxLength={maxLength}
          id={uid}
          name={uid}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <div className={cn('_text-limit', { error: isError })}>{`${text.length}/${maxLength}`}</div>
        {isError && (
          <div className="error_message">
            <Icon.Wanning variant="circle-ghost" size={24} />
            <Text variant="p" weight="medium" textColor={ColorMap.red_5}>
              {error.message}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

const getFontSize = (text: string) => {
  switch (true) {
    case text.length > 100:
      return FontSize.medium;
    default:
      return FontSize.large;
  }
};

export default Textarea;
