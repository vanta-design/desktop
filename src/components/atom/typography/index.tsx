import { cn } from '@/utils/common';
import { _Primitive, type _PrimitiveProps } from './primitive';
import paragraph from './styles/paragraph.css';
import typography from './styles/typography.css';

function typographyBuilder(...classNames: Array<string>) {
  return (props: _PrimitiveProps) => (
    <_Primitive {...props} className={cn(classNames, props.className)} />
  );
}

const Typography = {
  Display: typographyBuilder(typography.display),
  Title: typographyBuilder(typography.title),
  Headline: typographyBuilder(typography.headline),
  Body: typographyBuilder(typography.body),
  Caption: typographyBuilder(typography.caption),
  Footnote: typographyBuilder(typography.footnote),
  Fine: typographyBuilder(typography.fine),
};

const Paragraph = {
  Body: typographyBuilder(paragraph.body),
  Caption: typographyBuilder(paragraph.caption),
  Footnote: typographyBuilder(paragraph.footnote),
  Fine: typographyBuilder(paragraph.fine),
};

export { Typography, Typography as Typo, Paragraph };
