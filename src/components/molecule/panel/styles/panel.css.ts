import { fill } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const panel = style({
  position: 'relative',
  width: 300,
  backgroundColor: fill.surface.base,
  overflowY: 'auto',
  transform: 'translateZ(0)',
});
