import { accent } from '@/tokens/accent.css';
import { radius } from '@/tokens/attribute.css';
import { fill, line } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const radio = style({
  appearance: 'none',
  width: 22,
  height: 22,
  aspectRatio: '1/1',
  backgroundColor: fill.interaction.base,
  border: `1px solid ${line.outline}`,
  borderRadius: radius.full,
  cursor: 'pointer',
  ':checked': {
    borderColor: accent.fill.primary,
    borderWidth: 6,
  },
});
