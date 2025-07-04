import { style } from '@vanilla-extract/css';
import { accent } from '@/tokens/accent.css';
import { radius, spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';

export const item = style({
  padding: `${spacing[6]} ${spacing[8]}`,
  color: text.tertiary,
  borderRadius: radius[12],
});

export const emphasizedStyle = style({
  color: text.primary,
});

export const activeStyle = style({
  backgroundColor: accent.fill.secondary,
  color: accent.text.accent,
});
