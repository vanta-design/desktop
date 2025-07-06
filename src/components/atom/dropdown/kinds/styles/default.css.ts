import { radius, spacing } from '@/tokens/attribute.css';
import { style } from '@/utils/style';

export const dropdown = style({
  padding: `${spacing[12]} ${spacing[16]}`,
  borderRadius: radius[16],
});

export const list = style({
  borderRadius: radius[16],
});

export const item = style({
  padding: `${spacing[6]} ${spacing[8]}`,
  borderRadius: radius[12],
});
