import { padding } from '@/tokens/layout.css';
import { style } from '@/utils/style';

export const section = style({
  padding: `${padding.small} ${padding.medium}`,
});

export const innerSection = style({
  paddingLeft: padding.medium,
});
