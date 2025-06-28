/** biome-ignore-all lint/a11y/useAriaPropsSupportedByRole: Biome cannot detect */

import {
  type KeyboardEvent,
  type ReactNode,
  type RefObject,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import { Label } from '../label';
import { type ControlStatus, getAriaChecked } from './shared';
import { boundingBox } from './styles/primitive.css';

type ChildrenArgs = {
  id: string;
  status: ControlStatus;
  inputRef: RefObject<HTMLInputElement | null>;
};

interface _PrimitiveControlProps {
  role: 'checkbox' | 'radio';
  status?: ControlStatus;
  defaultStatus?: ControlStatus;
  label?: ReactNode;
  children: (args: ChildrenArgs) => ReactNode;
  onClick?: (status: ControlStatus) => ControlStatus;
}

export function _PrimitiveControl(props: _PrimitiveControlProps) {
  const {
    role,
    status: propStatus,
    defaultStatus,
    label,
    children,
    onClick: propOnClick,
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const controlId = useId();
  const [status, setStatus] = useState(propStatus || defaultStatus || 'none');

  const onClick = useCallback(() => {
    if (propOnClick) {
      setStatus(propOnClick(status));
    } else {
      setStatus(status === 'checked' ? 'none' : 'checked');
    }
  }, [status, propOnClick]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        onClick();
      }
    },
    [onClick],
  );

  useEffect(() => {
    if (propStatus !== undefined) {
      setStatus(propStatus);
    }
  }, [propStatus]);

  return (
    <Row gap={spacing[6]} align='center' justify='start'>
      <div
        className={boundingBox}
        role={role}
        tabIndex={0}
        aria-checked={getAriaChecked(status)}
        onClick={onClick}
        onKeyDown={onKeyDown}
      >
        {children({ id: controlId, status, inputRef })}
        <input
          id={controlId}
          ref={inputRef}
          type={role}
          checked={status === 'checked'}
          aria-hidden
          hidden
          tabIndex={-1}
          onChange={() => {}}
        />
      </div>
      {label && <Label htmlFor={controlId}>{label}</Label>}
    </Row>
  );
}
