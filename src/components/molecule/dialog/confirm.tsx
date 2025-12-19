import { useCallback, useState } from 'react';
import { Button } from '@/components/atom/button';
import type { OverlayComponentProps } from '@/components/features/overlay/types';
import { DialogBase as Dialog } from './compound';

export interface ConfirmDialogProps {
  title: string;
  description?: string;
  confirmLabel?: string;
  declineLabel?: string;
  onConfirm: () => unknown;
}

export function _ConfirmDialog(
  props: ConfirmDialogProps & OverlayComponentProps,
) {
  const {
    title,
    description,
    confirmLabel = 'Ok',
    declineLabel = 'Cancel',
    onConfirm,
    isOpen,
    close,
  } = props;
  const [isProcessing, setIsProcessing] = useState(false);

  const onClickOk = useCallback(async () => {
    setIsProcessing(true);
    await onConfirm();
    close();
    setIsProcessing(false);
  }, [onConfirm, close]);

  return (
    <Dialog
      role='alertdialog'
      preventClose={isProcessing}
      maxWidth={500}
      isOpen={isOpen}
      close={close}
    >
      <Dialog.Header title={title} description={description} />
      <Dialog.Footer>
        <Button.Medium
          variant='secondary'
          disabled={isProcessing}
          onClick={close}
        >
          {declineLabel}
        </Button.Medium>
        <Button.Medium loading={isProcessing} onClick={onClickOk}>
          {confirmLabel}
        </Button.Medium>
      </Dialog.Footer>
    </Dialog>
  );
}
