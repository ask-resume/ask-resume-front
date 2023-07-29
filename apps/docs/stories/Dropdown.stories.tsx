import Dropdown from 'shared-ui/src/components/Dropdown';
import Button from 'shared-ui/src/components/Button';
import Icon from 'shared-ui/src/components/Icon';
import 'shared-ui/src/reset.scss';

import { ColorMap } from 'shared-ui/src/config/colorMap';
import React from 'react';

export default {
  title: 'Component/Dropdown',
  component: Dropdown,
};

export const Default = () => {
  return (
    <div style={{ padding: 20 }}>
      <Dropdown
        button={<Button>Dropdown</Button>}
        menu={[
          {
            icon: <Icon.Arrow />,
            label: 'My Page',
          },
          {
            icon: <Icon.Wanning />,
            label: 'Log out',
          },
        ]}
      />
    </div>
  );
};
