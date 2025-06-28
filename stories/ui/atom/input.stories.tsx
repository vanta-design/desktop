import type { Meta, StoryObj } from '@storybook/react';
import { Search } from 'lucide-react';
import { Input } from '@/components/atom/input';
import { Container } from '@/components/layout/container';
import { Row } from '@/components/layout/row';

const meta: Meta = {
  title: 'UI/Atom/Input',
};

export default meta;

export const Text: StoryObj = {
  render: () => (
    <Container>
      <Row>
        <Input
          placeholder='플레이스홀더'
          icon={Search}
          style={{ width: 300 }}
        />
      </Row>
    </Container>
  ),
};
