import React from 'react';
import './index.scss';
import Text from '../Text';
import { useUID } from 'react-uid';

import { FontSize } from '../../config/font';
import { FontSize as FontSizeType } from '../../config/size';

import * as Spacer from '../../config/spacer';

export interface TextareaProps {
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
}

const Textarea = ({
  text,
  onChangeText,
  height = 300,
  maxLength = 1000,
  placeholder = 'Type the text.',
  label = {
    labelText: '',
    labelSize: 'large',
    labelWeight: 'regular',
  },
}: TextareaProps) => {
  const uid = useUID();

  return (
    <div className="_TEXTAREA_">
      <div style={{ padding: `${Spacer.spacer_x_small} 0` }}>
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

      <div className="_wrapper">
        <textarea
          style={{ height, fontSize: getFontSize(text) }}
          maxLength={maxLength}
          placeholder={placeholder}
          value={text}
          onChange={event => onChangeText(event)}
          id={uid}
          name={uid}
        />
        <div className="_text-limit">{`${text.length}/${maxLength}`}</div>
      </div>
    </div>
  );
};

const getFontSize = (text: string) => {
  switch (true) {
    case text.length > 200:
      return FontSize.medium;
    case text.length > 100:
      return FontSize.large;
    default:
      return FontSize.x_large;
  }
};

export default Textarea;
