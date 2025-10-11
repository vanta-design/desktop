import { createGlobalThemeContract } from '@vanilla-extract/css';

export const layout = createGlobalThemeContract({
  padding: {
    large: 'padding-large',
    medium: 'padding-medium',
    small: 'padding-small',
  },
});

export const { padding } = layout;
