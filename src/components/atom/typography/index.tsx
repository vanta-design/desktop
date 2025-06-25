import { withDefaultClassNames } from '@/utils/component';
import { _PrimitiveTypography } from './primitive';
import paragraph from './styles/paragraph.css';
import typography from './styles/typography.css';

const Typography = {
  Display: withDefaultClassNames(_PrimitiveTypography, typography.display),
  Headline: withDefaultClassNames(_PrimitiveTypography, typography.headline),
  Title: withDefaultClassNames(_PrimitiveTypography, typography.title),
  Lead: withDefaultClassNames(_PrimitiveTypography, typography.lead),
  Body: withDefaultClassNames(_PrimitiveTypography, typography.body),
  Caption: withDefaultClassNames(_PrimitiveTypography, typography.caption),
  Footnote: withDefaultClassNames(_PrimitiveTypography, typography.footnote),
  Fine: withDefaultClassNames(_PrimitiveTypography, typography.fine),
};

const Paragraph = {
  Body: withDefaultClassNames(_PrimitiveTypography, paragraph.body),
  Caption: withDefaultClassNames(_PrimitiveTypography, paragraph.caption),
  Footnote: withDefaultClassNames(_PrimitiveTypography, paragraph.footnote),
  Fine: withDefaultClassNames(_PrimitiveTypography, paragraph.fine),
};

export { Typography, Typography as Typo, Paragraph };
