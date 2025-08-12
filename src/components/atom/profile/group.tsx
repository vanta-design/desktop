import type { PropsWithChildren } from 'react';
import { Row } from '@/components/layout/row';
import { group } from './styles/group.css';

interface _ProfileGroupProps extends PropsWithChildren {}

export function _ProfileGroup(props: _ProfileGroupProps) {
  const { children } = props;

  return (
    <Row className={group} justify='start' align='center'>
      {children}
    </Row>
  );
}
