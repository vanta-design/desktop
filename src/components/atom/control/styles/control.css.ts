import { style } from '@/styles/layer.css';
import { spacing } from '@/tokens/attribute.css';

export const wrapper = style({
  aspectRatio: '1/1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  padding: spacing[4],
  placeItems: 'center',
  cursor: 'pointer',
});
