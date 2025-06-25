import type { LucideIcon } from 'lucide-react';

export type HAS_CHILDREN = true;

export interface BaseProps<CHILDREN extends boolean = false> {
  className?: string;
  style?: React.CSSProperties;
  children?: CHILDREN extends true ? React.ReactNode : never;
}

export interface PropsWithIcons {
  leadingIcon?: LucideIcon;
  trailingIcon?: LucideIcon;
}
