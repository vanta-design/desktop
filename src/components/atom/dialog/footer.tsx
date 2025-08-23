import type { PropsWithChildren } from 'react';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import { footerOutline } from './styles/footer.css';

interface _DialogFooterProps extends PropsWithChildren {
  outline?: boolean;
}

export function _DialogFooter(props: _DialogFooterProps) {
  const { outline = false, children } = props;

  return (
    <Container
      className={outline ? footerOutline : ''}
      vertical='wide'
      horizontal='wide'
    >
      <Row gap={spacing[8]} align='center' justify='end'>
        {children}
      </Row>
    </Container>
  );
}
