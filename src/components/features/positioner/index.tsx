import {
  type CSSProperties,
  cloneElement,
  type ReactElement,
  type RefObject,
  useEffect,
  useState,
} from 'react';
import { useOverlay } from '../overlay';
import { calculateOffsetValue } from './util';

type Side = 'top' | 'bottom' | 'left' | 'right';
type Alignment = 'start' | 'center' | 'end';
type Position = {
  x: number;
  y: number;
};

interface PositionerProps {
  show?: boolean;
  anchorRef?: RefObject<HTMLElement | null>;
  offset?: number | string;
  side?: Side;
  align?: Alignment;
  children: ReactElement<{ style: CSSProperties }>;
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
  const Children = useOverlay(ChildrenRenderer);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const anchorRect = anchorRef?.current?.getBoundingClientRect();

    if (!anchorRect) {
      return;
    }

    const newPosition: Position = { x: 0, y: 0 };
    const offsetValue = calculateOffsetValue(offset);

    console.log('Anchor Position:', anchorRect);
    console.log('Offset Value:', offsetValue);

    switch (side) {
      case 'top':
        newPosition.y = anchorRect.top - offsetValue;
        break;
      case 'bottom':
        newPosition.y = anchorRect.bottom + offsetValue;
        break;
      case 'left':
        newPosition.x = anchorRect.left - offsetValue;
        break;
      case 'right':
        newPosition.x = anchorRect.right + offsetValue;
        break;
    }

    switch (align) {
      case 'start':
        if (side === 'top' || side === 'bottom') {
          newPosition.x = anchorRect.left;
        } else {
          newPosition.y = anchorRect.top;
        }
        break;
      case 'center':
        if (side === 'top' || side === 'bottom') {
          newPosition.x = anchorRect.left + anchorRect.width / 2;
        } else {
          newPosition.y = anchorRect.top + anchorRect.height / 2;
        }
        break;
      case 'end':
        if (side === 'top' || side === 'bottom') {
          newPosition.x = anchorRect.right;
        } else {
          newPosition.y = anchorRect.bottom;
        }
        break;
    }

    console.log('Calculated Position:', newPosition.x, newPosition.y);

    setPosition(newPosition);
  }, [anchorRef, side, align, offset]);

  useEffect(() => {
    if (show) {
      Children.show();
    } else {
      Children.hide();
    }
  }, [Children, show]);

  return (
    <Children.Render style={{ top: position.y, left: position.x }}>
      {children}
    </Children.Render>
  );
}

interface ChildrenRendererProps {
  style: CSSProperties;
  children: ReactElement<{ style: CSSProperties }>;
}

function ChildrenRenderer(props: ChildrenRendererProps) {
  const { children, style } = props;
  return cloneElement(children, { style });
}
