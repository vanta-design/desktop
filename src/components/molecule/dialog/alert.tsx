import { Button } from '@/components/atom/button';
import type { OverlayComponentProps } from '@/components/features/overlay/types';
import { DialogBase as Dialog } from './compound';

export interface AlertDialogProps {
  title: string;
  description?: string;
}

export function _AlertDialog(props: AlertDialogProps & OverlayComponentProps) {
  const { title, description, isOpen, close } = props;

  return (
    <Dialog role='alertdialog' maxWidth={500} isOpen={isOpen} close={close}>
      <Dialog.Header title={title} description={description} />
      <Dialog.Footer>
        <Button.Medium onClick={close}>Ok</Button.Medium>
      </Dialog.Footer>
    </Dialog>
  );
}
