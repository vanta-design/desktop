import { style } from '@/styles/layer.css';
import { radius, spacing } from '@/tokens/attribute.css';

export default {
  large: style({
    padding: `${spacing[6]} ${spacing[8]}`,
    borderRadius: radius[12],
  }),
  small: style({
    padding: `${spacing[4]} ${spacing[6]}`,
    borderRadius: radius[8],
  }),
};
