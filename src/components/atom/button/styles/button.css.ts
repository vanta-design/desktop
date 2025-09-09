import { attribute, spacing } from '@/tokens/attribute.css';
import { style } from '@/utils/style';

export const button = style({
  position: 'relative',
  height: 'fit-content',
  cursor: 'pointer',
  userSelect: 'none',
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: attribute.opacity.disabled,
    },
  },
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

export const hide = style({
  opacity: 0,
});

export const loadingCircle = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});
