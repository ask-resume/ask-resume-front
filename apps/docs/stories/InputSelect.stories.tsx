import React from 'react';

import InputSelect from 'shared-ui/src/components/InputSelect';
import { Option, getOptionName } from 'shared-ui/src/components/Select';
import Divider from 'shared-ui/src/components/Divider';
import Text from 'shared-ui/src/components/Text';
import 'shared-ui/src/reset.scss';
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
          placeholder="Select String Option"
        />
        <Divider />
        {selectedOption && <Text size="small">value: {JSON.stringify(selectedOption)}</Text>}
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
          placeholder="Select Obj Option"
        />
        <Divider />
        {selectedOption && <Text size="small">value: {JSON.stringify(selectedOption)}</Text>}
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
          label={{
            labelText: 'Option',
          }}
          placeholder="Select String Option"
        />
        <Divider />
        {selectedOption && <Text size="small">value: {JSON.stringify(selectedOption)}</Text>}
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
          placeholder="Height: sm"
        />
      </div>
      <div style={{ padding: 20 }}>
        <InputSelect
          height="md"
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Height: md"
        />
      </div>
      <div style={{ padding: 20 }}>
        <InputSelect
          height="lg"
          selectedOption={selectedOption}
          onChangeSelectedOption={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Height: lg"
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
        placeholder="Select String Option"
      />
      <Divider />
      {selectedOption && <Text size="small">value: {JSON.stringify(selectedOption)}</Text>}
    </div>
  );
};
