import { type PropsWithChildren, type RefObject, useEffect } from 'react';
import { useOverlay } from '../overlay';

type Side = 'top' | 'bottom' | 'left' | 'right';
type Alignment = 'start' | 'center' | 'end';

interface PositionerProps extends PropsWithChildren {
  show?: boolean;
  anchorRef?: RefObject<HTMLElement>;
  offset?: number;
  side?: Side;
  align?: Alignment;
}

export function Positioner(props: PositionerProps) {
  const {
    show = false,
    anchorRef,
    offset,
    side = 'right',
    align = 'start',
    children,
  } = props;
  const Children = useOverlay(() => children);

  useEffect(() => {
    if (show) {
      Children.show();
    } else {
      Children.hide();
    }
  }, [Children, show]);

  return <Children.Render />;
}
