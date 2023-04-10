import React from 'react';

import InputSelect from '../components/InputSelect';
import { Option, getOptionName } from '../components/Select';
import Divider from '../components/Divider';

import '../reset.scss';
import { stringTypeOptions, objTypeOptions } from './config';

export default {
  title: 'Component/InputSelect',
  component: InputSelect,
};

export const Default = () => {
  const [selectedOption, setSelectedOption] = React.useState<Option | null>(null);

  return (
    <div style={{ marginBottom: 50 }}>
      <div style={{ padding: 20 }}>
        <InputSelect
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Select Option"
        />
        <Divider />
        {selectedOption && <div>{getOptionName(selectedOption)}</div>}
      </div>
    </div>
  );
};

export const ObjDefault = () => {
  const [selectedOption, setSelectedOption] = React.useState<Option | null>(null);

  return (
    <div style={{ marginBottom: 50 }}>
      <div style={{ padding: 20 }}>
        <InputSelect
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={objTypeOptions}
          placeholder="Job"
        />
        <Divider />
        {selectedOption && <div>{getOptionName(selectedOption)}</div>}
      </div>
    </div>
  );
};

export const WithLabel = () => {
  const [selectedOption, setSelectedOption] = React.useState<Option | null>(null);

  return (
    <div style={{ marginBottom: 50 }}>
      <div style={{ padding: 20 }}>
        <InputSelect
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={objTypeOptions}
          labelText="Job"
          placeholder="Please select your job (or future aspirations)"
        />
        <Divider />
        {selectedOption && <div>{getOptionName(selectedOption)}</div>}
      </div>
    </div>
  );
};

export const Width = () => {
  const [selectedOption, setSelectedOption] = React.useState<Option | null>(null);

  return (
    <div style={{ marginBottom: 50 }}>
      <div style={{ padding: 20 }}>
        <InputSelect
          width={100}
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Select Option"
        />
      </div>
      <div style={{ padding: 20 }}>
        <InputSelect
          width={200}
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Select Option"
        />
      </div>
      <div style={{ padding: 20 }}>
        <InputSelect
          width={300}
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Select Option"
        />
      </div>
      <div style={{ padding: 20 }}>
        <InputSelect
          width={400}
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Select Option"
        />
      </div>
      <div style={{ padding: 20 }}>
        <InputSelect
          width={500}
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Select Option"
        />
      </div>
    </div>
  );
};

export const Height = () => {
  const [selectedOption, setSelectedOption] = React.useState<Option | null>(null);

  return (
    <div style={{ marginBottom: 50 }}>
      <div style={{ padding: 20 }}>
        <InputSelect
          height="sm"
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Select Option"
        />
      </div>
      <div style={{ padding: 20 }}>
        <InputSelect
          height="md"
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Select Option"
        />
      </div>
      <div style={{ padding: 20 }}>
        <InputSelect
          height="lg"
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Select Option"
        />
      </div>
    </div>
  );
};

export const NoBorder = () => {
  const [selectedOption, setSelectedOption] = React.useState<Option | null>(null);

  return (
    <div style={{ marginBottom: 50 }}>
      <InputSelect
        border={false}
        selectedOption={selectedOption}
        onChangeSelectedOption={setSelectedOption}
        options={stringTypeOptions}
        placeholder="Select Option"
      />
      <Divider />
      {selectedOption && <div>{getOptionName(selectedOption)}</div>}
    </div>
  );
};
