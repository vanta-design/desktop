import { cloneElement, type ReactElement } from 'react';
import { useMenuContext } from './context';

interface _MenuTriggerProps {
  children: ReactElement;
}

export function _MenuTrigger(props: _MenuTriggerProps) {
  const { children } = props;

  const { setShow } = useMenuContext();

  return cloneElement(children, {});
}
