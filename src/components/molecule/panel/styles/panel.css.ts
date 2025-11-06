import { fill, line } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const panel = style({
  position: 'relative',
  width: 300,
  backgroundColor: fill.surface.base,
  borderRight: `1px solid ${line.outline}`,
  overflowY: 'auto',
  transform: 'translateZ(0)',
});
