import type { PropsWithChildren } from 'react';
import { container } from './styles/container.css';

type DialogRole = 'dialog' | 'alertdialog';

interface _DialogContainerProps extends PropsWithChildren {
  role?: DialogRole;
}

export function _DialogContainer(props: _DialogContainerProps) {
  const { role, children } = props;

  return (
    <dialog
      role={role}
      className={container}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      {children}
    </dialog>
  );
}
