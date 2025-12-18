import { getBorderStyle } from '@/lib/style';
import { border, radius } from '@/tokens/attribute.css';
import { fill, line } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const header = style({
  top: 0,
  left: 0,
  backgroundColor: fill.surface.baseGlass,
});

export const image = style({
  display: 'block',
  width: 38,
  height: 38,
  aspectRatio: '1 / 1',
  flexShrink: 0,
  border: getBorderStyle(border.weak, line.outline),
  borderRadius: radius[12],
});
