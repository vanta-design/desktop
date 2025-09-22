import { Row } from '@/components/layout/row';
import { fitWidth } from '@/styles/utils.css';
import { spacing } from '@/tokens/attribute.css';
import { _MessageReaction } from './reaction';
import type { MessageReaction } from './types';

interface _MessageReactionGroupProps {
  reactions: Array<MessageReaction>;
}

export function _MessageReactionGroup(props: _MessageReactionGroupProps) {
  const { reactions } = props;

  if (reactions.length <= 0) {
    return null;
  }

  return (
    <Row className={fitWidth} role='group' gap={spacing[4]}>
      {reactions.map((reaction) => (
        <_MessageReaction key={reaction.emoji} reaction={reaction} />
      ))}
    </Row>
  );
}
