import { letterSpacing, lineHeight, size } from '@/tokens/typography.css';
import { style } from '@/utils/style';
import type { ParagraphSize, TypographySize } from '../shared';

const sizes: Array<ParagraphSize> = ['body', 'caption', 'footnote', 'fine'];
const lineHeightKeyMap: { [key in ParagraphSize]: keyof typeof lineHeight } = {
  body: 'bodyParagraph',
  caption: 'captionParagraph',
  footnote: 'footnoteParagraph',
  fine: 'fineParagraph',
};

export default sizes.reduce(
  (acc, current) => {
    acc[current] = style({
      fontSize: size[current],
      lineHeight: lineHeight[lineHeightKeyMap[current]],
      letterSpacing: letterSpacing[current],
    });
    return acc;
  },
  {} as { [key in TypographySize]: string },
);
