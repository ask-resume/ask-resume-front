import React from 'react';

import Divider from 'shared-ui/src/components/Divider';
import Slider from 'shared-ui/src/components/Slider';
import Text from 'shared-ui/src/components/Text';
import 'shared-ui/src/reset.scss';

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
        onChangeSelectedOption={setValue}
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
        onChangeSelectedOption={setValue}
      />
      <Slider min={0} max={100} step={10} inputValue={value} onChangeSelectedOption={setValue} />
      <Slider
        size="large"
        min={0}
        max={100}
        step={10}
        inputValue={value}
        onChangeSelectedOption={setValue}
      />
      <Divider />
      <Text size="small">value: {value}</Text>
    </div>
  );
};
