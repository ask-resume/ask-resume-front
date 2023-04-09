import React from 'react';

import InputSelect, { Option, getOptionName } from '../components/InputSelect';
import Divider from '../components/Divider';

import '../reset.scss';

export default {
  title: 'Component/InputSelect',
  component: InputSelect,
};

const stringTypeOptions = ['Option 1', 'Option 2', 'Option 3'];
const objTypeOptions = [
  {
    id: 1,
    name: 'CEO',
  },
  {
    id: 2,
    name: 'Chief Sustainability Officer',
  },
  {
    id: 3,
    name: 'General & Operations Manager',
  },
  {
    id: 4,
    name: 'legislator',
  },
  {
    id: 5,
    name: 'Ads and Promotions Manager',
  },
  {
    id: 6,
    name: 'Marketing Manager',
  },
  {
    id: 7,
    name: 'Sales manager',
  },
  {
    id: 8,
    name: 'Public Relations Manager',
  },
  {
    id: 9,
    name: 'Fundraising manager',
  },
  {
    id: 10,
    name: 'Managed Services Manager',
  },
];

export const Default = () => {
  const [selectedOption, setSelectedOption] = React.useState<Option | null>(null);

  return (
    <div style={{ marginBottom: 50 }}>
      <div style={{ padding: 20 }}>
        <InputSelect
          selectedOption={selectedOption}
          onChangeInputValue={setSelectedOption}
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
          onChangeInputValue={setSelectedOption}
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
          width={500}
          height="lg"
          selectedOption={selectedOption}
          onChangeInputValue={setSelectedOption}
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
          onChangeInputValue={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Select Option"
        />
      </div>
      <div style={{ padding: 20 }}>
        <InputSelect
          width={200}
          selectedOption={selectedOption}
          onChangeInputValue={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Select Option"
        />
      </div>
      <div style={{ padding: 20 }}>
        <InputSelect
          width={300}
          selectedOption={selectedOption}
          onChangeInputValue={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Select Option"
        />
      </div>
      <div style={{ padding: 20 }}>
        <InputSelect
          width={400}
          selectedOption={selectedOption}
          onChangeInputValue={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Select Option"
        />
      </div>
      <div style={{ padding: 20 }}>
        <InputSelect
          width={500}
          selectedOption={selectedOption}
          onChangeInputValue={setSelectedOption}
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
          onChangeInputValue={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Select Option"
        />
      </div>
      <div style={{ padding: 20 }}>
        <InputSelect
          height="md"
          selectedOption={selectedOption}
          onChangeInputValue={setSelectedOption}
          options={stringTypeOptions}
          placeholder="Select Option"
        />
      </div>
      <div style={{ padding: 20 }}>
        <InputSelect
          height="lg"
          selectedOption={selectedOption}
          onChangeInputValue={setSelectedOption}
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
        onChangeInputValue={setSelectedOption}
        options={stringTypeOptions}
        placeholder="Select Option"
      />
    </div>
  );
};
