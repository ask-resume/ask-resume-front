import { useState } from '@storybook/addons';

import Divider from '../components/Divider';
import Tabs from '../components/Tabs';
import TabItem from '../components/Tabs/TabItem';
import Icon from '../components/Icon';
import '../reset.scss';
import React from 'react';

export default {
  title: 'Component/Tabs',
  component: Tabs,
};

export const Default = () => {
  const [select, setSelect] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Tabs>
        <TabItem label="Item 1" width={100} onClick={() => setSelect(false)} selected={!select} />
        <TabItem label="Item 2" width={100} onClick={() => setSelect(true)} selected={select} />
      </Tabs>
      <Divider />
      {select ? 'Item 2' : 'Item 1'}
    </div>
  );
};

export const Size = () => {
  const [select, setSelect] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Tabs size="xs" style={{ width: '500px' }}>
        <TabItem
          label="extra-small"
          width={100}
          onClick={() => setSelect(false)}
          selected={!select}
        />
        <TabItem
          label="extra-small"
          width={100}
          onClick={() => setSelect(true)}
          selected={select}
        />
      </Tabs>

      <Divider size={40} />

      <Tabs size="sm">
        <TabItem label="small" width={100} onClick={() => setSelect(false)} selected={!select} />
        <TabItem label="small" width={100} onClick={() => setSelect(true)} selected={select} />
      </Tabs>

      <Divider size={40} />

      <Tabs>
        <TabItem label="medium" width={100} onClick={() => setSelect(false)} selected={!select} />
        <TabItem label="medium" width={100} onClick={() => setSelect(true)} selected={select} />
      </Tabs>

      <Divider size={40} />

      <Tabs>
        <TabItem
          label="width: 120px"
          width={120}
          onClick={() => setSelect(false)}
          selected={!select}
        />
        <TabItem
          label="width: 120px"
          width={120}
          onClick={() => setSelect(true)}
          selected={select}
        />
      </Tabs>

      <Divider size={40} />

      <Tabs>
        <TabItem
          label="width: 200px"
          width={200}
          onClick={() => setSelect(false)}
          selected={!select}
        />
        <TabItem
          label="width: 200px"
          width={200}
          onClick={() => setSelect(true)}
          selected={select}
        />
      </Tabs>
    </div>
  );
};

export const Scroll = () => {
  const [select, setSelect] = useState(0);
  const tabValueList = [...Array(10)].map((value, idx) => `Item ${idx + 1}`);

  return (
    <div style={{ padding: 20 }}>
      <Tabs>
        {tabValueList.map((v, idx) => (
          <TabItem
            label={v}
            key={idx}
            width={200}
            onClick={() => setSelect(idx)}
            selected={idx === select}
          />
        ))}
      </Tabs>
      <Divider />
      Item: {select + 1}
    </div>
  );
};
