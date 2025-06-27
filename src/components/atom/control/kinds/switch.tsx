import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { cn } from '@/utils/common';
import type { ControlPropsBase } from '../shared';
import { wrapper } from '../styles/control.css';
import { activeStyle, box, thumb } from '../styles/switch.css';

interface _SwitchProps extends ControlPropsBase {
  active?: boolean;
  defaultStatus?: boolean;
}

export function _Switch(props: _SwitchProps) {
  const { active: propActive, defaultStatus, ...restProps } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState(propActive || defaultStatus || false);

  const onClick = useCallback(() => {
    setActive((prev) => !prev);
  }, []);

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
    if (propActive !== undefined) {
      setActive(propActive);
    }
  }, [propActive]);

  return (
    <div
      className={wrapper}
      role='switch'
      tabIndex={0}
      aria-checked={active}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <span className={cn(box, active && activeStyle)}>
        <span className={thumb} />
      </span>
      <input
        {...restProps}
        ref={inputRef}
        type='checkbox'
        checked={active}
        aria-hidden
        hidden
        tabIndex={-1}
        onChange={() => {}}
      />
    </div>
  );
}
