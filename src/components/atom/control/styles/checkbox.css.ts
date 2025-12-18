import { accent } from '@/tokens/accent.css';
import { radius, spacing } from '@/tokens/attribute.css';
import { fill } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const box = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: 22,
  height: 22,
  aspectRatio: '1/1',
  padding: spacing[4],
  backgroundColor: fill.interaction.raised,
  borderRadius: radius[8],
});

export const active = style({
  backgroundColor: accent.fill.accent,
  color: accent.text.base,
});
