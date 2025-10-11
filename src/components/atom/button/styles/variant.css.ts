import { fill, text } from '@/tokens/accent.css';
import { primitive } from '@/tokens/primitive.css';
import { style } from '@/utils/style';

export default {
  primary: style({
    backgroundColor: fill.accent,
    color: text.base,
  }),
  secondary: style({
    backgroundColor: fill.base,
    color: text.accent,
  }),
  bare: style({
    backgroundColor: primitive.transparent,
    color: text.accent,
  }),
};
