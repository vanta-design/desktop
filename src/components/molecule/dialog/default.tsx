import type { ReactNode } from 'react';
import type { OverlayComponentProps } from '@/components/features/overlay/types';
import { DialogBase as Dialog } from './compound';

export interface DefaultDialogProps {
  title: string;
  description?: string;
  content: ReactNode;
  footer: ReactNode;
  preventClose?: boolean;
  maxWidth?: string | number;
}

export function _DefaultDialog(
  props: DefaultDialogProps & OverlayComponentProps,
) {
  const {
    title,
    description,
    content,
    footer,
    preventClose,
    maxWidth,
    isOpen,
    close,
  } = props;

  return (
    <Dialog
      preventClose={preventClose}
      maxWidth={maxWidth || 600}
      isOpen={isOpen}
      close={close}
    >
      <Dialog.Header title={title} description={description} closeButton />
      <Dialog.Body>{content}</Dialog.Body>
      <Dialog.Footer outline>{footer}</Dialog.Footer>
    </Dialog>
  );
}
