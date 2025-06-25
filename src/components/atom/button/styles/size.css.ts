import { style } from '@/styles/layer.css';
import { radius, spacing } from '@/tokens/attribute.css';

export default {
  large: style({
    padding: spacing[12],
    borderRadius: radius[16],
  }),
  medium: style({
    padding: spacing[8],
    borderRadius: radius[12],
  }),
  small: style({
    padding: spacing[8],
    borderRadius: radius[12],
  }),
};
