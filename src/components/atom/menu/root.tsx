import { type PropsWithChildren, useEffect, useRef, useState } from 'react';
import { MenuContext } from './context';

export function _MenuRoot(props: PropsWithChildren) {
  const { children } = props;

  const [show, setShow] = useState(false);
  const listRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!show) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        triggerRef.current?.contains(target) ||
        listRef.current?.contains(target)
      ) {
        return;
      }

      setShow(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  return (
    <MenuContext value={{ show, listRef, triggerRef, setShow }}>
      {children}
    </MenuContext>
  );
}
