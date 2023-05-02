import Text from 'shared-ui/src/components/Text';
import 'shared-ui/src/reset.scss';
import 'shared-ui/src/index.scss';
import { ShadowMap } from 'shared-ui/src/config/colorMap';
import React from 'react';

export default {
  title: 'Styleguide/Shadow',
};

export const Shadow = () => (
  <>
    <ShadowBox name="one" />
    <ShadowBox name="two" />
    <ShadowBox name="three" />
    <ShadowBox name="four" />
    <ShadowBox name="five" />
    <ShadowBox name="six" />
    <ShadowBox name="seven" />
    <ShadowBox name="inner" />
  </>
);

interface ShadowBox {
  name: ShadowMap;
}

const ShadowBox = ({ name }: ShadowBox) => {
  const boxShadow = ShadowMap[name as keyof typeof ShadowMap];

  return (
    <div
      style={{
        boxShadow,
        padding: '2rem',
        margin: '1rem',
        backgroundColor: '#fff',
        border: '1px solid #ced4da',
        overflow: 'hidden',
      }}
    >
      <Text size="small" weight="medium" variant="block" style={{ padding: '4px 0' }}>
        {name}
      </Text>
    </div>
  );
};
