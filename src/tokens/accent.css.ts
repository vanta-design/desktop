import { createGlobalThemeContract } from '@vanilla-extract/css';

export const accent = createGlobalThemeContract(
  {
    fill: {
      base: 'fill-base',
      accent: 'fill-accent',
    },
    text: {
      base: 'text-base',
      accent: 'text-accent',
    },
  },
  (value) => `accent-${value}`,
);
