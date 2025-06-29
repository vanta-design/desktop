import { semanticColors } from '@/lib/color';
import { semantic } from '@/tokens/color.css';
import type { Semantic } from '@/types/color';
import { style } from '@/utils/style';

export default semanticColors.reduce(
  (acc, current) => {
    acc[current] = style({
      backgroundColor: semantic[current].weak,
      color: semantic[current].text,
    });
    return acc;
  },
  {} as { [key in Semantic]: string },
);
