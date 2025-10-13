import { layout } from '@/tokens/layout.css';
import { style } from '@/utils/style';

export const section = style({
  padding: `${layout.padding.small} ${layout.padding.medium}`,
});

export const innerSection = style({
  paddingLeft: layout.padding.medium,
});
