import { semanticColors } from '@/lib/color';
import { accent } from '@/tokens/accent.css';
import { radius } from '@/tokens/attribute.css';
import { fill, semantic } from '@/tokens/color.css';
import type { Semantic } from '@/types/color';
import { style } from '@/utils/style';

export const indicator = style({
  display: 'block',
  backgroundColor: accent.fill.accent,
  aspectRatio: '1 / 1',
  flexShrink: 0,
  outline: `2px solid ${fill.surface.base}`,
  borderRadius: radius.full,
});

export const sizeMap = {
  small: style({
    width: 6,
    height: 6,
  }),
  medium: style({
    width: 8,
    height: 8,
  }),
  large: style({
    width: 10,
    height: 10,
  }),
};

export const semanticMap = semanticColors.reduce(
  (acc, current) => {
    acc[current] = style({
      backgroundColor: semantic[current].primary,
    });
    return acc;
  },
  {} as { [key in Semantic]: string },
);
