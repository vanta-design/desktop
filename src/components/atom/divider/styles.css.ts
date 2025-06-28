import { style } from '@/styles/layer.css';
import { line } from '@/tokens/color.css';

export const divider = style({
  appearance: 'none',
  border: 'none',
  height: 2,
  backgroundColor: line.divider,
});
