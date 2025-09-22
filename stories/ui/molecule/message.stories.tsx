import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';
import { Message } from '@/components/molecule/message';

const meta: Meta = {
  title: 'UI/Molecule/Message',
};

export default meta;

export const Bubble: StoryObj = {
  render: () => (
    <Container>
      <Row justify='center'>
        <div style={{ width: 600 }}>
          <Message
            variant='bubble'
            sender='me'
            timestamp='9:41 AM'
            reactions={[
              {
                emoji: '👍',
                count: 1,
                emojiPrettyName: 'Thumbs Up',
                unitPrettyName: 'Reaction(s)',
              },
            ]}
          >
            두근두근해
          </Message>
          <Message
            variant='bubble'
            sender='opponent'
            timestamp='9:41 AM'
            reply={{
              author: 'You',
              content: '두근두근해',
            }}
            reactions={[
              {
                emoji: '❤️',
                count: 3,
                emojiPrettyName: 'Heart',
                unitPrettyName: 'Reaction(s)',
              },
            ]}
          >
            콩닥콩닥해
          </Message>
        </div>
      </Row>
    </Container>
  ),
};

export const Compact: StoryObj = {
  render: () => (
    <Container>
      <Row justify='center'>
        <div style={{ width: 400 }}>
          <Message
            variant='compact'
            sender='me'
            timestamp='9:41 AM'
            reply={{
              author: 'David',
              content: '콩닥콩닥해',
            }}
            reactions={[
              {
                emoji: '👍',
                count: 1,
                emojiPrettyName: 'Thumbs Up',
                unitPrettyName: 'Reaction(s)',
              },
            ]}
          >
            두근두근해
          </Message>
        </div>
      </Row>
    </Container>
  ),
};
