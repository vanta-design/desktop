import { createGlobalTheme } from '@vanilla-extract/css';
import { accent } from '../tokens/accent.css';
import { semantic, text } from '../tokens/color.css';

createGlobalTheme('[data-accent=monochrome]', accent, {
  fill: {
    base: semantic.neutral.secondary,
    accent: semantic.neutral.primary,
  },
  text: {
    base: text.status.invert,
    accent: semantic.neutral.text,
  },
});

createGlobalTheme('[data-accent=green]', accent, {
  fill: {
    base: semantic.positive.secondary,
    accent: semantic.positive.primary,
  },
  text: {
    base: text.static.white,
    accent: semantic.positive.text,
  },
});

createGlobalTheme('[data-accent=blue]', accent, {
  fill: {
    base: semantic.info.secondary,
    accent: semantic.info.primary,
  },
  text: {
    base: text.static.white,
    accent: semantic.info.text,
  },
});

createGlobalTheme('[data-accent=indigo]', accent, {
  fill: {
    base: semantic.highlight.secondary,
    accent: semantic.highlight.primary,
  },
  text: {
    base: text.static.white,
    accent: semantic.highlight.text,
  },
});
