import React from 'react';
import cn from 'classnames';

import './index.scss';
import Text from '../Text';

import { FontSize } from '../../config/font';
import { FontSize as FontSizeType } from '../../config/size';

import * as Spacer from '../../config/spacer';

interface TextareaProps {
  height?: number;
  maxLength?: number;
  placeholder?: string;
  textareaStyle?: React.CSSProperties;
  labelText?: string;
  labelSize?: FontSizeType;
  labelWeight?: 'light' | 'regular' | 'medium' | 'bold';
}

const Textarea = ({
  height = 300,
  maxLength = 1000,
  placeholder = 'Type the text.',
  textareaStyle = {},
  labelText,
  labelSize = 'large',
  labelWeight = 'regular',
}: TextareaProps) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [text, setText] = React.useState('');

  const handleLabelClick = () => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="_TEXTAREA_">
      <div style={{ padding: `${Spacer.spacer_x_small} 0` }}>
        <div className="_header">
          <Text
            className={cn('_label')}
            size={labelSize}
            weight={labelWeight}
            onClick={handleLabelClick}
          >
            {labelText}
          </Text>
          <div className="_counter">{`${text.length}/${maxLength}`}</div>
        </div>
      </div>
      <textarea
        ref={textareaRef}
        style={{ ...textareaStyle, height, fontSize: getFontSize(text) }}
        maxLength={maxLength}
        placeholder={placeholder}
        value={text}
        onChange={handleTextChange}
      />
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
