import {
  cloneElement,
  type ReactElement,
  type RefObject,
  useCallback,
} from 'react';
import { useMenuContext } from './context';

interface _MenuTriggerProps {
  children: ReactElement<{
    ref: RefObject<HTMLElement | null>;
    onClick: () => unknown;
  }>;
}

export function _MenuTrigger(props: _MenuTriggerProps) {
  const { children } = props;
  const { triggerRef } = useMenuContext();
  const { setShow } = useMenuContext();

  const onClick = useCallback(() => {
    setShow((prev) => !prev);
  }, [setShow]);

  return cloneElement(children, {
    ref: triggerRef,
    onClick,
  });
}
