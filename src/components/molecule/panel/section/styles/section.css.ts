import { padding } from '@/tokens/layout.css';
import { style } from '@/utils/style';

export const section = style({
  padding: `${padding.narrow} ${padding.regular}`,
});

export const innerSection = style({
  paddingLeft: padding.regular,
});
