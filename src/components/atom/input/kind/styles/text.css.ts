import { radius, spacing } from '@/tokens/attribute.css';
import { style } from '@/utils/style';

export const defaultText = style({
  padding: `${spacing[12]} ${spacing[16]}`,
  borderRadius: radius[12],
});

export const compactText = style({
  padding: `${spacing[8]} ${spacing[12]}`,
  borderRadius: radius[12],
});
