import type { PropsWithChildren } from 'react';
import { Positioner } from '@/components/features/positioner';
import { Column } from '@/components/layout/column';
import { spacing } from '@/tokens/attribute.css';
import { useMenuContext } from './context';
import { list } from './styles/list.css';

interface _MenuListProps extends PropsWithChildren {}

export function _MenuList(props: _MenuListProps) {
  const { children } = props;
  const { show, listRef, triggerRef } = useMenuContext();

  return (
    <Positioner show={show} anchorRef={triggerRef} offset={spacing[8]}>
      <Column as='ul' ref={listRef} className={list}>
        {children}
      </Column>
    </Positioner>
  );
}
