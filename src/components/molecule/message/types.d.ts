import type { PropsWithChildren, ReactNode } from 'react';
import type { MessageReaction } from '@/components/atom/message/types';

export type MessageStyleVariant = 'bubble' | 'compact';

export type MessageSender = 'me' | 'opponent';

export type MessageReply = {
  author: string;
  content: ReactNode;
};

interface _MessageProps extends PropsWithChildren {
  sender?: MessageSender;
  reply?: MessageReply;
  reactions?: Array<MessageReaction>;
  timestamp: string;
}
