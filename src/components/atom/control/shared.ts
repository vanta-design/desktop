import type { InputHTMLAttributes } from 'react';

export type ControlStatus = 'checked' | 'none' | 'indeterminate';

export type ControlPropsBase = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'defaultValue' | 'checked' | 'defaultChecked'
>;

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
