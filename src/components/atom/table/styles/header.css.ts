import { style } from '@vanilla-extract/css';
import { spacing } from '@/tokens/attribute.css';

export const cell = style({
  padding: `${spacing[4]} ${spacing[12]}`,
  textAlign: 'left',
});
