import { accent } from '@/tokens/accent.css';
import { attribute, radius, spacing } from '@/tokens/attribute.css';
import { fill, line, text } from '@/tokens/color.css';
import { primitive } from '@/tokens/primitive.css';
import { style } from '@/utils/style';

export const box = style({
  width: 36,
  padding: spacing[4],
  backgroundColor: fill.interaction.base,
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
  aspectRatio: '1 / 1',
  opacity: attribute.opacity.disabled,
  backgroundColor: text.tertiary,
  borderRadius: radius.full,
  selectors: {
    [`${activeStyle} > &`]: {
      backgroundColor: fill.interaction.base,
      marginLeft: 14,
      opacity: 1,
    },
  },
});
