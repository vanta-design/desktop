import { accent } from '@/tokens/accent.css';
import { fill, line } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const wrapper = style({
  position: 'relative',
});

export const controller = style({
  backgroundColor: fill.surface.raised,
  border: `1px solid ${line.outline}`,
  cursor: 'pointer',
});

export const expanded = style({
  backgroundColor: accent.fill.secondary,
  borderColor: accent.text.accent,
});
