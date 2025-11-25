import { attribute } from '@/tokens/attribute.css';
import { style } from '@/utils/style';

export const segment = style({
  cursor: 'pointer',
  ':disabled': {
    opacity: attribute.opacity.disabled,
    cursor: 'not-allowed',
  },
});
