export type MessageReaction = {
  emoji: string;
  count: number;

  /**
   * Human-readable label for the emoji
   * @example "Thumbs Up"
   */
  emojiPrettyName: string;

  /**
   * Human-readable label for the unit
   * @example "Reaction(s)"
   */
  unitPrettyName: string;
};
