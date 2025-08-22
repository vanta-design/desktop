import { keyframes } from '@vanilla-extract/css';
import { style } from '@/utils/style';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const vector = style({
  width: '100%',
  height: '100%',
  overflow: 'visible',
  animation: `${spin} 1.2s linear infinite`,
});
