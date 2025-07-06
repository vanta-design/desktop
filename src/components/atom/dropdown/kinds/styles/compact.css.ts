import { radius, spacing } from '@/tokens/attribute.css';
import { style } from '@/utils/style';

export const dropdown = style({
  padding: `${spacing[6]} ${spacing[12]}`,
  borderRadius: radius[12],
});

export const list = style({
  borderRadius: radius[12],
});

export const item = style({
  padding: `${spacing[4]} ${spacing[6]}`,
  borderRadius: radius[8],
});
