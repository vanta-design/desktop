import { _AlertDialog } from './alert';
import { DialogBase } from './compound';
import { _ConfirmDialog } from './confirm';
import { _DefaultDialog } from './default';

const Dialog = DialogBase;
const AlertDialog = _AlertDialog;
const ConfirmDialog = _ConfirmDialog;
const DefaultDialog = _DefaultDialog;

export { AlertDialog, ConfirmDialog, DefaultDialog, Dialog };
export type { AlertDialogProps } from './alert';
export type {
  DialogFooterProps,
  DialogHeaderProps,
  DialogRootProps,
} from './compound';
export type { ConfirmDialogProps } from './confirm';
export type { DefaultDialogProps } from './default';
