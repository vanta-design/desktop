import { style } from '@/styles/layer.css';
import { accent } from '@/tokens/accent.css';
import { radius } from '@/tokens/attribute.css';
import { fill, line } from '@/tokens/color.css';

export const box = style({
  width: 22,
  height: 22,
  aspectRatio: '1/1',
  backgroundColor: fill.surface.raised,
  border: `1px solid ${line.outline}`,
  borderRadius: radius.full,
});

export const activeStyle = style({
  borderColor: accent.fill.primary,
  borderWidth: 6,
});
