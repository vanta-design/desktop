import { shadow } from '@/styles/effect.css';
import { fillWidth } from '@/styles/utils.css';
import { radius } from '@/tokens/attribute.css';
import { fill, line, text } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const container = style([
  fillWidth,
  shadow.strong,
  {
    position: 'static',
    backgroundColor: fill.surface.base,
    color: text.primary,
    border: `1px solid ${line.outline}`,
    borderRadius: radius[24],
  },
]);
