import { _Message } from '@/components/atom/message';
import { Paragraph } from '@/components/atom/typography';
import { Column } from '@/components/layout/column';
import { spacing } from '@/tokens/attribute.css';
import type { _MessageProps } from './types';

export function _CompactMessage(props: _MessageProps) {
  const { reply, reactions = [], children } = props;

  return (
    <Column gap={spacing[6]}>
      <Column align='start'>
        {reply && (
          <_Message.Reply author={reply.author}>{reply.content}</_Message.Reply>
        )}
        {typeof children === 'string' ? (
          <Paragraph.Body>{children}</Paragraph.Body>
        ) : (
          children
        )}
      </Column>
      <_Message.ReactionGroup reactions={reactions} />
    </Column>
  );
}
