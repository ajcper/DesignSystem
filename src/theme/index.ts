import {colors, mediaQueries, text, layers } from './themeValues'

interface Colors {
  disabledColor: string;
  primaryColor: string;
}

export interface ThemeInterface {
  colors: Colors;
}

const theme: ThemeInterface = {
  colors,
  mq: mediaQueries,
  text,
  layers,
};

export default theme;
