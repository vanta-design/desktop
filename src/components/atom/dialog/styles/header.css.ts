import { layout } from '@/tokens/layout.css';
import { style } from '@/utils/style';

export const header = style({
  padding: `${layout.padding.large} ${layout.padding.large} ${layout.padding.small} ${layout.padding.large}`,
});

export const closeButton = style({
  cursor: 'pointer',
});
