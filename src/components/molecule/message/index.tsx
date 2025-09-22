import { _BubbleMessage } from './bubble';
import { _CompactMessage } from './compact';
import type { _MessageProps, MessageStyleVariant } from './types';

export interface MessageProps extends _MessageProps {
  variant?: MessageStyleVariant;
}

export function Message(props: MessageProps) {
  const { variant } = props;

  if (variant === 'compact') {
    return <_CompactMessage {...props} />;
  }

  return <_BubbleMessage {...props} />;
}
