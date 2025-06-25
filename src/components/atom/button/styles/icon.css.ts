import { style } from '@vanilla-extract/css';
import { lineHeight } from '@/tokens/typography.css';

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
