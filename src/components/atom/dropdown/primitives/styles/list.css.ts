import { fill, line } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const list = style({
  position: 'absolute',
  top: 'calc(100% + 8px)',
  left: 0,
  backgroundColor: fill.surface.glass,
  border: `1px solid ${line.outline}`,
  zIndex: 10,
  selectors: {
    '&[aria-hidden=true]': {
      visibility: 'hidden',
      pointerEvents: 'none',
      overflow: 'hidden',
    },
  },
});
