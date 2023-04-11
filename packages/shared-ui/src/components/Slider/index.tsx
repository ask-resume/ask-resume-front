import React from 'react';
import cn from 'classnames';

import { SliderSize } from '../../config/size';
import './index.scss';

interface SliderProps {
  size?: SliderSize;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  inputValue: number;
  onChangeInputValue: (value: number) => void;
  className?: string;
  tooltipText?: string;
}

interface ThumbStyle extends React.CSSProperties {
  '--thumb-width': string;
  '--thumb-height': string;
  '--thumb-margin-top': string;
  '--runnable-track-height': string;
}

const sliderSizes = {
  small: {
    thumbWidth: '15px',
    thumbHeight: '15px',
    thumbMarginTop: '-5px',
    runnableTrackHeight: '5px',
  },
  medium: {
    thumbWidth: '24px',
    thumbHeight: '24px',
    thumbMarginTop: '-8px',
    runnableTrackHeight: '8px',
  },
  large: {
    thumbWidth: '30px',
    thumbHeight: '30px',
    thumbMarginTop: '-10px',
    runnableTrackHeight: '10px',
  },
};

const Slider = React.memo(
  ({
    size = 'medium',
    min,
    max,
    step,
    defaultValue,
    inputValue,
    onChangeInputValue,
    className,
  }: SliderProps) => {
    const sliderSize = sliderSizes[size];
    const thumbStyle: ThumbStyle = {
      '--thumb-width': sliderSize.thumbWidth,
      '--thumb-height': sliderSize.thumbHeight,
      '--thumb-margin-top': sliderSize.thumbMarginTop,
      '--runnable-track-height': sliderSize.runnableTrackHeight,
    };

    const handleInputValueChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        if (newValue !== inputValue) {
          onChangeInputValue(newValue);
        }
      },
      [onChangeInputValue, inputValue],
    );

    return (
      <div className={cn('_SLIDER_', size, className)}>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={inputValue}
          defaultValue={defaultValue}
          onChange={handleInputValueChange}
          className={cn('_input', '_slider-thumb')}
          style={thumbStyle}
        />
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.inputValue === nextProps.inputValue,
);

Slider.displayName = 'Slider';
export default Slider;