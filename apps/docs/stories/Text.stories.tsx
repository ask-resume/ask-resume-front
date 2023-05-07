import React from 'react';
import Text from 'shared-ui/src/components/Text';
import 'shared-ui/src/reset.scss';

export default {
  title: 'Component/Text',
  component: Text,
};

export const Default = () => {
  return (
    <div style={{ padding: 20 }}>
      <Text>
        Text
        <br />
        Default Text
      </Text>
    </div>
  );
};

export const Variant = () => {
  return (
    <div style={{ padding: 20 }}>
      <header style={{ color: '#1C7ED6', paddingBottom: 8 }}>
        <Text variant="h4">Title</Text>
      </header>
      <Text variant="h1">h1 Title</Text>
      <Text variant="h2">h2 Title</Text>
      <Text variant="h3">h3 Title</Text>
      <Text variant="h4">h4 Title</Text>
      <Text variant="h5">h5 Title</Text>

      <header style={{ color: '#1C7ED6', paddingTop: 48, paddingBottom: 8 }}>
        <Text variant="h4">Font Size</Text>
      </header>
      <Text variant="block" size="xx_small">
        xx_small: 12px
      </Text>
      <Text variant="block" size="x_small">
        x-small: 13px
      </Text>
      <Text variant="block" size="small">
        small: 14px
      </Text>
      <Text variant="block" size="medium">
        medium: 16px
      </Text>
      <Text variant="block" size="large">
        large: 18px
      </Text>
      <Text variant="block" size="x_large">
        x_large: 21px
      </Text>
      <Text variant="block" size="xx_large">
        xx_large: 24px
      </Text>
      <Text variant="block" size="xxx_large">
        xxx_large: 36px
      </Text>
      <Text variant="block" size="xxxx_large">
        xxxx_large: 48px
      </Text>

      <header style={{ color: '#1C7ED6', paddingTop: 48, paddingBottom: 8 }}>
        <Text variant="h4">Font Weight</Text>
      </header>
      <Text variant="block" weight="light">
        light (300)
      </Text>
      <Text variant="block" weight="regular">
        regular (400)
      </Text>
      <Text variant="block" weight="medium">
        medium (500)
      </Text>
      <Text variant="block" weight="bold">
        bold (700)
      </Text>

      <header style={{ color: '#1C7ED6', paddingTop: 48, paddingBottom: 8 }}>
        <Text variant="h4">Line Height</Text>
      </header>
      <header style={{ paddingBottom: 8 }}>
        <Text variant="h5">Narrow</Text>
      </header>
      <Text variant="block" lineHeight="narrow">
        The Text component receives className, children, variant, htmlFor, weight, lineHeight, size,
        align, and textColor as arguments. Use htmlFor when variant is "label".
      </Text>
      <header style={{ paddingTop: 16, paddingBottom: 8 }}>
        <Text variant="h5">Wide</Text>
      </header>
      <Text variant="block" lineHeight="wide">
        The Text component receives className, children, variant, htmlFor, weight, lineHeight, size,
        align, and textColor as arguments. Use htmlFor when variant is "label".
      </Text>
      <header style={{ color: '#1C7ED6', paddingTop: 48, paddingBottom: 8 }}>
        <Text variant="h4">Text Align</Text>
      </header>
      <header style={{ paddingBottom: 8 }}>
        <Text variant="h5">start</Text>
      </header>
      <Text align="start">
        The Text component receives className, children, variant, htmlFor, weight, lineHeight, size,
        align, and textColor as arguments. Use htmlFor when variant is "label".
      </Text>
      <header style={{ paddingTop: 16, paddingBottom: 8 }}>
        <Text variant="h5">center</Text>
      </header>
      <Text align="center">
        The Text component receives className, children, variant, htmlFor, weight, lineHeight, size,
        align, and textColor as arguments. Use htmlFor when variant is "label".
      </Text>
      <header style={{ paddingTop: 16, paddingBottom: 8 }}>
        <Text variant="h5">end</Text>
      </header>
      <Text align="end">
        The Text component receives className, children, variant, htmlFor, weight, lineHeight, size,
        align, and textColor as arguments. Use htmlFor when variant is "label".
      </Text>
    </div>
  );
};
