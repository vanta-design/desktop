import { shadow } from '@/styles/effect.css';
import { radius, spacing } from '@/tokens/attribute.css';
import { fill, line } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const list = style([
  shadow.weak,
  {
    position: 'absolute',
    width: 'fit-content',
    maxHeight: '80vh',
    padding: `${spacing[8]} 0`,
    backgroundColor: fill.surface.base,
    outline: `1px solid ${line.outline}`,
    borderRadius: radius[12],
    listStyle: 'none',
    overflowY: 'auto',
  },
]);
