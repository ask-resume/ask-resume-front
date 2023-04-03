const fontFamily = `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
"Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
"Malgun Gothic", sans-serif`;

enum FWeight {
  light = 300,
  regular = 400,
  medium = 500,
  bold = 700,
}

enum FSize {
  xx_small = `1.2rem`,
  x_small = `1.3rem`,
  small = `1.4rem`,
  medium = `1.6rem`,
  large = `1.8rem`,
  x_large = `2.1rem`,
  xx_large = `2.4rem`,
  xxx_large = `3.6rem`,
  xxxx_large = `4.8rem`,
}

enum FLineHeight {
  medium = `1.5em`,
  large = `1.75em`,
}

export { fontFamily, FWeight, FSize, FLineHeight };
