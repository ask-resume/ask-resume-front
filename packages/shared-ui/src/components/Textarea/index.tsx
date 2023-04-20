import React from 'react';
import './index.scss';
import Text from '../Text';
import { useUID } from 'react-uid';

import { FontSize } from '../../config/font';
import { FontSize as FontSizeType } from '../../config/size';

import * as Spacer from '../../config/spacer';

export interface TextareaProps {
  height?: number;
  maxLength?: number;
  placeholder?: string;
  labelText?: string;
  labelSize?: FontSizeType;
  labelWeight?: 'light' | 'regular' | 'medium' | 'bold';
}

const Textarea = ({
  height = 300,
  maxLength = 1000,
  placeholder = 'Type the text.',
  labelText,
  labelSize = 'large',
  labelWeight = 'regular',
}: TextareaProps) => {
  const uid = useUID();

  const [text, setText] = React.useState('');
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="_TEXTAREA_">
      <div style={{ padding: `${Spacer.spacer_x_small} 0` }}>
        <Text
          className="_header"
          variant="label"
          size={labelSize}
          weight={labelWeight}
          htmlFor={uid}
        >
          {labelText}
        </Text>
      </div>

      <div className="_wrapper">
        <textarea
          style={{ height, fontSize: getFontSize(text) }}
          maxLength={maxLength}
          placeholder={placeholder}
          value={text}
          onChange={handleTextChange}
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
