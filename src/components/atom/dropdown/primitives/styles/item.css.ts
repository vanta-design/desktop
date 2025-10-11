import { accent } from '@/tokens/accent.css';
import { text } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const item = style({
  color: text.secondary,
  cursor: 'pointer',
});

export const active = style({
  backgroundColor: accent.fill.base,
  color: accent.text.accent,
});

export const hideIcon = style({
  opacity: 0,
});
