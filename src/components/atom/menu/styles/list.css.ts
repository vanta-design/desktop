import { shadow } from '@/styles/effect.css';
import { radius } from '@/tokens/attribute.css';
import { fill, line } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const wrapper = style([
  shadow.weak,
  {
    width: 'fit-content',
    backgroundColor: fill.surface.base,
    outline: `1px solid ${line.outline}`,
    borderRadius: radius[12],
  },
]);

export const list = style({
  listStyle: 'none',
});
