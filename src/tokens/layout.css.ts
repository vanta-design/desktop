import { createGlobalThemeContract } from '@vanilla-extract/css';

export const layout = createGlobalThemeContract({
  padding: {
    wide: 'padding-wide',
    regular: 'padding-regular',
    narrow: 'padding-narrow',
  },
});

export const { padding } = layout;
