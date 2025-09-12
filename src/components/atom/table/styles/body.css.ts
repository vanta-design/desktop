import { style } from '@vanilla-extract/css';
import { radius, spacing } from '@/tokens/attribute.css';
import { fill } from '@/tokens/color.css';

export const row = style({
  selectors: {
    '&:nth-child(even)': {
      backgroundColor: fill.surface.subtle,
    },
  },
});

export const cell = style({
  padding: `${spacing[8]} ${spacing[12]}`,
  selectors: {
    '&:first-child': {
      borderTopLeftRadius: radius[16],
      borderBottomLeftRadius: radius[16],
    },
    '&:last-child': {
      borderTopRightRadius: radius[16],
      borderBottomRightRadius: radius[16],
    },
  },
});
