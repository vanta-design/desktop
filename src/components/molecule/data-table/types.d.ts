import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export type Column<T extends object, K extends keyof T> = {
  [U in K]: {
    key: U;
    label: string;
    width?: number | string;
    sortable?: boolean;
    cell?: (value: T[U], index: number, data: T) => ReactNode;
  };
}[K];

export type Action<T extends object, K extends object> = {
  icon: ((data: T) => LucideIcon) | LucideIcon;
  disabled?: ((data: T) => boolean) | boolean;
  onClick: (value: T, data: K, index: number) => unknown;
};
