import { style } from '@/utils/style';

export const glass = {
  weak: style({
    backdropFilter: `blur(4px)`,
  }),
  strong: style({
    backdropFilter: `blur(16px)`,
  }),
};

export const shadow = style({
  boxShadow: `0 2px 24px 8px rgba(10, 10, 10, 0.08)`,
});
