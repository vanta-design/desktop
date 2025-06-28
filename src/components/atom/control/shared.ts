export type ControlStatus = 'checked' | 'none' | 'indeterminate';

export function getAriaChecked(status: ControlStatus) {
  switch (status) {
    case 'checked':
      return 'true';
    case 'none':
      return 'false';
    case 'indeterminate':
      return 'mixed';
  }
}
