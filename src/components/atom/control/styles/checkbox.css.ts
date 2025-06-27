import { style } from '@/styles/layer.css';
import { accent } from '@/tokens/accent.css';
import { radius, spacing } from '@/tokens/attribute.css';
import { fill, line } from '@/tokens/color.css';
import { primitive } from '@/tokens/primitive.css';

export const box = style({
  aspectRatio: '1/1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: spacing[4],
  backgroundColor: fill.surface.raised,
  border: `1px solid ${line.outline}`,
  borderRadius: radius[8],
});

export const active = style({
  backgroundColor: accent.fill.primary,
  color: accent.text.base,
  borderColor: primitive.transparent,
});
