import React from 'react';

import Divider from '../components/Divider';
import Slider from '../components/Slider';
import Text from '../components/Text';
import '../reset.scss';

export default {
  title: 'Component/Slider',
  component: Slider,
};

export const Default = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div style={{ width: '300px', padding: 20 }}>
      <Slider
        size="small"
        min={0}
        max={100}
        step={10}
        inputValue={value}
        onChangeInputValue={newValue => setValue(newValue)}
      />
      <Divider />
      <Text size="small">value: {value}</Text>
    </div>
  );
};

export const Size = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div style={{ width: '300px', padding: 20 }}>
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
      <Text size="small">value: {value}</Text>
    </div>
  );
};
