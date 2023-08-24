export const ColorMap = {
  currentColor: 'currentColor',

  // Primary Blue
  blue_0: '#F3F9FF',
  blue_1: '#E6F2FF',
  blue_2: '#C5E1FF',
  blue_3: '#92C7FF',
  blue_4: '#5FACFF',
  blue_5: '#1184FF',
  blue_6: '#0C6CD3',
  blue_7: '#004C9E',
  blue_8: '#003267',

  // Gray
  white: '#fff',
  gray_0: '#F9F9FB',
  gray_1: '#EFEFF2',
  gray_2: '#EBEBEE',
  gray_3: '#E0E0E5',
  gray_4: '#CACACC',
  gray_5: '#B1B1B3',
  gray_6: '#767679',
  gray_7: '#444348',
  gray_8: '#15141A',
  blue_gray: '#8F8F9C',

  // System Color
  active_green: '#69DB7C',
  inactive_red: '#FF8787',
  warning_red_1: '#FFF0EE',
  warning_red_2: '#F8D0D1',

  // Green
  green: '#34C759',
  thumbs_green: '#40C057',
  text_green: '#00A21D',

  // Red
  red_5: '#FF6B6B',
  red_6: '#FA5252',
  red_7: '#F03E3E',
  red_8: '#E03131',
  red_9: '#C92A2A',
  red_10: '#A51111',

  // Orange
  orange_1: '#FFECE2',
  orange_2: '#FAB005',
  orange_3: '#F38119',

  // transparent
  transparent: 'transparent',
} as const;

export type ColorMap = keyof typeof ColorMap | (typeof ColorMap)[keyof typeof ColorMap];

export const ShadowMap = {
  one: `0px 0px 1px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.24)`,
  two: `0px 0px 2px rgba(0, 0, 0, 0.12), 0px 0px 16px rgba(0, 0, 0, 0.12)`,
  three: `0px 3px 8px rgba(0, 0, 0, 0.15), 0px 1px 1px rgba(0, 0, 0, 0.06)`,
  four: `0px 1px 1px rgba(0, 0, 0, 0.06), 0px 3px 12px rgba(0, 0, 0, 0.15)`,
  five: `0px 4px 12px rgba(0, 0, 0, 0.16), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 1px 4px rgba(0, 0, 0, 0.08)`,
  six: `0px 1px 2px rgba(0, 0, 0, 0.06), 0px 3px 12px rgba(0, 0, 0, 0.36)`,
  seven: `0px 1px 2px rgba(0, 0, 0, 0.2), 0px 8px 20px rgba(0, 0, 0, 0.24)`,
  inner: `inset 0px 2px 3px rgba(0, 0, 0, 0.12)`,
} as const;

export type ShadowMap = keyof typeof ShadowMap | (typeof ShadowMap)[keyof typeof ShadowMap];
