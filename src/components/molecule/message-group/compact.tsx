import { Children, cloneElement, isValidElement } from 'react';
import { Profile } from '@/components/atom/profile';
import { Typo } from '@/components/atom/typography';
import { Column } from '@/components/layout/column';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';
import { fillWidth } from '@/styles/utils.css';
import { spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';
import { cn } from '@/utils/common';
import type { MessageProps } from '../message';
import { messageGroup } from './styles.css';
import type { _MessageGroupProps } from './types';

export function _CompactMessageGroup(props: _MessageGroupProps) {
  const { sender, profileUrl, name, timestamp, children } = props;

  return (
    <Container vertical='small' horizontal='none'>
      <Row gap={spacing[12]} align='start' justify='start'>
        <Profile.Medium src={profileUrl} alt={name} />
        <Column
          className={cn(messageGroup, fillWidth)}
          gap={spacing[4]}
          align='start'
        >
          <Row gap={spacing[16]} align='center' justify='between'>
            <Typo.Caption color={text.secondary}>{name}</Typo.Caption>
            <Typo.Footnote weight='light' color={text.tertiary}>
              {timestamp}
            </Typo.Footnote>
          </Row>
          <div>
            {Children.map(children, (child) => {
              if (isValidElement<MessageProps>(child)) {
                return cloneElement(child, { variant: 'compact', sender });
              }
            })}
          </div>
        </Column>
      </Row>
    </Container>
  );
}
