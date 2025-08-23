import { shadow } from '@/styles/effect.css';
import { radius } from '@/tokens/attribute.css';
import { fill, line } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const container = style([
  shadow,
  {
    backgroundColor: fill.surface.base,
    borderRadius: radius[24],
    outline: `1px solid ${line.outline}`,
  },
]);
