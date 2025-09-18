import { type PropsWithChildren, useRef, useState } from 'react';
import { MenuContext } from './context';

export function _MenuRoot(props: PropsWithChildren) {
  const { children } = props;

  const [show, setShow] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);

  return (
    <MenuContext value={{ show, triggerRef, setShow }}>{children}</MenuContext>
  );
}
