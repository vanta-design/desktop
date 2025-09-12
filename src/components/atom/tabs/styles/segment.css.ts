import { style } from '@vanilla-extract/css';
import { accent } from '@/tokens/accent.css';
import { attribute } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';

export const segment = style({
  color: text.tertiary,
  cursor: 'pointer',
  ':disabled': {
    opacity: attribute.opacity.disabled,
    cursor: 'not-allowed',
  },
});

export const active = style({
  color: accent.text.accent,
});
