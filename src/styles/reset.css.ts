import { line, text } from '@/tokens/color.css';
import { resetGlobalStyle } from '@/utils/style';
import { wantedSansVariable } from './typography.css';

resetGlobalStyle('html', {
  width: '100%',
  wordBreak: 'keep-all',
  wordWrap: 'break-word',
  textWrap: 'pretty',
  overscrollBehavior: 'none',
});

resetGlobalStyle('*', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  fontFamily: wantedSansVariable,
  fontSynthesis: 'none',
  WebkitFontSmoothing: 'antialiased',
  textRendering: 'optimizeLegibility',
  shapeRendering: 'geometricPrecision',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
});

resetGlobalStyle('*:focus-visible', {
  outlineColor: line.outline,
  outlineStyle: 'solid',
  outlineOffset: 2,
  outlineWidth: 2,
});

resetGlobalStyle('a', {
  width: '100%',
  color: 'inherit',
  cursor: 'pointer',
  textDecoration: 'none',
});

resetGlobalStyle('svg', {
  flexShrink: 0,
});

resetGlobalStyle('input, textarea, button', {
  fontFamily: 'inherit',
  color: 'inherit',
  background: 'transparent',
  border: 'none',
  outline: 'none',
});

resetGlobalStyle('input::placeholder, textarea::placeholder', {
  color: text.status.disabled,
});

resetGlobalStyle('::-webkit-scrollbar', { display: 'none' });
