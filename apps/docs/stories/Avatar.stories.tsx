import React from 'react';
import Avatar from 'shared-ui/src/components/Avatar';
import Divider from 'shared-ui/src/components/Divider';
import Text from 'shared-ui/src/components/Text';
import 'shared-ui/src/reset.scss';

export default {
  title: 'Component/Avatar',
  component: Avatar,
};

export const Default = () => (
  <div style={{ padding: 20 }}>
    <Avatar src={null} name={'로제떡볶이'} />
    <Divider variant="vertical" />
    <Avatar src={'https://source.unsplash.com/random/150x150'} name={'로제떡볶이'} />
  </div>
);

export const Size = () => (
  <div style={{ padding: 20 }}>
    <div className="wrapper" style={{ paddingBottom: 20 }}>
      <Text lineHeight="wide">24px</Text>
      <Avatar size="xs" src={null} name={'로제떡볶이'} />
      <Divider variant="vertical" />
      <Avatar size="xs" src={'https://source.unsplash.com/random/150x150'} name={'김민수'} />
    </div>
    <div className="wrapper" style={{ paddingBottom: 20 }}>
      <Text lineHeight="wide">32px</Text>
      <Avatar size="sm" src={null} name={'로제떡볶이'} />
      <Divider variant="vertical" />
      <Avatar size="sm" src={'https://source.unsplash.com/random/150x150'} name={'김민수'} />
    </div>
    <div className="wrapper" style={{ paddingBottom: 20 }}>
      <Text lineHeight="wide">40px</Text>
      <Avatar size="md" src={null} name={'로제떡볶이'} />
      <Divider variant="vertical" />
      <Avatar size="md" src={'https://source.unsplash.com/random/150x150'} name={'김민수'} />
    </div>
    <div className="wrapper" style={{ paddingBottom: 20 }}>
      <Text lineHeight="wide">48px</Text>
      <Avatar size="lg" src={null} name={'로제떡볶이'} />
      <Divider variant="vertical" />
      <Avatar size="lg" src={'https://source.unsplash.com/random/150x150'} name={'김민수'} />
    </div>
    <div className="wrapper" style={{ paddingBottom: 20 }}>
      <Text lineHeight="wide">60px</Text>
      <Avatar size="xl" src={null} name={'로제떡볶이'} />
      <Divider variant="vertical" />
      <Avatar size="xl" src={'https://source.unsplash.com/random/150x150'} name={'김민수'} />
    </div>
    <div className="wrapper" style={{ paddingBottom: 20 }}>
      <Text lineHeight="wide">150px </Text>
      <Avatar size="xxl" src={null} name={'로제떡볶이'} />
      <Divider variant="vertical" />
      <Avatar size="xxl" src={'https://source.unsplash.com/random/150x150'} name={'김민수'} />
    </div>
  </div>
);
