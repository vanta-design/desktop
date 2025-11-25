import type { ReactNode } from 'react';
import { Typo } from '@/components/atom/typography';
import { Container } from '@/components/layout/container';
import { Floating } from '@/components/layout/floating';
import { Row } from '@/components/layout/row';
import { glass } from '@/styles/effect.css';
import { spacing } from '@/tokens/attribute.css';
import { cn } from '@/utils/common';
import { footer } from './styles/footer.css';

interface _PanelFooterProps {
  profile?: ReactNode;
  name: string;
}

export function _PanelFooter(props: _PanelFooterProps) {
  const { profile, name } = props;

  return (
    <Floating className={cn(footer, glass.strong)}>
      <Container horizontal='large'>
        <Row gap={spacing[8]} justify='start'>
          {profile}
          <Typo.Caption>{name}</Typo.Caption>
        </Row>
      </Container>
    </Floating>
  );
}
