import Text from 'shared-ui/src/components/Text';
import SkeletonUI from 'shared-ui/src/components/SkeletonUI';
import 'shared-ui/src/reset.scss';
import React from 'react';

export default {
  title: 'Component/SkeletonUI',
  component: SkeletonUI,
};

export const Default = () => (
  <div style={{ padding: 20 }}>
    <SkeletonUI width={200} height={100} />
  </div>
);

export const Variant = () => (
  <div style={{ padding: 20 }}>
    <Text variant="h4" lineHeight="wide">
      Rect
    </Text>
    <SkeletonUI variant="rect" width={60} height={60} />
    <br />
    <Text variant="h4" lineHeight="wide">
      Circle
    </Text>
    <SkeletonUI variant="circle" width={60} height={60} />
  </div>
);

export const Animation = () => (
  <div style={{ padding: 20 }}>
    <Text variant="h4" lineHeight="wide">
      Wave
    </Text>
    <SkeletonUI animation="wave" width={200} height={100} />
    <br />
    <Text variant="h4" lineHeight="wide">
      Pulse
    </Text>
    <SkeletonUI animation="pulse" width={200} height={100} />
    <br />
    <Text variant="h4" lineHeight="wide">
      False
    </Text>
    <SkeletonUI animation="false" width={200} height={100} />
  </div>
);
