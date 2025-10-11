import { Button } from '@/components/atom/button';
import { _Dialog } from '@/components/atom/dialog';
import { Paragraph } from '@/components/atom/typography';
import type { OverlayComponentProps } from '@/components/features/overlay/types';
import { Container } from '@/components/layout/container';
import { text } from '@/tokens/color.css';

interface _AlertDialogProps {
  title: string;
  description?: string;
}

export function _AlertDialog(props: _AlertDialogProps & OverlayComponentProps) {
  const { title, description, isOpen, close } = props;

  return (
    <_Dialog.Root close={close}>
      <_Dialog.Container isOpen={isOpen} maxWidth={500}>
        <Container vertical='small' horizontal='small'>
          <_Dialog.Header title={title} close={close} hideCloseButton />
          <_Dialog.Body compact>
            <Paragraph.Body wrap color={text.tertiary}>
              {description}
            </Paragraph.Body>
          </_Dialog.Body>
        </Container>
        <_Dialog.Footer>
          <Button.Medium onClick={close}>Ok</Button.Medium>
        </_Dialog.Footer>
      </_Dialog.Container>
    </_Dialog.Root>
  );
}
