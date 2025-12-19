import {
  createContext,
  type PropsWithChildren,
  type ReactNode,
  useContext,
} from 'react';
import { _Dialog } from '@/components/atom/dialog';
import type { OverlayComponentProps } from '@/components/features/overlay/types';

type DialogRole = 'dialog' | 'alertdialog';

interface DialogContextValue {
  close: () => void;
}

const DialogContext = createContext<DialogContextValue | null>(null);

function useDialogContext() {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error('Dialog.* must be used within Dialog.Root');
  return ctx;
}

export interface DialogRootProps extends PropsWithChildren {
  preventClose?: boolean;
  role?: DialogRole;
  maxWidth?: number | string;
}

export function DialogRoot(props: DialogRootProps & OverlayComponentProps) {
  const {
    preventClose,
    role = 'dialog',
    maxWidth = 600,
    isOpen,
    close,
    children,
  } = props;

  return (
    <DialogContext.Provider value={{ close }}>
      <_Dialog.Root preventClose={preventClose} close={close}>
        <_Dialog.Container role={role} isOpen={isOpen} maxWidth={maxWidth}>
          {children}
        </_Dialog.Container>
      </_Dialog.Root>
    </DialogContext.Provider>
  );
}

export interface DialogHeaderProps {
  title: string;
  description?: string;
  closeButton?: boolean;
}

export function DialogHeader(props: DialogHeaderProps) {
  const { title, description, closeButton } = props;
  const { close } = useDialogContext();
  return (
    <_Dialog.Header
      title={title}
      description={description}
      close={close}
      closeButton={closeButton}
    />
  );
}

export function DialogBody(props: PropsWithChildren) {
  const { children } = props;
  return <_Dialog.Body>{children}</_Dialog.Body>;
}

export interface DialogFooterProps extends PropsWithChildren {
  outline?: boolean;
}

export function DialogFooter(props: DialogFooterProps) {
  const { outline, children } = props;
  return <_Dialog.Footer outline={outline}>{children}</_Dialog.Footer>;
}

export type DialogBaseComponent = ((
  props: DialogRootProps & OverlayComponentProps,
) => ReactNode) & {
  Root: typeof DialogRoot;
  Header: typeof DialogHeader;
  Body: typeof DialogBody;
  Footer: typeof DialogFooter;
};

export const DialogBase = Object.assign(DialogRoot, {
  Root: DialogRoot,
  Header: DialogHeader,
  Body: DialogBody,
  Footer: DialogFooter,
}) satisfies DialogBaseComponent;
