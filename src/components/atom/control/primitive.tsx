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
import { useControlGroupContext } from '@/components/molecule/control-group/context';
import { useInputFieldContext } from '@/components/molecule/input-field/context';
import { spacing } from '@/tokens/attribute.css';
import { Label } from '../label';
import { type ControlStatus, getAriaChecked } from './shared';
import { boundingBox, wrapper } from './styles/primitive.css';

type ChildrenArgs = {
  id: string;
  status: ControlStatus;
  inputRef: RefObject<HTMLInputElement | null>;
};

interface _PrimitiveControlProps {
  role: 'checkbox' | 'radio';
  value?: string;
  status?: ControlStatus;
  defaultStatus?: ControlStatus;
  label?: ReactNode;
  children: (args: ChildrenArgs) => ReactNode;
}

export function _PrimitiveControl(props: _PrimitiveControlProps) {
  const {
    role,
    value,
    status: propStatus,
    defaultStatus,
    label,
    children,
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const controlId = useId();
  const [status, setStatus] = useState(propStatus || defaultStatus || 'none');
  const groupContext = useControlGroupContext();
  const { optional } = useInputFieldContext();

  const updateStatus = useCallback(() => {
    setStatus(inputRef.current?.checked ? 'checked' : 'none');
  }, []);

  const onClick = useCallback(() => {
    inputRef.current?.click();
    updateStatus();
  }, [updateStatus]);

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
    updateStatus();
  }, [updateStatus]);

  useEffect(() => {
    if (propStatus) {
      setStatus(propStatus);
    }
  }, [propStatus]);

  return (
    <Row className={wrapper} gap={spacing[6]} align='center' justify='start'>
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
          name={groupContext?.name}
          value={value}
          checked={status === 'checked'}
          required={!optional}
          aria-hidden
          hidden
          tabIndex={-1}
          onChange={updateStatus}
        />
      </div>
      {label && <Label htmlFor={controlId}>{label}</Label>}
    </Row>
  );
}
