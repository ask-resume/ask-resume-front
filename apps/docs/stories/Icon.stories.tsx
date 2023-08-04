import React, { useEffect, useState } from 'react';
import Text from 'shared-ui/src/components/Text';
import Divider from 'shared-ui/src/components/Divider';
import StoriesIcon from 'shared-ui/src/components/Icon';

import 'shared-ui/src/reset.scss';
import { ColorMap } from 'shared-ui/src/config/colorMap';

export default {
  title: 'Styleguide/Icon',
};

interface IconProps {
  children: React.ReactNode;
  name: string;
  variantName?: string;
}

const IconBlock = ({ children, name, variantName }: IconProps) => (
  <div
    style={{
      display: 'inline-block',
      width: 120,
      height: 'max-content',
      padding: 8,
      margin: 8,
      textAlign: 'center',
      borderRadius: 6,
      backgroundColor: '#fff',
      boxShadow: '0 2px 6px rgba(0,0,0,0.16)',
      overflow: 'hidden',
      fontSize: 12,
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 60,
        marginBottom: 6,
      }}
    >
      {children}
    </div>
    <Text size="xx_small">{name}</Text>
    <Divider />
    <Text size="xx_small" textColor={ColorMap.gray_6}>
      variant:
    </Text>
    <Text size="xx_small" weight="medium" lineHeight="narrow" textColor={ColorMap.blue_6}>
      {variantName ? variantName : <span style={{ color: '#8B8B8B' }}>-</span>}
    </Text>
  </div>
);

const execFunc = (func: any, props: any) => {
  return func(props);
};

const IconList: Record<string, string[]> = {
  AirPlane: [''],
  Arrow: ['arrow', 'chevron', 'chevron-alt', 'solid'],
  Check: ['single', 'double', 'alt', 'circle', 'circle-ghost'],
  Edit: ['default', 'box'],
  LogOut: [''],
  Refresh: [''],
  Setting: [''],
  User: [''],
  Wanning: ['circle', 'circle-ghost'],
};

export const Default = () => {
  const [icons, setIcons] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const newIcons: JSX.Element[] = [];
    Object.entries(StoriesIcon)
      .sort()
      .forEach(([name, icon]) => {
        const iconList = IconList[name];

        if (iconList !== undefined) {
          iconList.forEach(variant => {
            newIcons.push(
              <IconBlock key={`${name}-${variant}`} name={name} variantName={variant}>
                {execFunc(icon, { size: 40, variant: variant })}
              </IconBlock>,
            );
          });
        }
      });

    setIcons(newIcons);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <div
        className="icon-table"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(128px, 1fr))',
          gridGap: '12',
        }}
      >
        {icons}
      </div>
    </div>
  );
};

export const Rotate = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: 20 }}>
      <StoriesIcon.Arrow variant="arrow" size={40} rotate={90} color={ColorMap.red_7} />
      <Divider variant="vertical" />
      <StoriesIcon.Arrow variant="arrow" size={40} rotate={45} color={ColorMap.green} />
      <Divider variant="vertical" />
      <StoriesIcon.Arrow variant="arrow" size={40} rotate={320} color={ColorMap.blue_7} />
    </div>
  );
};
