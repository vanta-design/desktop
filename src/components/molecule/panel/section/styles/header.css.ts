import { spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const header = style({
  padding: spacing[4],
  color: text.tertiary,
  userSelect: 'none',
  WebkitUserSelect: 'none',
  cursor: 'pointer',
});

export const innerStyle = style({
  padding: `${spacing[4]} 0`,
});
