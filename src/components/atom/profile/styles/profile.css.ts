import { radius } from '@/tokens/attribute.css';
import { fill } from '@/tokens/color.css';
import { style } from '@/utils/style';
import { group } from './group.css';

export const wrapper = style({
  position: 'relative',
});

export const sizeMap = {
  small: style({
    width: 20,
    height: 20,
    selectors: {
      [`${group} > &:not(:first-child)`]: { marginLeft: -10 },
    },
  }),
  regular: style({
    width: 24,
    height: 24,
    selectors: {
      [`${group} > &:not(:first-child)`]: { marginLeft: -12 },
    },
  }),
  medium: style({
    width: 26,
    height: 26,
    selectors: {
      [`${group} > &:not(:first-child)`]: { marginLeft: -13 },
    },
  }),
  large: style({
    width: 32,
    height: 32,
    selectors: {
      [`${group} > &:not(:first-child)`]: { marginLeft: -16 },
    },
  }),
};

export const profile = style({
  width: '100%',
  height: '100%',
  aspectRatio: '1 / 1',
  borderRadius: radius.full,
  outline: `1px solid ${fill.surface.base}`,
});

export const status = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
});
