import { createGlobalTheme } from '@vanilla-extract/css';
import { resetGlobalStyle } from '@/utils/style';
import { color, fill, text } from '../tokens/color.css';
import {
  blue,
  green,
  indigo,
  monochrome,
  orange,
  primitive,
  red,
} from '../tokens/primitive.css';

resetGlobalStyle('[data-theme]', {
  color: color.text.primary,
});

createGlobalTheme('[data-theme=light]', color, {
  fill: {
    surface: {
      base: primitive.pureWhite,
      subtle: monochrome[100],
      invert: primitive.pureBlack,
      dim: 'rgba(0, 0, 0, 0.16)',
      baseGlass: 'rgba(255, 255, 255, 0.70)',
      subtleGlass: 'rgba(252, 252, 252, 0.70)',
    },
    interaction: {
      base: fill.surface.subtle,
      raised: monochrome[200],
      hoverOverlay: 'rgba(10, 10, 10, 0.01)',
    },
  },
  text: {
    primary: monochrome[1400],
    secondary: monochrome[1000],
    tertiary: monochrome[800],
    status: {
      disabled: monochrome[600],
      invert: monochrome[100],
    },
    static: {
      white: monochrome[100],
      black: monochrome[1400],
    },
  },
  line: {
    outline: monochrome[200],
    divider: monochrome[300],
  },
  semantic: {
    neutral: {
      primary: monochrome[1400],
      secondary: monochrome[300],
      text: text.primary,
    },
    info: {
      primary: blue[500],
      secondary: blue[100],
      text: blue[600],
    },
    highlight: {
      primary: indigo[500],
      secondary: indigo[100],
      text: indigo[600],
    },
    positive: {
      primary: green[500],
      secondary: green[100],
      text: green[600],
    },
    caution: {
      primary: orange[500],
      secondary: orange[100],
      text: orange[600],
    },
    negative: {
      primary: red[500],
      secondary: red[100],
      text: red[600],
    },
  },
});

createGlobalTheme('[data-theme=dark]', color, {
  fill: {
    surface: {
      base: monochrome[1400],
      subtle: monochrome[1300],
      invert: primitive.pureWhite,
      dim: 'rgba(0, 0, 0, 0.16)',
      baseGlass: 'rgba(15, 15, 15, 0.7)',
      subtleGlass: 'rgba(17, 17, 18, 0.7)',
    },
    interaction: {
      base: fill.surface.subtle,
      raised: monochrome[1200],
      hoverOverlay: 'rgba(250, 250, 250, 0.1)',
    },
  },
  text: {
    primary: monochrome[100],
    secondary: monochrome[500],
    tertiary: monochrome[700],
    status: {
      disabled: monochrome[900],
      invert: monochrome[1400],
    },
    static: {
      white: monochrome[100],
      black: monochrome[1400],
    },
  },
  line: {
    outline: monochrome[1200],
    divider: monochrome[1100],
  },
  semantic: {
    neutral: {
      primary: monochrome[100],
      secondary: monochrome[1200],
      text: text.primary,
    },
    info: {
      primary: blue[500],
      secondary: blue[1000],
      text: blue[400],
    },
    highlight: {
      primary: indigo[500],
      secondary: indigo[1000],
      text: indigo[400],
    },
    positive: {
      primary: green[500],
      secondary: green[1000],
      text: green[400],
    },
    caution: {
      primary: orange[500],
      secondary: orange[1000],
      text: orange[400],
    },
    negative: {
      primary: red[500],
      secondary: red[1000],
      text: red[400],
    },
  },
});

createGlobalTheme('[data-theme=darkest]', color, {
  fill: {
    surface: {
      base: primitive.pureBlack,
      subtle: primitive.pureBlack,
      invert: primitive.pureWhite,
      dim: 'rgba(0, 0, 0, 0.16)',
      baseGlass: 'rgba(0, 0, 0, 0.7)',
      subtleGlass: 'rgba(0, 0, 0, 0.7)',
    },
    interaction: {
      base: fill.surface.subtle,
      raised: monochrome[1400],
      hoverOverlay: 'rgba(250, 250, 250, 0.1)',
    },
  },
  text: {
    primary: primitive.pureWhite,
    secondary: monochrome[400],
    tertiary: monochrome[600],
    status: {
      disabled: monochrome[800],
      invert: primitive.pureBlack,
    },
    static: {
      white: primitive.pureWhite,
      black: primitive.pureBlack,
    },
  },
  line: {
    outline: monochrome[1200],
    divider: monochrome[1300],
  },
  semantic: {
    neutral: {
      primary: primitive.pureWhite,
      secondary: monochrome[1400],
      text: text.primary,
    },
    info: {
      primary: blue[600],
      secondary: blue[1200],
      text: blue[600],
    },
    highlight: {
      primary: indigo[600],
      secondary: indigo[1200],
      text: indigo[600],
    },
    positive: {
      primary: green[600],
      secondary: green[1200],
      text: green[600],
    },
    caution: {
      primary: orange[600],
      secondary: orange[1200],
      text: orange[600],
    },
    negative: {
      primary: red[600],
      secondary: red[1200],
      text: red[600],
    },
  },
});
