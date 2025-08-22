import { radius } from '@/tokens/attribute.css';
import { fill, line } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const wrapper = style({
  aspectRatio: '1 / 1',
  width: 64,
  height: 64,
  backgroundColor: fill.interaction.raised,
  borderRadius: radius.full,
  outline: `1px solid ${line.outline}`,
  cursor: 'pointer',
  overflow: 'hidden',
});

export const input = style({
  display: 'none',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
