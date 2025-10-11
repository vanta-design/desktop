import { createGlobalThemeContract } from '@vanilla-extract/css';

export const color = createGlobalThemeContract(
  {
    fill: {
      surface: {
        base: 'fill-surface-base',
        subtle: 'fill-surface-subtle',
        invert: 'fill-surface-invert',
        dim: 'fill-surface-dim',
        baseGlass: 'fill-surface-base-glass',
        subtleGlass: 'fill-surface-subtle-glass',
      },
      interaction: {
        base: 'fill-interaction-base',
        raised: 'fill-interaction-raised',
        hoverOverlay: 'fill-interaction-hover-overlay',
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
        primary: 'semantic-neutral-primary',
        secondary: 'semantic-neutral-secondary',
        text: 'semantic-neutral-text',
      },
      info: {
        primary: 'semantic-info-primary',
        secondary: 'semantic-info-secondary',
        text: 'semantic-info-text',
      },
      highlight: {
        primary: 'semantic-highlight-primary',
        secondary: 'semantic-highlight-secondary',
        text: 'semantic-highlight-text',
      },
      positive: {
        primary: 'semantic-positive-primary',
        secondary: 'semantic-positive-secondary',
        text: 'semantic-positive-text',
      },
      caution: {
        primary: 'semantic-caution-primary',
        secondary: 'semantic-caution-secondary',
        text: 'semantic-caution-text',
      },
      negative: {
        primary: 'semantic-negative-primary',
        secondary: 'semantic-negative-secondary',
        text: 'semantic-negative-text',
      },
    },
  },
  (value) => `color-${value}`,
);

export const { fill, text, line, semantic } = color;
