import { createGlobalThemeContract } from '@vanilla-extract/css';

export const color = createGlobalThemeContract(
  {
    fill: {
      surface: {
        base: 'fill-surface-base',
        raised: 'fill-surface-raised',
        invert: 'fill-surface-invert',
        dim: 'fill-surface-dim',
        glass: 'fill-surface-glass',
      },
      interaction: {
        none: 'fill-interaction-none',
        hover: 'fill-interaction-hover',
      },
    },
    text: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      tertiary: 'text-tertiary',
      status: {
        disabled: 'text-status-disabled',
        invert: 'text-status-invert',
      },
      static: {
        white: 'text-static-white',
        black: 'text-static-black',
      },
    },
    line: {
      outline: 'line-outline',
      divider: 'line-divider',
    },
    semantic: {
      neutral: {
        emphasized: 'semantic-neutral-emphasized',
        weak: 'semantic-neutral-weak',
        text: 'semantic-neutral-text',
      },
      info: {
        emphasized: 'semantic-info-emphasized',
        weak: 'semantic-info-weak',
        text: 'semantic-info-text',
      },
      highlight: {
        emphasized: 'semantic-highlight-emphasized',
        weak: 'semantic-highlight-weak',
        text: 'semantic-highlight-text',
      },
      positive: {
        emphasized: 'semantic-positive-emphasized',
        weak: 'semantic-positive-weak',
        text: 'semantic-positive-text',
      },
      caution: {
        emphasized: 'semantic-caution-emphasized',
        weak: 'semantic-caution-weak',
        text: 'semantic-caution-text',
      },
      negative: {
        emphasized: 'semantic-negative-emphasized',
        weak: 'semantic-negative-weak',
        text: 'semantic-negative-text',
      },
    },
  },
  (value) => `color-${value}`,
);

export const { fill, text, line, semantic } = color;
