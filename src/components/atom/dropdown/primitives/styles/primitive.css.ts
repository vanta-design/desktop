import { accent } from '@/tokens/accent.css';
import { fill, line } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const wrapper = style({
  position: 'relative',
  width: '100%',
});

export const controller = style({
  backgroundColor: fill.interaction.base,
  border: `1px solid ${line.outline}`,
  cursor: 'pointer',
});

export const expanded = style({
  backgroundColor: accent.fill.base,
  borderColor: accent.text.accent,
});
