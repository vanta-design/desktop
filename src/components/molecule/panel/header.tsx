import { Menu } from 'lucide-react';
import { IconButton } from '@/components/atom/button';
import { Typo } from '@/components/atom/typography';
import { Column } from '@/components/layout/column';
import { Container } from '@/components/layout/container';
import { Floating } from '@/components/layout/floating';
import { Row } from '@/components/layout/row';
import { fullWidth } from '@/styles/utils.css';
import { spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';
import { header, image } from './styles/header.css';

interface _PanelHeaderProps {
  imageSrc: string;
  name: string;
  description: string;
}

export function _PanelHeader(props: _PanelHeaderProps) {
  const { imageSrc, name, description } = props;

  return (
    <Floating className={header}>
      <Container>
        <Row gap={spacing[8]} align='center'>
          <Container vertical='narrow' horizontal='narrow'>
            <Row gap={spacing[12]} align='center' justify='start'>
              <img className={image} src={imageSrc} alt={name} />
              <Column className={fullWidth} align='start'>
                <Typo.Body weight='strong'>{name}</Typo.Body>
                <Typo.Footnote color={text.tertiary}>
                  {description}
                </Typo.Footnote>
              </Column>
            </Row>
          </Container>
          <IconButton.Small variant='secondary' icon={Menu} />
        </Row>
      </Container>
    </Floating>
  );
}
