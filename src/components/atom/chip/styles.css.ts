import { accent } from '@/tokens/accent.css';
import { radius, spacing } from '@/tokens/attribute.css';
import { fill, text } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const chip = style({
  padding: `${spacing[6]} ${spacing[12]}`,
  backgroundColor: fill.interaction.raised,
  color: text.secondary,
  borderRadius: radius[12],
  cursor: 'pointer',
});

export const active = style({
  backgroundColor: accent.fill.primary,
  color: accent.text.base,
});
