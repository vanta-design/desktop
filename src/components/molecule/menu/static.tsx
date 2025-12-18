import type { LucideIcon } from 'lucide-react';
import type { PropsWithChildren } from 'react';
import { _Menu } from '@/components/atom/menu';

type Item = {
  icon?: LucideIcon;
  label: string;
  isDestructive?: boolean;
  onClick?: () => unknown;
  subItems?: Array<Item>;
};

interface _StaticMenuProps extends PropsWithChildren {
  items: Array<Item>;
}

export function _StaticMenu(props: _StaticMenuProps) {
  const { items, children } = props;

  return (
    <_Menu.Root>
      <_Menu.List>
        {items.map((item, i) => (
          <_Menu.Item
            key={i.toString()}
            semantic={item.isDestructive ? 'negative' : 'neutral'}
            onClick={item.onClick}
          >
            {item.label}
          </_Menu.Item>
        ))}
      </_Menu.List>
      {children}
    </_Menu.Root>
  );
}
