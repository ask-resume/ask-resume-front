import React from 'react';

import Select, { Option, getOptionName } from '../components/Select';
import Divider from '../components/Divider';

import '../reset.scss';
import { stringTypeOptions, objTypeOptions } from './config';

export default {
  title: 'Component/Select',
  component: Select,
};

export const Default = () => {
  const [selectedOption, setSelectedOption] = React.useState<Option>(stringTypeOptions[0]);

  return (
    <div style={{ marginBottom: 50 }}>
      <div style={{ padding: 20 }}>
        <Select
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
        />
        <Divider />
        {selectedOption && <div>{getOptionName(selectedOption)}</div>}
      </div>
    </div>
  );
};

export const ObjDefault = () => {
  const [selectedOption, setSelectedOption] = React.useState<Option | null>(objTypeOptions[0]);

  return (
    <div style={{ marginBottom: 50 }}>
      <div style={{ padding: 20 }}>
        <Select
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={objTypeOptions}
        />
        <Divider />
        {selectedOption && <div>{getOptionName(selectedOption)}</div>}
      </div>
    </div>
  );
};

export const WithLabel = () => {
  const [selectedOption, setSelectedOption] = React.useState<Option | null>(objTypeOptions[0]);

  return (
    <div style={{ marginBottom: 50 }}>
      <div style={{ padding: 20 }}>
        <Select
          labelText="Job"
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={objTypeOptions}
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
        <Select
          width={100}
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
        />
      </div>
      <div style={{ padding: 20 }}>
        <Select
          width={200}
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
        />
      </div>
      <div style={{ padding: 20 }}>
        <Select
          width={300}
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
        />
      </div>
      <div style={{ padding: 20 }}>
        <Select
          width={400}
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
        />
      </div>
      <div style={{ padding: 20 }}>
        <Select
          width={500}
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
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
        <Select
          height="sm"
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
        />
      </div>
      <div style={{ padding: 20 }}>
        <Select
          height="md"
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
        />
      </div>
      <div style={{ padding: 20 }}>
        <Select
          height="lg"
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
        />
      </div>
    </div>
  );
};

export const NoBorder = () => {
  const [selectedOption, setSelectedOption] = React.useState<Option | null>(null);

  return (
    <div style={{ marginBottom: 50 }}>
      <Select
        border={false}
        selectedOption={selectedOption}
        onChangeSelectedOption={setSelectedOption}
        options={stringTypeOptions}
      />
      <Divider />
      {selectedOption && <div>{getOptionName(selectedOption)}</div>}
    </div>
  );
};
