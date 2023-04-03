import React from 'react';
import Text from '../components/Text';
import '../reset.scss';

export default {
  title: 'Component/Text',
  component: Text,
};

export const Default = () => {
  return (
    <div style={{ padding: 20 }}>
      <Text>
        안녕하세요?
        <br />
        날씨가 참 좋아요.
      </Text>
    </div>
  );
};
