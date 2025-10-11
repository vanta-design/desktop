import { padding } from '@/tokens/layout.css';
import { style } from '@/utils/style';

export const header = style({
  padding: `${padding.large} ${padding.large} ${padding.small} ${padding.large}`,
});

export const closeButton = style({
  cursor: 'pointer',
});
