import { semanticColors } from '@/lib/color';
import { accent } from '@/tokens/accent.css';
import { semantic } from '@/tokens/color.css';
import type { Semantic } from '@/types/color';
import { style } from '@/utils/style';

export const primitive = style({
  backgroundColor: accent.fill.secondary,
  color: accent.text.accent,
});

export const semanticMap = semanticColors.reduce(
  (acc, current) => {
    acc[current] = style({
      backgroundColor: semantic[current].weak,
      color: semantic[current].text,
    });
    return acc;
  },
  {} as { [key in Semantic]: string },
);
