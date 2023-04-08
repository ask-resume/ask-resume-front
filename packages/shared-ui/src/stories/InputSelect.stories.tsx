import React from 'react';
import InputSelect from '../components/InputSelect';
import { ColorMap } from '../config/colorMap';

import '../reset.scss';

export default {
  title: 'Component/Dropdown',
  component: InputSelect,
};

export const Default = () => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div style={{ padding: 20 }}>
      <InputSelect
        inputValue={inputValue}
        onChangeInputValue={currInputValue => setInputValue(currInputValue)}
        options={['Option 1', 'Option 2', 'Option 3']}
        placeholder="Job"
      />
    </div>
  );
};

export const WithLabel = () => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div style={{ padding: 20 }}>
      <InputSelect
        width={500}
        height="lg"
        inputValue={inputValue}
        onChangeInputValue={currInputValue => setInputValue(currInputValue)}
        options={['Option 1', 'Option 2', 'Option 3']}
        labelText="Job"
        placeholder="Please select your job (or future aspirations)"
      />
    </div>
  );
};
