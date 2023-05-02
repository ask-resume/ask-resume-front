import { useState } from '@storybook/addons';

import Divider from 'shared-ui/src/components/Divider';
import Tabs from 'shared-ui/src/components/Tabs';
import TabItem from 'shared-ui/src/components/Tabs/TabItem';
import Icon from 'shared-ui/src/components/Icon';
import 'shared-ui/src/reset.scss';
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
        <TabItem label="Item 1" onClick={() => setSelect(false)} selected={!select} />
        <TabItem label="Item 2" onClick={() => setSelect(true)} selected={select} />
      </Tabs>
      <Divider />
      {select ? 'Item 2' : 'Item 1'}
    </div>
  );
};

export const TabsSize = () => {
  const [select, setSelect] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Tabs size="xs" style={{ width: '500px' }}>
        <TabItem label="Tab size: xs" onClick={() => setSelect(false)} selected={!select} />
        <TabItem label="Tab size: xs" onClick={() => setSelect(true)} selected={select} />
      </Tabs>

      <Divider size={40} />

      <Tabs size="sm">
        <TabItem label="Tab size: sm" onClick={() => setSelect(false)} selected={!select} />
        <TabItem label="Tab size: sm" onClick={() => setSelect(true)} selected={select} />
      </Tabs>

      <Divider size={40} />

      <Tabs size="md">
        <TabItem label="Tab size: md" onClick={() => setSelect(false)} selected={!select} />
        <TabItem label="Tab size: md" onClick={() => setSelect(true)} selected={select} />
      </Tabs>
    </div>
  );
};

export const TabItemSize = () => {
  const [select, setSelect] = useState(false);
  return (
    <div style={{ padding: 20 }}>
      <Tabs style={{ width: '500px' }}>
        <TabItem
          label="TabItem size: xs"
          size="xs"
          onClick={() => setSelect(false)}
          selected={!select}
        />
        <TabItem
          label="TabItem size: xs"
          size="xs"
          onClick={() => setSelect(true)}
          selected={select}
        />
      </Tabs>

      <Divider size={40} />

      <Tabs>
        <TabItem
          label="TabItem size: sm"
          size="sm"
          onClick={() => setSelect(false)}
          selected={!select}
        />
        <TabItem
          label="TabItem size: sm"
          size="sm"
          onClick={() => setSelect(true)}
          selected={select}
        />
      </Tabs>

      <Divider size={40} />

      <Tabs>
        <TabItem
          label="TabItem size: md"
          size="md"
          onClick={() => setSelect(false)}
          selected={!select}
        />
        <TabItem
          label="TabItem size: md"
          size="md"
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
    <div style={{ padding: 20, width: '500px' }}>
      <Tabs size="md">
        {tabValueList.map((v, idx) => (
          <TabItem
            label={v}
            key={idx}
            size="md"
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
