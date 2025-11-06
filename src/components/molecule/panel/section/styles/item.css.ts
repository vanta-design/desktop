import { accent } from '@/tokens/accent.css';
import { radius, spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';
import { layout } from '@/tokens/layout.css';
import { style } from '@/utils/style';

export const item = style({
  padding: `${spacing[6]} ${layout.padding.medium}`,
  color: text.tertiary,
  borderRadius: radius[12],
  cursor: 'pointer',
});

export const emphasizedStyle = style({
  color: text.primary,
});

export const activeStyle = style({
  backgroundColor: accent.fill.base,
  color: accent.text.accent,
});
