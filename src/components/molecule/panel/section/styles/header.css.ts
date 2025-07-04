import { style } from '@vanilla-extract/css';
import { spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';

export const header = style({
  padding: spacing[4],
  color: text.tertiary,
  userSelect: 'none',
  WebkitUserSelect: 'none',
  cursor: 'pointer',
});
