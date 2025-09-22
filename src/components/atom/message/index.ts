import { _MessageReaction } from './reaction';
import { _MessageReactionGroup } from './reaction-group';
import { _MessageReply } from './reply';

const _Message = {
  Reply: _MessageReply,
  Reaction: _MessageReaction,
  ReactionGroup: _MessageReactionGroup,
};

export { _Message };
