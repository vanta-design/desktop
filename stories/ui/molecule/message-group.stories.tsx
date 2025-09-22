import type { Meta, StoryObj } from '@storybook/react';
import { Column } from '@/components/layout/column';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';
import { Message } from '@/components/molecule/message';
import { MessageGroup } from '@/components/molecule/message-group';

const meta: Meta = {
  title: 'UI/Molecule/Message Group',
};

export default meta;

export const Bubble: StoryObj = {
  render: () => (
    <Container>
      <Row justify='center'>
        <Column style={{ width: 600 }}>
          <MessageGroup.Bubble
            sender='me'
            profileUrl='/vanta.png'
            name='David'
            timestamp='9:41 AM'
          >
            <Message timestamp='9:41 AM'>두근두근해</Message>
            <Message timestamp='9:41 AM'>콩닥콩닥해</Message>
            <Message timestamp='9:41 AM'>싱글싱글해</Message>
          </MessageGroup.Bubble>
          <MessageGroup.Bubble
            sender='opponent'
            profileUrl='/vanta.png'
            name='Ryan'
            timestamp='9:41 AM'
          >
            <Message timestamp='9:41 AM'>두근두근해</Message>
            <Message timestamp='9:41 AM'>콩닥콩닥해</Message>
            <Message timestamp='9:41 AM'>싱글싱글해</Message>
          </MessageGroup.Bubble>
        </Column>
      </Row>
    </Container>
  ),
};

export const Compact: StoryObj = {
  render: () => (
    <Container>
      <Row justify='center'>
        <Column style={{ width: 600 }}>
          <MessageGroup.Compact
            sender='me'
            profileUrl='/vanta.png'
            name='David'
            timestamp='9:41 AM'
          >
            <Message timestamp='9:41 AM'>두근두근해</Message>
            <Message timestamp='9:41 AM'>콩닥콩닥해</Message>
            <Message timestamp='9:41 AM'>싱글싱글해</Message>
          </MessageGroup.Compact>
          <MessageGroup.Compact
            sender='opponent'
            profileUrl='/vanta.png'
            name='Ryan'
            timestamp='9:41 AM'
          >
            <Message timestamp='9:41 AM'>두근두근해</Message>
            <Message timestamp='9:41 AM'>콩닥콩닥해</Message>
            <Message timestamp='9:41 AM'>싱글싱글해</Message>
          </MessageGroup.Compact>
        </Column>
      </Row>
    </Container>
  ),
};
