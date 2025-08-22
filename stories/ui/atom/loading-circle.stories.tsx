import type { Meta, StoryObj } from '@storybook/react';
import { LoadingCircle } from '@/components/atom/loading-circle';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';

const meta: Meta<typeof LoadingCircle> = {
  title: 'UI/Atom/Loading Circle',
};

export default meta;

export const Showcase: StoryObj<typeof LoadingCircle> = {
  render: (args) => (
    <Container>
      <Row gap={16} align='center'>
        <LoadingCircle {...args} size='body' />
        <LoadingCircle {...args} size='caption' />
        <LoadingCircle {...args} size='footnote' />
      </Row>
    </Container>
  ),
  args: {
    color: 'currentColor',
  },
};
