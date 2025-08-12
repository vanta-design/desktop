import { accent } from '@/tokens/accent.css';
import { radius, spacing } from '@/tokens/attribute.css';
import { fill, line } from '@/tokens/color.css';
import { primitive } from '@/tokens/primitive.css';
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
  backgroundColor: fill.interaction.base,
  border: `1px solid ${line.outline}`,
  borderRadius: radius[8],
});

export const active = style({
  backgroundColor: accent.fill.primary,
  color: accent.text.base,
  borderColor: primitive.transparent,
});
