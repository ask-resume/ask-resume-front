import React from 'react';
import InputSelect from '../components/InputSelect';
import { ColorMap } from '../config/colorMap';

import '../reset.scss';

export default {
  title: 'Component/Dropdown',
  component: InputSelect,
};

const stringTypeOptions = ['Option 1', 'Option 2', 'Option 3'];
const objTypeOptions = [
  {
    id: 1,
    name: '최고 경영자',
  },
  {
    id: 2,
    name: '최고 지속 가능성 임원',
  },
  {
    id: 3,
    name: '일반 및 운영 관리자',
  },
  {
    id: 4,
    name: '입법자',
  },
  {
    id: 5,
    name: '광고 및 프로모션 관리자',
  },
  {
    id: 6,
    name: '마케팅 관리자',
  },
  {
    id: 7,
    name: '영업 관리자',
  },
  {
    id: 8,
    name: '홍보 관리자',
  },
  {
    id: 9,
    name: '모금 관리자',
  },
  {
    id: 10,
    name: '관리 서비스 관리자',
  },
];

export const Default = () => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div style={{ padding: 20 }}>
      <InputSelect
        inputValue={inputValue}
        onChangeInputValue={currInputValue => setInputValue(currInputValue)}
        options={stringTypeOptions}
        placeholder="Job"
      />
    </div>
  );
};

export const ObjDefault = () => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div style={{ padding: 20 }}>
      <InputSelect
        inputValue={inputValue}
        onChangeInputValue={currInputValue => setInputValue(currInputValue)}
        options={objTypeOptions}
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
