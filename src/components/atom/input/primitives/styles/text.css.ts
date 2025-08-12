import { accent } from '@/tokens/accent.css';
import { fill, line, semantic } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const wrapper = style({
  width: '100%',
  backgroundColor: fill.interaction.base,
  border: `1px solid ${line.outline}`,
  cursor: 'text',
});

export const content = style({
  width: '100%',
});

export const input = style({
  width: '100%',
  caretColor: accent.text.accent,
  ':focus': {
    outline: 'none',
  },
  ':disabled': {
    cursor: 'not-allowed',
  },
  ':invalid': {
    caretColor: semantic.negative.text,
  },
});

export const reset = style({
  cursor: 'pointer',
});

export const disabledStyle = style({
  opacity: 0.35,
  cursor: 'not-allowed',
});

export const invalidStyle = style({
  borderColor: semantic.negative.emphasized,
});

export const focusStyle = style({
  backgroundColor: accent.fill.secondary,
  borderColor: accent.text.accent,
  selectors: {
    [`&${invalidStyle}`]: {
      backgroundColor: semantic.negative.weak,
      borderColor: semantic.negative.emphasized,
    },
  },
});
