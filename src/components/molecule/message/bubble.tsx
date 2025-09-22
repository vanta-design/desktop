import { _Message } from '@/components/atom/message';
import { Paragraph, Typo } from '@/components/atom/typography';
import { Column } from '@/components/layout/column';
import { Flex } from '@/components/layout/flex';
import { spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';
import { cn } from '@/utils/common';
import {
  box,
  message,
  myReply,
  senderStyles,
  timestampStyle,
} from './styles/bubble.css';
import type { _MessageProps } from './types';

export function _BubbleMessage(props: _MessageProps) {
  const { sender = 'me', reply, reactions = [], timestamp, children } = props;

  return (
    <Column
      className={message}
      gap={spacing[6]}
      align={sender === 'me' ? 'end' : 'start'}
    >
      <Flex
        className={message}
        gap={spacing[8]}
        direction={sender === 'me' ? 'row-reverse' : 'row'}
        align='end'
      >
        <Column className={cn(box, senderStyles[sender])} align='start'>
          {reply && (
            <_Message.Reply
              className={cn(sender === 'me' && myReply)}
              author={reply.author}
            >
              {reply.content}
            </_Message.Reply>
          )}
          {typeof children === 'string' ? (
            <Paragraph.Body>{children}</Paragraph.Body>
          ) : (
            children
          )}
        </Column>
        <Typo.Footnote
          className={timestampStyle}
          weight='light'
          color={text.status.disabled}
        >
          {timestamp}
        </Typo.Footnote>
      </Flex>
      <_Message.ReactionGroup reactions={reactions} />
    </Column>
  );
}
