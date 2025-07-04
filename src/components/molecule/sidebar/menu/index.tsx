import { useCallback, useState } from 'react';
import { Container } from '@/components/layout/container';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { _SidebarMenuHeader } from './header';
import { _SidebarMenuItem } from './item';

interface _SidebarMenuProps extends BaseProps<HAS_CHILDREN> {
  title: string;
  defaultOpen?: boolean;
}

export function _SidebarMenu(props: _SidebarMenuProps) {
  const { title, defaultOpen = true, children } = props;

  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <Container vertical='narrow'>
      <_SidebarMenuHeader title={title} open={isOpen} onClick={handleClick} />
      {isOpen && children}
    </Container>
  );
}

_SidebarMenu.Item = _SidebarMenuItem;
