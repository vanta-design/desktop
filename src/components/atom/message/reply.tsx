import { CornerDownRight } from 'lucide-react';
import { Row } from '@/components/layout/row';
import { spacing } from '@/tokens/attribute.css';
import type { BaseProps, HAS_CHILDREN } from '@/types/props';
import { cn } from '@/utils/common';
import { Icon } from '../icon';
import { Typo } from '../typography';
import { reply } from './styles/reply.css';

interface _MessageReplyProps extends BaseProps<HAS_CHILDREN> {
  author: string;
}

export function _MessageReply(props: _MessageReplyProps) {
  const { author, className, children } = props;

  return (
    <Row
      className={cn(reply, className)}
      gap={spacing[4]}
      align='center'
      justify='start'
    >
      <Icon icon={CornerDownRight} size={12} />
      <Typo.Footnote weight='light'>{author}</Typo.Footnote>
      {typeof children === 'string' ? (
        <Typo.Footnote>{children}</Typo.Footnote>
      ) : (
        children
      )}
    </Row>
  );
}
