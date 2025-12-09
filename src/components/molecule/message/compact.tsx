import { _Message } from '@/components/atom/message';
import { Paragraph } from '@/components/atom/typography';
import { Column } from '@/components/layout/column';
import { fillWidth } from '@/styles/utils.css';
import { spacing } from '@/tokens/attribute.css';
import type { _MessageProps } from './types';

export function _CompactMessage(props: _MessageProps) {
  const { reply, reactions = [], children } = props;

  return (
    <Column className={fillWidth} gap={spacing[6]}>
      <Column className={fillWidth} align='start'>
        {reply && (
          <_Message.Reply author={reply.author}>{reply.content}</_Message.Reply>
        )}
        {typeof children === 'string' ? (
          <Paragraph.Body className={fillWidth}>{children}</Paragraph.Body>
        ) : (
          children
        )}
      </Column>
      <_Message.ReactionGroup reactions={reactions} />
    </Column>
  );
}
