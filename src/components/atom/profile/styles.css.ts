import { radius } from '@/tokens/attribute.css';
import { fill } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const wrapper = style({
  position: 'relative',
  aspectRatio: '1 / 1',
});

export const sizeMap = {
  small: style({
    width: 20,
    height: 20,
  }),
  regular: style({
    width: 24,
    height: 24,
  }),
  medium: style({
    width: 26,
    height: 26,
  }),
  large: style({
    width: 32,
    height: 32,
  }),
};

export const profile = style({
  width: '100%',
  height: '100%',
  borderRadius: radius.full,
  outline: `1px solid ${fill.surface.base}`,
});

export const status = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
});
