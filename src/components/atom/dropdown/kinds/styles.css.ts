import { radius, spacing } from '@/tokens/attribute.css';
import { style } from '@/utils/style';

export const defaultStyle = style({
  padding: `${spacing[12]} ${spacing[16]}`,
  borderRadius: radius[16],
});

export const compactStyle = style({
  padding: `${spacing[6]} ${spacing[12]}`,
  borderRadius: radius[12],
});

export const defaultList = style({
  borderRadius: radius[16],
});

export const compactList = style({
  borderRadius: radius[12],
});
