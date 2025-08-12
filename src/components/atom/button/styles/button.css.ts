import { spacing } from '@/tokens/attribute.css';
import { style } from '@/utils/style';

export const button = style({
  cursor: 'pointer',
  userSelect: 'none',
});

export const iconButton = style({
  aspectRatio: '1/1',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

export const content = style({
  padding: `0 ${spacing[8]}`,
});
