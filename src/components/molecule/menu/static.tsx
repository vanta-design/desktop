import type { LucideIcon } from 'lucide-react';

type Item = {
  icon?: LucideIcon;
  label: string;
  subItems?: Array<Item>;
};

interface _StaticMenuProps {
  items: Array<Item>;
}

export function _StaticMenu(props: _StaticMenuProps) {}
