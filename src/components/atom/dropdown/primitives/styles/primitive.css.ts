import { style } from '@vanilla-extract/css';
import { fill, line } from '@/tokens/color.css';

export const wrapper = style({
  position: 'relative',
});

export const controller = style({
  backgroundColor: fill.surface.raised,
  border: `1px solid ${line.outline}`,
  cursor: 'pointer',
});
