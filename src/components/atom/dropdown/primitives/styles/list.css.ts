import { fill, line } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const list = style({
  position: 'absolute',
  maxHeight: 300,
  top: 'calc(100% + 8px)',
  left: 0,
  backgroundColor: fill.surface.baseGlass,
  border: `1px solid ${line.outline}`,
  overflowY: 'auto',
  zIndex: 10,
  selectors: {
    '&[aria-hidden=true]': {
      visibility: 'hidden',
      pointerEvents: 'none',
      overflow: 'hidden',
    },
  },
});
