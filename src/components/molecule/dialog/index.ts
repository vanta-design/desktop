import { _AlertDialog } from './alert';
import { _ConfirmDialog } from './confirm';
import { _DefaultDialog } from './default';

const Dialog = {
  Alert: _AlertDialog,
  Confirm: _ConfirmDialog,
  Default: _DefaultDialog,
};

export { Dialog };
