import { accent } from '@/tokens/accent.css';
import { radius, spacing } from '@/tokens/attribute.css';
import { fill } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const toggle = style({
  padding: `${spacing[2]} ${spacing[8]}`,
  backgroundColor: fill.interaction.base,
  outline: `1.5px solid transparent`,
  borderRadius: radius[16],
  cursor: 'pointer',
  userSelect: 'none',
});

export const toggleActive = style({
  backgroundColor: accent.fill.base,
  outlineColor: accent.text.accent,
});
