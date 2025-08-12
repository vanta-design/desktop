import { radius } from '@/tokens/attribute.css';
import { fill, line } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const header = style({
  top: 0,
  left: 0,
  backgroundColor: fill.surface.subtleGlass,
});

export const image = style({
  display: 'block',
  width: 38,
  height: 38,
  aspectRatio: '1 / 1',
  flexShrink: 0,
  border: `1px solid ${line.outline}`,
  borderRadius: radius[12],
});
