import { fill, line } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const list = style({
  position: 'absolute',
  top: 'calc(100% + 8px)',
  left: 0,
  height: 300,
  backgroundColor: fill.surface.glass,
  border: `1px solid ${line.outline}`,
  zIndex: 10,
});
