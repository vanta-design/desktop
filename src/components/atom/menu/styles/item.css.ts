import { semanticColors } from '@/lib/color';
import { accent } from '@/tokens/accent.css';
import { spacing } from '@/tokens/attribute.css';
import { semantic } from '@/tokens/color.css';
import type { Semantic } from '@/types/color';
import { style } from '@/utils/style';

export const item = style({
  minWidth: 200,
  padding: `${spacing[4]} ${spacing[16]}`,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: accent.fill.base,
  },
});

export const semanticMap = semanticColors.reduce(
  (acc, current) => {
    acc[current] = style({
      color: semantic[current].text,
    });
    return acc;
  },
  {} as { [key in Semantic]: string },
);
