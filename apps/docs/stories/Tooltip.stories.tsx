import React from 'react';
import Button from 'shared-ui/src/components/Button';
import Divider from 'shared-ui/src/components/Divider';
import Tooltip from 'shared-ui/src/components/Tooltip';
import 'shared-ui/src/reset.scss';

export default {
  title: 'Component/Tooltip',
  component: Tooltip,
};

export const Default = () => {
  return (
    <div style={{ padding: 20 }}>
      <Tooltip withArrow={false} tooltipText={'TEST'} placement="_right">
        <Button size="md">Hover your cursor!</Button>
      </Tooltip>
    </div>
  );
};

export const NoArrow = () => {
  return (
    <div style={{ padding: 20 }}>
      <Tooltip tooltipText={'TEST'} placement="_right">
        <Button size="md">Hover your cursor!</Button>
      </Tooltip>
    </div>
  );
};

export const placement = () => {
  return (
    <div style={{ padding: 150 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '400px',
        }}
      >
        <Tooltip tooltipText={'top left alignment'} placement="_top-left">
          <Button size="md">top left</Button>
        </Tooltip>
        <Tooltip tooltipText={'align top'} placement="_top">
          <Button size="md">top</Button>
        </Tooltip>
        <Tooltip tooltipText={'align top right'} placement="_top-right">
          <Button size="md">top right</Button>
        </Tooltip>
      </div>

      <Divider size={20} width={400} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '400px',
        }}
      >
        <Tooltip tooltipText={'Align left'} placement="_left">
          <Button size="md">left</Button>
        </Tooltip>
        <Tooltip tooltipText={'align right'} placement="_right">
          <Button size="md">right</Button>
        </Tooltip>
      </div>

      <Divider size={20} width={400} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '400px',
        }}
      >
        <Tooltip tooltipText={'align bottom left'} placement="_bottom-left">
          <Button size="md">bottom left</Button>
        </Tooltip>
        <Tooltip tooltipText={'center bottom alignment'} placement="_bottom">
          <Button size="md">bottom</Button>
        </Tooltip>
        <Tooltip tooltipText={'align bottom right'} placement="_bottom-right">
          <Button size="md">bottom right</Button>
        </Tooltip>
      </div>
    </div>
  );
};
