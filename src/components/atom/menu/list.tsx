import type { PropsWithChildren } from 'react';
import { Column } from '@/components/layout/column';
import { Container } from '@/components/layout/container';
import { list, wrapper } from './styles/list.css';

interface _MenuListProps extends PropsWithChildren {}

export function _MenuList(props: _MenuListProps) {
  const { children } = props;

  return (
    <Container className={wrapper} vertical='narrow' horizontal='narrow'>
      <Column as='ul' className={list}>
        {children}
      </Column>
    </Container>
  );
}
