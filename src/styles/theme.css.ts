import { createGlobalTheme } from '@vanilla-extract/css';
import { color, text } from '../tokens/color.css';
import {
  blue,
  green,
  indigo,
  monochrome,
  orange,
  primitive,
  red,
} from '../tokens/primitive.css';

createGlobalTheme('[data-theme=light]', color, {
  fill: {
    surface: {
      base: monochrome[10],
      raised: monochrome[15],
      invert: monochrome[100],
      dim: 'rgba(0, 0, 0, 0.08)',
    },
    interaction: {
      none: primitive.transparent,
      hover: 'rgba(250, 250, 250, 0.2)',
    },
  },
  text: {
    primary: monochrome[100],
    secondary: monochrome[80],
    tertiary: monochrome[60],
    status: {
      disabled: monochrome[40],
      invert: monochrome[10],
    },
    static: {
      white: monochrome[10],
      black: monochrome[100],
    },
  },
  line: {
    outline: monochrome[25],
    divider: monochrome[20],
  },
  semantic: {
    neutral: {
      emphasized: monochrome[100],
      weak: monochrome[20],
      text: text.primary,
    },
    info: {
      emphasized: blue[50],
      weak: blue[10],
      text: blue[50],
    },
    highlight: {
      emphasized: indigo[50],
      weak: indigo[10],
      text: indigo[50],
    },
    positive: {
      emphasized: green[50],
      weak: green[10],
      text: green[50],
    },
    caution: {
      emphasized: orange[50],
      weak: orange[10],
      text: orange[50],
    },
    negative: {
      emphasized: red[50],
      weak: red[10],
      text: red[50],
    },
  },
});

createGlobalTheme('[data-theme=dark]', color, {
  fill: {
    surface: {
      base: monochrome[100],
      raised: monochrome[95],
      invert: monochrome[10],
      dim: 'rgba(0, 0, 0, 0.08)',
    },
    interaction: {
      none: primitive.transparent,
      hover: 'rgba(10, 10, 10, 0.2)',
    },
  },
  text: {
    primary: monochrome[10],
    secondary: monochrome[25],
    tertiary: monochrome[40],
    status: {
      disabled: monochrome[60],
      invert: monochrome[100],
    },
    static: {
      white: monochrome[10],
      black: monochrome[100],
    },
  },
  line: {
    outline: monochrome[85],
    divider: monochrome[90],
  },
  semantic: {
    neutral: {
      emphasized: monochrome[10],
      weak: monochrome[90],
      text: text.primary,
    },
    info: {
      emphasized: blue[50],
      weak: blue[90],
      text: blue[30],
    },
    highlight: {
      emphasized: indigo[50],
      weak: indigo[90],
      text: indigo[30],
    },
    positive: {
      emphasized: green[50],
      weak: green[90],
      text: green[30],
    },
    caution: {
      emphasized: orange[50],
      weak: orange[90],
      text: orange[30],
    },
    negative: {
      emphasized: red[50],
      weak: red[90],
      text: red[30],
    },
  },
});

createGlobalTheme('[data-theme=darkest]', color, {
  fill: {
    surface: {
      base: primitive.pureBlack,
      raised: monochrome[100],
      invert: primitive.pureWhite,
      dim: 'rgba(0, 0, 0, 0.16)',
    },
    interaction: {
      none: primitive.transparent,
      hover: 'rgba(10, 10, 10, 0.2)',
    },
  },
  text: {
    primary: primitive.pureWhite,
    secondary: monochrome[25],
    tertiary: monochrome[40],
    status: {
      disabled: monochrome[60],
      invert: primitive.pureBlack,
    },
    static: {
      white: primitive.pureWhite,
      black: primitive.pureBlack,
    },
  },
  line: {
    outline: monochrome[90],
    divider: monochrome[80],
  },
  semantic: {
    neutral: {
      emphasized: primitive.pureWhite,
      weak: monochrome[90],
      text: text.primary,
    },
    info: {
      emphasized: blue[50],
      weak: blue[90],
      text: blue[50],
    },
    highlight: {
      emphasized: indigo[50],
      weak: indigo[90],
      text: indigo[50],
    },
    positive: {
      emphasized: green[50],
      weak: green[90],
      text: green[50],
    },
    caution: {
      emphasized: orange[50],
      weak: orange[90],
      text: orange[50],
    },
    negative: {
      emphasized: red[50],
      weak: red[90],
      text: red[50],
    },
  },
});
