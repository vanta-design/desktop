import { createGlobalTheme } from '@vanilla-extract/css';
import { accent } from '../tokens/accent.css';
import { semantic, text } from '../tokens/color.css';

createGlobalTheme('[data-accent=monochrome]', accent, {
  fill: {
    primary: semantic.neutral.emphasized,
    secondary: semantic.neutral.weak,
  },
  text: {
    base: text.status.invert,
    accent: semantic.neutral.text,
  },
});

createGlobalTheme('[data-accent=green]', accent, {
  fill: {
    primary: semantic.positive.emphasized,
    secondary: semantic.positive.weak,
  },
  text: {
    base: text.static.white,
    accent: semantic.positive.text,
  },
});

createGlobalTheme('[data-accent=blue]', accent, {
  fill: {
    primary: semantic.info.emphasized,
    secondary: semantic.info.weak,
  },
  text: {
    base: text.static.white,
    accent: semantic.info.text,
  },
});

createGlobalTheme('[data-accent=indigo]', accent, {
  fill: {
    primary: semantic.highlight.emphasized,
    secondary: semantic.highlight.weak,
  },
  text: {
    base: text.static.white,
    accent: semantic.highlight.text,
  },
});
