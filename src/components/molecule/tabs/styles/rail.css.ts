import { style } from '@vanilla-extract/css';
import { accent } from '@/tokens/accent.css';
import { spacing } from '@/tokens/attribute.css';
import { line } from '@/tokens/color.css';
import { layout } from '@/tokens/layout.css';

export const segment = {
  vertical: style({
    padding: `${spacing[4]} ${spacing[16]}`,
    selectors: {
      '&[aria-selected="true"]': {
        boxShadow: `-2px 0 0 0 ${accent.text.accent}`,
      },
    },
  }),
  horizontal: style({
    padding: spacing[8],
    selectors: {
      '&[aria-selected="true"]': {
        boxShadow: `0 2px 0 0 ${accent.text.accent}`,
      },
    },
  }),
};

export const list = {
  vertical: style({
    borderLeft: `solid 1px ${line.divider}`,
  }),
  horizontal: style({
    padding: `${layout.padding.medium} ${layout.padding.large} 0`,
    borderBottom: `solid 1px ${line.divider}`,
  }),
};
