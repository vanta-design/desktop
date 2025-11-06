import { spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';
import { layout } from '@/tokens/layout.css';
import { style } from '@/utils/style';

export const header = style({
  padding: `${spacing[4]} ${layout.padding.medium}`,
  color: text.tertiary,
  userSelect: 'none',
  WebkitUserSelect: 'none',
  cursor: 'pointer',
});
