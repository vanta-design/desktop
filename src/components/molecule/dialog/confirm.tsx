import { useCallback, useState } from 'react';
import { Button } from '@/components/atom/button';
import { _Dialog } from '@/components/atom/dialog';
import { Paragraph } from '@/components/atom/typography';
import type { OverlayComponentProps } from '@/components/features/overlay/types';
import { Container } from '@/components/layout/container';
import { text } from '@/tokens/color.css';

interface _ConfirmDialogProps {
  title: string;
  description?: string;
  confirmLabel?: string;
  declineLabel?: string;
  onConfirm: () => unknown;
}

export function _ConfirmDialog(
  props: _ConfirmDialogProps & OverlayComponentProps,
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
    <_Dialog.Root preventClose={isProcessing} close={close}>
      <_Dialog.Container isOpen={isOpen} maxWidth={500}>
        <Container vertical='narrow' horizontal='narrow'>
          <_Dialog.Header title={title} close={close} hideCloseButton />
          <_Dialog.Body compact>
            <Paragraph.Body wrap color={text.tertiary}>
              {description}
            </Paragraph.Body>
          </_Dialog.Body>
        </Container>
        <_Dialog.Footer>
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
        </_Dialog.Footer>
      </_Dialog.Container>
    </_Dialog.Root>
  );
}
