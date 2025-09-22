import { useCallback, useEffect, useState } from 'react';
import { Row } from '@/components/layout/row';
import { accent } from '@/tokens/accent.css';
import { spacing } from '@/tokens/attribute.css';
import { text } from '@/tokens/color.css';
import { cn } from '@/utils/common';
import { Typo } from '../typography';
import { toggle, toggleActive } from './styles/reaction.css';
import type { MessageReaction } from './types';
import { generateAriaLabel } from './utils';

interface _MessageReactionProps {
  reaction: MessageReaction;
  active?: boolean;
  onClick?: (active: boolean) => unknown;
}

export function _MessageReaction(props: _MessageReactionProps) {
  const { reaction, active: propActive, onClick: propOnClick } = props;

  const [active, setActive] = useState(propActive ?? false);

  const onClick = useCallback(() => {
    const newActive = !active;
    const prevActive = structuredClone(active);

    setActive(newActive);

    try {
      propOnClick?.(newActive);
    } catch (error) {
      setActive(prevActive);
      throw error;
    }
  }, [active, propOnClick]);

  useEffect(() => {
    setActive(propActive ?? false);
  }, [propActive]);

  return (
    <Row
      as='button'
      className={cn(toggle, active && toggleActive)}
      gap={spacing[6]}
      align='center'
      aria-label={generateAriaLabel(reaction, active || false)}
      aria-pressed={active}
      onClick={onClick}
    >
      <Typo.Caption>{reaction.emoji}</Typo.Caption>
      <Typo.Footnote color={active ? accent.text.accent : text.tertiary}>
        {reaction.count.toLocaleString()}
      </Typo.Footnote>
    </Row>
  );
}
