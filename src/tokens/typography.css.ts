import { createGlobalThemeContract } from '@vanilla-extract/css';

export const typography = createGlobalThemeContract(
  {
    weight: {
      bold: 'weight-bold',
      strong: 'weight-strong',
      regular: 'weight-regular',
      light: 'weight-light',
    },
    size: {
      display: 'size-display',
      headline: 'size-headline',
      title: 'size-title',
      lead: 'size-lead',
      body: 'size-body',
      caption: 'size-caption',
      footnote: 'size-footnote',
      fine: 'size-fine',
    },
    lineHeight: {
      display: 'line-height-display',
      headline: 'line-height-headline',
      title: 'line-height-title',
      lead: 'line-height-lead',
      body: 'line-height-body',
      bodyParagraph: 'line-height-body-paragraph',
      caption: 'line-height-caption',
      captionParagraph: 'line-height-caption-paragraph',
      footnote: 'line-height-footnote',
      footnoteParagraph: 'line-height-footnote-paragraph',
      fine: 'line-height-fine',
      fineParagraph: 'line-height-fine-paragraph',
    },
    letterSpacing: {
      display: 'letter-spacing-display',
      headline: 'letter-spacing-headline',
      title: 'letter-spacing-title',
      lead: 'letter-spacing-lead',
      body: 'letter-spacing-body',
      caption: 'letter-spacing-caption',
      footnote: 'letter-spacing-footnote',
      fine: 'letter-spacing-fine',
    },
  },
  (value) => `typography-${value}`,
);

export const { weight, size, lineHeight, letterSpacing } = typography;
