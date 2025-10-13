import { accent } from '@/tokens/accent.css';
import { primitive } from '@/tokens/primitive.css';
import { style } from '@/utils/style';

export default {
  primary: style({
    backgroundColor: accent.fill.accent,
    color: accent.text.base,
  }),
  secondary: style({
    backgroundColor: accent.fill.base,
    color: accent.text.accent,
  }),
  bare: style({
    backgroundColor: primitive.transparent,
    color: accent.text.accent,
  }),
};
