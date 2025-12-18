import { getBorderStyle } from '@/lib/style';
import { border, spacing } from '@/tokens/attribute.css';
import { fill, line } from '@/tokens/color.css';
import { style } from '@/utils/style';

export const list = style({
  position: 'absolute',
  maxHeight: 350,
  padding: spacing[6],
  top: 'calc(100% + 8px)',
  left: 0,
  backgroundColor: fill.surface.base,
  border: getBorderStyle(border.emphasized, line.outline),
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
