import type { MessageSender } from '../message/types';

export interface _MessageGroupProps {
  sender: MessageSender;
  profileUrl: string;
  name: string;
  timestamp: string;
  children: ReactNode;
}
