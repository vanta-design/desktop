import type { PropsWithChildren } from 'react';
import { container } from './styles/container.css';

type DialogRole = 'dialog' | 'alertdialog';

interface _DialogContainerProps extends PropsWithChildren {
  role?: DialogRole;
  isOpen: boolean;
  maxWidth?: number | string;
}

export function _DialogContainer(props: _DialogContainerProps) {
  const { role, isOpen, maxWidth, children } = props;

  return (
    <dialog
      className={container}
      role={role}
      style={{ maxWidth }}
      open={isOpen}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      {children}
    </dialog>
  );
}
