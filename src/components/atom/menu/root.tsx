import { type PropsWithChildren, useState } from 'react';
import { MenuContext } from './context';

export function _MenuRoot(props: PropsWithChildren) {
  const { children } = props;

  const [show, setShow] = useState(false);

  return <MenuContext value={{ show, setShow }}>{children}</MenuContext>;
}
