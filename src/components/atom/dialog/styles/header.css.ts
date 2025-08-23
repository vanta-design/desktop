import { padding } from '@/tokens/layout.css';
import { style } from '@/utils/style';

export const header = style({
  padding: `${padding.wide} ${padding.wide} ${padding.narrow} ${padding.wide}`,
});

export const closeButton = style({
  cursor: 'pointer',
});
