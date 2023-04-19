import Divider from '../components/Divider';
import Text from '../components/Text';
import '../reset.scss';

import { ColorMap } from '../config/colorMap';
import React from 'react';

export default {
  title: 'Component/Divider',
  component: Divider,
};

export const Default = () => {
  return (
    <div style={{ padding: 20 }}>
      <Text>
        위
        <Divider />
        아래
      </Text>
    </div>
  );
};

export const DefaultSize = () => {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Size 12px</Text>
          <Text>
            위
            <Divider size={12} />
            아래
          </Text>
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Size 24px</Text>
          <Text>
            위
            <Divider size={24} />
            아래
          </Text>
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Size 32px</Text>
          <Text>
            위
            <Divider size={32} />
            아래
          </Text>
        </div>
      </div>
    </div>
  );
};

export const Vertical = () => {
  return (
    <div style={{ padding: 20 }}>
      <Text>
        왼쪽
        <Divider variant="vertical" />
        오른쪽
      </Text>
    </div>
  );
};

export const VerticalSize = () => {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Size 12px</Text>
          <Text>
            위
            <Divider variant="vertical" size={12} />
            아래
          </Text>
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Size 24px</Text>
          <Text>
            위
            <Divider variant="vertical" size={24} />
            아래
          </Text>
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Size 32px</Text>
          <Text>
            위
            <Divider variant="vertical" size={32} />
            아래
          </Text>
        </div>
      </div>
    </div>
  );
};

export const Color = () => {
  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Blue Color</Text>
          <Text>
            위
            <Divider color={ColorMap.blue_4} />
            아래
          </Text>
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Red Color</Text>
          <Text>
            위
            <Divider color={ColorMap.red_8} />
            아래
          </Text>
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Orange Color</Text>
          <Text>
            위
            <Divider color={ColorMap.orange_3} />
            아래
          </Text>
        </div>
      </div>
    </div>
  );
};

export const Width = () => {
  return (
    // Default
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Default Width 10%</Text>
          <Text>
            위
            <Divider width={10} />
            아래
          </Text>
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Default Width 50%</Text>
          <Text>
            위
            <Divider width={50} />
            아래
          </Text>
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Default Width 100%</Text>
          <Text>
            위
            <Divider width={100} />
            아래
          </Text>
        </div>
      </div>

      {/* Vertical */}
      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Vertical Width 1px</Text>
          <Text>
            왼쪽
            <Divider width={1} variant="vertical" />
            오른쪽
          </Text>
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Vertical Width 5px</Text>
          <Text>
            왼쪽
            <Divider width={5} variant="vertical" />
            오른쪽
          </Text>
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Vertical Width 10px</Text>
          <Text>
            왼쪽
            <Divider width={10} variant="vertical" />
            오른쪽
          </Text>
        </div>
      </div>
    </div>
  );
};

export const Height = () => {
  return (
    // Vertical
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Vertical Height 10px</Text>
          <Text>
            왼쪽
            <Divider height={10} variant="vertical" />
            오른쪽
          </Text>
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Vertical Height 50px</Text>
          <Text>
            왼쪽
            <Divider height={50} variant="vertical" />
            오른쪽
          </Text>
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Vertical Height 100px</Text>
          <Text>
            왼쪽
            <Divider height={100} variant="vertical" />
            오른쪽
          </Text>
        </div>
      </div>

      {/* Default */}
      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Default Height 1px</Text>
          <Text>
            위
            <Divider height={1} />
            아래
          </Text>
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Default Height 5px</Text>
          <Text>
            위
            <Divider height={5} />
            아래
          </Text>
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <Text>Default Height 10px</Text>
          <Text>
            위
            <Divider height={10} />
            아래
          </Text>
        </div>
      </div>
    </div>
  );
};
