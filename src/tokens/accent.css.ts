import { createGlobalThemeContract } from '@vanilla-extract/css';

export const accent = createGlobalThemeContract(
  {
    fill: {
      primary: 'fill-primary',
      secondary: 'fill-secondary',
    },
    text: {
      base: 'text-base',
      accent: 'text-accent',
    },
  },
  (value) => `accent-${value}`,
);

export const { fill, text } = accent;
