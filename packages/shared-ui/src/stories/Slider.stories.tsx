import React from 'react';

import Divider from '../components/Divider';

import Slider from '../components/Slider';
import '../reset.scss';

export default {
  title: 'Component/Slider',
  component: Slider,
};

export const Default = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div style={{ padding: 20 }}>
      <Slider
        size="small"
        min={0}
        max={100}
        step={10}
        inputValue={value}
        onChangeInputValue={newValue => setValue(newValue)}
      />
      <Divider />
      <div>value: {value}</div>
    </div>
  );
};

export const Size = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div style={{ padding: 20 }}>
      <Slider
        size="small"
        min={0}
        max={100}
        step={10}
        inputValue={value}
        onChangeInputValue={newValue => setValue(newValue)}
      />
      <Slider
        min={0}
        max={100}
        step={10}
        inputValue={value}
        onChangeInputValue={newValue => setValue(newValue)}
      />
      <Slider
        size="large"
        min={0}
        max={100}
        step={10}
        inputValue={value}
        onChangeInputValue={newValue => setValue(newValue)}
      />
      <Divider />
      <div>value: {value}</div>
    </div>
  );
};
