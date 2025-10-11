import { visuallyHidden } from '@/lib/style';
import { accent } from '@/tokens/accent.css';
import { radius, spacing } from '@/tokens/attribute.css';
import { fill } from '@/tokens/color.css';
import { style } from '@/utils/style';
import { messageGroup } from '../../message-group/styles.css';

export const message = style({});

export const box = style({
  width: 'fit-content',
  padding: `${spacing[8]} ${spacing[12]}`,
  borderRadius: radius[12],
});

export const senderStyles = {
  me: style({
    backgroundColor: accent.fill.accent,
    color: accent.text.base,
  }),
  opponent: style({
    backgroundColor: fill.interaction.raised,
  }),
};

export const myReply = style({
  color: accent.text.base,
});

export const timestampStyle = style({
  selectors: {
    [`${messageGroup} > ${message}:not(:last-of-type) &`]: visuallyHidden,
  },
});
