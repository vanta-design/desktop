import type { PropsWithChildren } from 'react';
import { Container } from '@/components/layout/container';

interface _DialogBodyProps extends PropsWithChildren {
  compact?: boolean;
}

export function _DialogBody(props: _DialogBodyProps) {
  const { compact = false, children } = props;

  return (
    <Container vertical={compact ? 'none' : 'large'} horizontal='large'>
      {children}
    </Container>
  );
}
