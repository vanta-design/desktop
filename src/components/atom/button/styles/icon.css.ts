import { lineHeight } from '@/tokens/typography.css';
import { style } from '@/utils/style';

export default {
  large: style({
    width: lineHeight.body,
    height: lineHeight.body,
  }),
  medium: style({
    width: lineHeight.caption,
    height: lineHeight.caption,
  }),
  small: style({
    width: lineHeight.footnote,
    height: lineHeight.footnote,
  }),
};
