import { letterSpacing, lineHeight, size } from '@/tokens/typography.css';
import { style } from '@/utils/style';
import type { TypographySize } from '../shared';

const sizes: Array<TypographySize> = [
  'display',
  'headline',
  'title',
  'lead',
  'body',
  'caption',
  'footnote',
  'fine',
];

export default sizes.reduce(
  (acc, current) => {
    acc[current] = style({
      fontSize: size[current],
      lineHeight: lineHeight[current],
      letterSpacing: letterSpacing[current],
      textAlign: 'left',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    });
    return acc;
  },
  {} as { [key in TypographySize]: string },
);
