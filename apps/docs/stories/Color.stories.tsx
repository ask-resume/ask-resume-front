import Text from 'shared-ui/src/components/Text';
import 'shared-ui/src/reset.scss';
import 'shared-ui/src/index.scss';
import { ColorMap } from 'shared-ui/src/config/colorMap';
import React from 'react';

export default {
  title: 'Styleguide/Color',
};

export const Color = () => (
  <div style={{ padding: 20 }}>
    <Text>Primary Blue</Text>
    <div style={{ marginBottom: 30 }}>
      <Palette name="blue_0" />
      <Palette name="blue_1" />
      <Palette name="blue_2" />
      <Palette name="blue_3" />
      <Palette name="blue_4" />
      <Palette name="blue_5" />
      <Palette name="blue_6" />
      <Palette name="blue_7" />
      <Palette name="blue_8" />
    </div>

    <Text>Gray</Text>
    <div style={{ marginBottom: 30 }}>
      <Palette name="gray_0" />
      <Palette name="gray_0" />
      <Palette name="gray_1" />
      <Palette name="gray_2" />
      <Palette name="gray_3" />
      <Palette name="gray_4" />
      <Palette name="gray_5" />
      <Palette name="gray_6" />
      <Palette name="gray_7" />
      <Palette name="gray_8" />
      <Palette name="blue_gray" />
    </div>

    <Text>System Color</Text>
    <div style={{ marginBottom: 30 }}>
      <Palette name="active_green" />
      <Palette name="inactive_red" />
      <Palette name="warning_red_1" />
      <Palette name="warning_red_2" />
    </div>

    <Text>Green</Text>
    <div style={{ marginBottom: 30 }}>
      <Palette name="green" />
      <Palette name="thumbs_green" />
      <Palette name="text_green" />
    </div>

    <Text>Red</Text>
    <div style={{ marginBottom: 30 }}>
      <Palette name="red_5" />
      <Palette name="red_6" />
      <Palette name="red_7" />
      <Palette name="red_8" />
      <Palette name="red_9" />
      <Palette name="red_10" />
    </div>

    <Text>Orange</Text>
    <div style={{ marginBottom: 30 }}>
      <Palette name="orange_1" />
      <Palette name="orange_2" />
      <Palette name="orange_2" />
    </div>
  </div>
);

interface Palette {
  name: ColorMap;
}

const Palette = ({ name }: Palette) => {
  const color = ColorMap[name as keyof typeof ColorMap];

  return (
    <div
      style={{
        display: 'inline-block',
        width: 150,
        height: 190,
        marginTop: 8,
        marginRight: 10,
        textAlign: 'center',
        borderRadius: 4,
        backgroundColor: '#fff',
        border: '1px solid #ced4da',
        overflow: 'hidden',
        fontSize: 12,
      }}
    >
      <div
        style={{
          width: '100%',
          height: 130,
          backgroundColor: color,
          marginBottom: 6,
        }}
      />

      <Text size="small" weight="medium" variant="block" style={{ padding: '4px 0' }}>
        {name}
      </Text>
      <Text size="xx_small" weight="regular" color="#8B8B8B">
        {color}
      </Text>
    </div>
  );
};
