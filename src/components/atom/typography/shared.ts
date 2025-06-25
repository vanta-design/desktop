import type { DetailsHTMLAttributes } from 'react';

export type TypographySize =
  | 'display'
  | 'headline'
  | 'title'
  | 'lead'
  | 'body'
  | 'caption'
  | 'footnote'
  | 'fine';

export type ParagraphSize = 'body' | 'caption' | 'footnote' | 'fine';

export type Weight = 'bold' | 'strong' | 'regular' | 'light';

export type TypographyPropsBase = DetailsHTMLAttributes<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
>;
