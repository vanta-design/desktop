import { fill, text } from '@/tokens/accent.css';
import { radius, spacing } from '@/tokens/attribute.css';
import { style } from '@/utils/style';

export const chip = style({
  padding: `${spacing[6]} ${spacing[12]}`,
  backgroundColor: fill.secondary,
  color: text.accent,
  borderRadius: radius[8],
  cursor: 'pointer',
});

export const active = style({
  backgroundColor: fill.primary,
  color: text.base,
});
