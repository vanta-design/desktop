import type { PropsWithChildren } from 'react';
import { Column } from '@/components/layout/column';
import { _SidebarHeader } from './header';
import { _SidebarMenu } from './menu';
import { sidebar } from './styles/sidebar.css';

export function Sidebar(props: PropsWithChildren) {
  const { children } = props;

  return <Column className={sidebar}>{children}</Column>;
}

Sidebar.Header = _SidebarHeader;
Sidebar.Menu = _SidebarMenu;
