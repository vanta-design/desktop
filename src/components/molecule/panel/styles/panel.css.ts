import { style } from '@vanilla-extract/css';
import { fill } from '@/tokens/color.css';

export const panel = style({
  position: 'relative',
  width: 300,
  backgroundColor: fill.surface.base,
  overflowY: 'auto',
  transform: 'translateZ(0)',
});
