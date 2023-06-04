export const getRandomColor = () => {
  const colors = Object.values(ColorMap);
  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
};

const ColorMap = {
  // Primary Blue
  blue_5: '#1184FF',
  blue_6: '#0C6CD3',
  blue_7: '#004C9E',
  blue_8: '#003267',

  // Gray
  gray_5: '#B1B1B3',
  gray_6: '#767679',
  gray_7: '#444348',
  gray_8: '#15141A',
  blue_gray: '#8F8F9C',

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
} as const;
