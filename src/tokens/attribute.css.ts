import { createGlobalThemeContract } from '@vanilla-extract/css';

export const attribute = createGlobalThemeContract(
  {
    spacing: {
      none: 'spacing-none',
      2: 'spacing-2',
      4: 'spacing-4',
      6: 'spacing-6',
      8: 'spacing-8',
      12: 'spacing-12',
      16: 'spacing-16',
      18: 'spacing-18',
      20: 'spacing-20',
      24: 'spacing-24',
      28: 'spacing-28',
      32: 'spacing-32',
      36: 'spacing-36',
      40: 'spacing-40',
      48: 'spacing-48',
      64: 'spacing-64',
      72: 'spacing-72',
      80: 'spacing-80',
    },
    radius: {
      none: 'radius-none',
      4: 'radius-4',
      8: 'radius-8',
      12: 'radius-12',
      16: 'radius-16',
      24: 'radius-24',
      32: 'radius-32',
      full: 'radius-full',
    },
    opacity: {
      disabled: 'opacity-disabled',
    },
    border: {
      emphasized: 'border-emphasized',
      weak: 'border-weak',
    },
  },
  (value) => `attribute-${value}`,
);

export const { spacing, radius, opacity, border } = attribute;
