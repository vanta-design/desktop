import { accent } from '@/tokens/accent.css';
import { spacing } from '@/tokens/attribute.css';
import { style } from '@/utils/style';

export const item = style({
  minWidth: 200,
  padding: `${spacing[4]} ${spacing[16]}`,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: accent.fill.secondary,
  },
});
