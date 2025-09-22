import type { MessageReaction } from './types';

export function generateAriaLabel(reaction: MessageReaction, active: boolean) {
  const base = `${reaction.emojiPrettyName}, ${reaction.count} ${reaction.unitPrettyName}`;

  if (active) {
    return `${base}, Includes you.`;
  }

  return base;
}
