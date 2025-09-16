import { style } from '@/utils/style';

export const glass = {
  weak: style({
    backdropFilter: `blur(4px)`,
  }),
  strong: style({
    backdropFilter: `blur(16px)`,
  }),
};

export const shadow = {
  weak: style({
    boxShadow:
      '0 0 6px 0 rgba(175, 175, 175, 0.04), 0 0 16px 2px rgba(79, 79, 79, 0.06)',
  }),
  strong: style({
    boxShadow: '0 2px 24px 8px rgba(10, 10, 10, 0.08)',
  }),
};
