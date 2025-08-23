import type { ReactNode } from 'react';
import { _Dialog } from '@/components/atom/dialog';
import type { OverlayComponentProps } from '@/components/features/overlay/types';
import { Container } from '@/components/layout/container';

interface _DefaultDialogProps {
  title: string;
  content: ReactNode;
  footer: ReactNode;
  preventClose?: boolean;
  maxWidth?: string | number;
}

export function _DefaultDialog(
  props: _DefaultDialogProps & OverlayComponentProps,
) {
  const { title, content, footer, preventClose, maxWidth, isOpen, close } =
    props;

  return (
    <_Dialog.Root preventClose={preventClose} close={close}>
      <_Dialog.Container isOpen={isOpen} maxWidth={maxWidth || 600}>
        <Container vertical='narrow' horizontal='narrow'>
          <_Dialog.Header title={title} close={close} />
          <_Dialog.Body>{content}</_Dialog.Body>
        </Container>
        <_Dialog.Footer outline>{footer}</_Dialog.Footer>
      </_Dialog.Container>
    </_Dialog.Root>
  );
}
