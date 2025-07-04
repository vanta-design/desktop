import type { Meta, StoryObj } from '@storybook/react';
import { TorlnSymbol } from '@/components/atom/torln-symbol';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';

const meta: Meta<typeof TorlnSymbol> = {
  title: 'UI/Atom/TorlnSymbol',
  args: {
    withLabel: true,
  },
};

export default meta;

export const Showcase: StoryObj<typeof TorlnSymbol> = {
  render: (props) => (
    <Container vertical='wide'>
      <Row>
        <TorlnSymbol {...props} />
      </Row>
    </Container>
  ),
};
