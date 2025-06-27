import { Check, Minus } from 'lucide-react';
import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { cn } from '@/utils/common';
import { Icon } from '../../icon';
import {
  type ControlPropsBase,
  type ControlStatus,
  getAriaChecked,
} from '../shared';
import { active, box } from '../styles/checkbox.css';
import { wrapper } from '../styles/control.css';

interface _CheckboxProps extends ControlPropsBase {
  status?: ControlStatus;
  defaultStatus?: ControlStatus;
}

export function _Checkbox(props: _CheckboxProps) {
  const { status: propStatus, defaultStatus, ...restProps } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState(propStatus || defaultStatus || 'none');
  const icon =
    status === 'checked' ? Check : status === 'indeterminate' ? Minus : null;

  const onClick = useCallback(() => {
    if (status === 'checked') {
      setStatus('none');
    } else {
      setStatus('checked');
    }
  }, [status]);

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

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    if (status === 'indeterminate') {
      inputRef.current.indeterminate = true;
    }
  }, [status]);

  return (
    <div
      className={wrapper}
      role='checkbox'
      tabIndex={0}
      aria-checked={getAriaChecked(status)}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <span className={cn(box, status !== 'none' && active)}>
        <Icon icon={icon} size={14} />
      </span>
      <input
        {...restProps}
        ref={inputRef}
        type='checkbox'
        checked={status === 'checked'}
        aria-hidden
        hidden
        tabIndex={-1}
        onChange={() => {}}
      />
    </div>
  );
}
