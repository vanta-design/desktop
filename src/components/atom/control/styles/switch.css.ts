import { style } from '@/styles/layer.css';
import { accent } from '@/tokens/accent.css';
import { radius, spacing } from '@/tokens/attribute.css';
import { fill, line } from '@/tokens/color.css';
import { primitive } from '@/tokens/primitive.css';

export const box = style({
  width: 36,
  padding: spacing[4],
  backgroundColor: fill.surface.raised,
  border: `1px solid ${line.outline}`,
  borderRadius: radius.full,
});

export const activeStyle = style({
  backgroundColor: accent.fill.primary,
  borderColor: primitive.transparent,
});

export const thumb = style({
  display: 'block',
  width: 14,
  height: 14,
  aspectRatio: '1/1',
  backgroundColor: line.outline,
  borderRadius: radius.full,
  selectors: {
    [`${activeStyle} > &`]: {
      marginLeft: 14,
    },
  },
});
