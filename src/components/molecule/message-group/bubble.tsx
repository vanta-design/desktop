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

export function _BubbleMessageGroup(props: _MessageGroupProps) {
  const { sender, profileUrl, name, children } = props;

  return (
    <Container vertical='narrow' horizontal='none'>
      <Row gap={spacing[8]} align='end' justify='start'>
        {sender === 'opponent' && (
          <Profile.Medium src={profileUrl} alt={name} />
        )}
        <Column className={cn(messageGroup, fillWidth)} gap={spacing[4]}>
          {sender === 'opponent' && (
            <Typo.Footnote color={text.tertiary}>{name}</Typo.Footnote>
          )}
          {Children.map(children, (child) => {
            if (isValidElement<MessageProps>(child)) {
              return cloneElement(child, { variant: 'bubble', sender });
            }
          })}
        </Column>
      </Row>
    </Container>
  );
}
