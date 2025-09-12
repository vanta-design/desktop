import { style } from '@vanilla-extract/css';
import { text } from '@/tokens/color.css';

export const headerCell = style({
  color: text.tertiary,
  cursor: 'pointer',
});
