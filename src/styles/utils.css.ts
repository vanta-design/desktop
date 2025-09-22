import { style } from '@/utils/style';

export const fillWidth = style({ width: '100%' });
export const fillHeight = style({ height: '100%' });

export const fitWidth = style({ width: 'fit-content' });
export const fitHeight = style({ height: 'fit-content' });

export const userSelectNone = style({
  userSelect: 'none',
  WebkitUserSelect: 'none',
});

export const visuallyHidden = style({
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
});
