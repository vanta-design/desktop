import { glass } from '@/styles/effect.css';
import { fill } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const backdrop = style([
  glass.strong,
  {
    backgroundColor: fill.surface.dim,
  },
]);
