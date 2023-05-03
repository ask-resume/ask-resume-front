import React from 'react';

import Select, { Option, getOptionName } from 'shared-ui/src/components/Select';
import Divider from 'shared-ui/src/components/Divider';
import Text from 'shared-ui/src/components/Text';

import 'shared-ui/src/reset.scss';
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
        {selectedOption && <Text size="small">value: {JSON.stringify(selectedOption)}</Text>}
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
        {selectedOption && <Text size="small">value: {JSON.stringify(selectedOption)}</Text>}
      </div>
    </div>
  );
};

export const WithLabel = () => {
  const [selectedOption, setSelectedOption] = React.useState<Option>(stringTypeOptions[0]);

  return (
    <div style={{ marginBottom: 50 }}>
      <div style={{ padding: 20 }}>
        <Select
          label={{
            labelText: 'Jobs',
          }}
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={objTypeOptions}
        />
        <Divider />
        {selectedOption && <Text size="small">value: {JSON.stringify(selectedOption)}</Text>}
      </div>
    </div>
  );
};

export const Height = () => {
  const [selectedOption, setSelectedOption] = React.useState<Option>(stringTypeOptions[0]);

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
      <div style={{ padding: 20 }}>
        <Divider />
        {selectedOption && <Text size="small">value: {JSON.stringify(selectedOption)}</Text>}
      </div>
    </div>
  );
};

export const NoBorder = () => {
  const [selectedOption, setSelectedOption] = React.useState<Option>(stringTypeOptions[0]);

  return (
    <div style={{ marginBottom: 50 }}>
      <div style={{ padding: 20 }}>
        <Select
          border={false}
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
        />
        <Divider />
        {selectedOption && <Text size="small">value: {JSON.stringify(selectedOption)}</Text>}
      </div>
    </div>
  );
};
